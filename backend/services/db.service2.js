import configConnection from "../config";

import mysql, { Connection } from "mysql";

export const dbService = {
  runSQL,
};

const connection = mysql.createConnection(configConnection);

connection.connect((error) => {
  if (error) {
    throw new Error("mySql failed connection");
  }

  console.log("connected to SQL server");
});

function runSQL(sqlCommand) {
  return new Promise((resolve, reject) => {
    connection.query(sqlCommand, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
