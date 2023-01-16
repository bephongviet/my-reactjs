import React, { useState } from 'react';
import axios from 'axios';

function TodoTableRow({ id, name, status }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{status == 1 ? <span>Done</span> : <span>Pending</span>}</td>
      <td>
        <input type="hidden" value={id}/>
        <button>Delete</button>
      </td>
    </tr>
  );
}

function TodoTable({todoData}) {
  const [rows, setRows] = useState(todoData);
  const [newTodo, setNewTodo] = useState({ name: '', status: '' });

  function handleAddRow() {
    setRows([...rows, { name: "", status: "" }]);
  }

  function handleChange(e) {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value
    });
  }

  async function handleAddTodo() {
    try {
      const response = await axios.post('http://localhost:5051/api/todo', newTodo);
      setRows([...rows, response.data]);
      setNewTodo({ name: '', status: '' });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TodoTableRow 
              id={row.id}
              name={row.name}
              status={row.status}
            />
          ))}
        </tbody>
      </table>
      <div className="row g-3">
        <div className="col-auto">
          <input type="text" className='form-control' name="name" value={newTodo.name} onChange={handleChange} placeholder="Name" />
        </div>
        <div className="col-auto">
          <select name="status" className='form-control' value={newTodo.status} onChange={handleChange}>
            <option>Select</option>
            <option value={0}>Pending</option>
            <option value={1}>Done</option>
          </select>
        </div>
        <div className="col-auto">
          <button onClick={handleAddTodo} className='btn btn-primary mb-3'>Add</button>
        </div>
      </div>
    </div>
  );
}

export default TodoTable;
