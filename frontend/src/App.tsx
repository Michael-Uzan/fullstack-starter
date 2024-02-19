import { ITodo } from 'interfaces/ITodo';
import React, { useEffect, useState } from 'react';
import { eventBusService } from 'services/event-bus.service';
import { todoService } from 'services/todo.service';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const loadTodos = await todoService.query();
        setTodos(loadTodos);
        eventBusService.showSuccessMsg('todos loaded!');
      } catch (error) {
        console.error('cannot load todos', error);
        eventBusService.showErrorMsg('error!!');
      }
    };

    loadTodos();
  }, []);

  const toggleDone = async (todo: ITodo) => {
    try {
      const updatedTodo = await todoService.save({
        ...todo,
        isDone: !todo.isDone,
      });
      setTodos((prevTodos) => [
        ...prevTodos.map((currTodo) =>
          currTodo._id === updatedTodo._id ? updatedTodo : currTodo,
        ),
      ]);
      eventBusService.showSuccessMsg('todo updated');
    } catch (error) {
      console.error('cannot load todos', error);
      eventBusService.showErrorMsg('error!!');
    }
  };

  const addTodo = async (newTodo: ITodo) => {
    try {
      const updatedTodo = await todoService.save(newTodo);
      setTodos((prevTodos) => [...prevTodos, updatedTodo]);
      eventBusService.showSuccessMsg('todo updated');
    } catch (error) {
      console.error('cannot load todos', error);
      eventBusService.showErrorMsg('error!!');
    }
  };

  const deleteTodo = async (todoId: string) => {
    try {
      await todoService.remove(todoId);
      setTodos((prevTodos) => [
        ...prevTodos.filter((todo) => todo._id !== todoId),
      ]);
      eventBusService.showSuccessMsg('todo deleted');
    } catch (error) {
      console.error('cannot delete todo', error);
      eventBusService.showErrorMsg('error!!');
    }
  };

  return (
    <div>
      <main className="main-container">
        <h1
          onClick={() => addTodo({ text: 'newTodo', isDone: false } as ITodo)}
        >
          {'my todos'}
        </h1>
        <div>
          {todos.map((todo: ITodo) => (
            <div key={todo._id}>
              <div onClick={() => deleteTodo(todo._id)}>{todo.text} </div>
              <span onClick={() => toggleDone(todo)}>
                {todo.isDone ? 'V' : '-'}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
