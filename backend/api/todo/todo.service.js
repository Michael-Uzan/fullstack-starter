const dbService = require("../../services/db.service");
const logger = require("../../services/logger.service");
const ObjectId = require("mongodb").ObjectId;

const COLLECTION_NAME = "todo";

async function query(filterBy = {}) {
  try {
    const collection = await dbService.getCollection(COLLECTION_NAME);
    const todos = await collection.find({}).toArray();
    return todos;
  } catch (err) {
    logger.error("cannot find todos", err);
    throw err;
  }
}

async function getById(todoId) {
  try {
    const collection = await dbService.getCollection(COLLECTION_NAME);
    const todo = await collection.findOne({ _id: ObjectId(todoId) });
    return todo;
  } catch (err) {
    logger.error(`while finding todo ${todoId}`, err);
    throw err;
  }
}

async function remove(todoId) {
  try {
    const collection = await dbService.getCollection(COLLECTION_NAME);
    await collection.deleteOne({ _id: ObjectId(todoId) });
  } catch (err) {
    logger.error(`cannot remove todo ${todoId}`, err);
    throw err;
  }
}

async function update(todo) {
  try {
    const todoToSave = {
      _id: ObjectId(todo._id),
      text: todo.text,
      isDone: todo.isDone,
    };
    const collection = await dbService.getCollection(COLLECTION_NAME);
    await collection.updateOne({ _id: todoToSave._id }, { $set: todoToSave });
    return todoToSave;
  } catch (err) {
    logger.error(`cannot update todo ${todo._id}`, err);
    throw err;
  }
}

async function add(todo) {
  try {
    const todoToAdd = {
      text: todo.text,
      isDone: todo.isDone,
    };
    const collection = await dbService.getCollection(COLLECTION_NAME);
    await collection.insertOne(todoToAdd);
    return todoToAdd;
  } catch (err) {
    logger.error("cannot insert todo", err);
    throw err;
  }
}

function _buildCriteria(filterBy) {
  const criteria = {};
  if (filterBy.txt) {
    const txtCriteria = { $regex: filterBy.txt, $options: "i" };
    criteria.$or = [
      {
        username: txtCriteria,
      },
      {
        fullname: txtCriteria,
      },
    ];
  }
  return criteria;
}

module.exports = {
  query,
  getById,
  remove,
  update,
  add,
};
