import React, { useState } from 'react';

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

  function handleAddRow() {
    setRows([...rows, { name: "", status: "" }]);
  }

  function handleChange(e, index) {
    const newRows = [...rows];
    newRows[index][e.target.name] = e.target.value;
    setRows(newRows);
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
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
}

export default TodoTable;
