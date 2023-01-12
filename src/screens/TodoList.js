import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoTable from '../components/TodoTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from '../layouts/DefaultLayout';

function TodoList() {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:5051/api/todo');
      setTodoData(response.data);
    }
    fetchData();
  }, []);

  return (
    <DefaultLayout title="To-do List">
      {todoData.length ? <TodoTable todoData={todoData} /> : <div> Loading... </div> }
    </DefaultLayout>
  );
}

export default TodoList;

/**import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from '../layouts/DefaultLayout';

function TodoList() {
  return (
    <DefaultLayout title="To-do">
      <div>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
        <button className="btn btn-primary">Add Task</button>
      </div>
    </DefaultLayout>
  );
}

export default TodoList;
**/