import { dbService } from "../services/db.service";

export const usersService = {
  query,
  getById,
  add,
  update,
  remove,
};

const USERS_TABLE = "user";

function query(criteria = {}) {
  const namePart = criteria?.name || "";
  const sqlCmd = `SELECT * FROM ${USERS_TABLE} WHERE ${USERS_TABLE}.fullName LIKE '%${namePart}%'`;

  return dbService.runSQL(sqlCmd);
}

async function getById(userId) {
  const sqlCmd = `SELECT * FROM ${USERS_TABLE} WHERE ${USERS_TABLE}.id = ${userId}`;

  const users = await dbService.runSQL(sqlCmd);
  if (users.length === 1) {
    return users[0];
  }

  throw new Error(`user id ${userId} not found`);
}

async function add(user) {
  const sqlCmd = `INSERT INTO ${USERS_TABLE} (fullName, country, city, email, phoneNumber, jobTitle, yearsOfExperience) VALUES ("${user.fullName}", "${user.country}", "${user.city}", "${user.email}", "${user.phoneNumber}", "${user.jobTitle}", "${user.yearsOfExperience}" )`;

  const okPacket = await dbService.runSQL(sqlCmd);

  return getById(okPacket.insertId);
}

async function update({
  id,
  fullName,
  country,
  city,
  email,
  phoneNumber,
  jobTitle,
  yearsOfExperience,
}) {
  const sqlCmd = `UPDATE ${USERS_TABLE} SET fullName = "${fullName}", country = "${country}", city = "${city}", email = "${email}", phoneNumber = "${phoneNumber}", jobTitle = "${jobTitle}", yearsOfExperience = "${yearsOfExperience}" WHERE ${USERS_TABLE}.id = ${id}`;

  const okPacket = await dbService.runSQL(sqlCmd);
  if (okPacket.affectedRows !== 0) {
    return okPacket;
  }

  throw new Error(`No user updated - user id ${id}`);
}

function remove(userId) {
  const sqlCmd = `DELETE FROM ${USERS_TABLE} WHERE ${USERS_TABLE}.id = ${userId}`;

  return dbService
    .runSQL(sqlCmd)
    .then((okPacket) =>
      okPacket.affectedRows === 1
        ? okPacket
        : Promise.reject(new Error(`No user deleted - user id ${userId}`))
    );
}
