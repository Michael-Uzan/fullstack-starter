import { ITodo } from 'interfaces/ITodo';
// import { httpService } from './http.service';
import { httpService2 } from './http.service2';

export const todoService = {
  query,
  getTodoById,
  remove,
  save,
};

const API_URL = 'todo';

function query(): Promise<ITodo[]> {
  return httpService2.get(API_URL);
}

function getTodoById(todoId: string) {
  return httpService2.get(`${API_URL}/${todoId}`);
}

function remove(todoId: string) {
  return httpService2.delete(`${API_URL}/${todoId}`);
}

function save(todo: ITodo) {
  if (todo._id) {
    return _put(todo);
  } else {
    return _post(todo);
  }
}

function _put(todo: ITodo) {
  return httpService2.put(`${API_URL}/${todo._id}`, todo);
}
function _post(todo: ITodo) {
  return httpService2.post(API_URL, todo);
}
