// -----------------------------------This code is done by Piyush Joshi-------------------------------------------
import React, { useState } from 'react';
import './WarehouseManagement.css';
const WarehouseManagement = () => {
  const [warehouses, setWarehouses] = useState([
    { id: 1, name: 'Private Warehouse', state: 'Maharashtra', city: 'Mumbai', status: 'Active' },

  ]);

  const handleEdit = (id) => {
    // logic
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this warehouse?')) {
      setWarehouses(warehouses.filter(warehouse => warehouse.id !== id));
    }
  };

  return (
    <div>
      <h1>Warehouse Management</h1>
      <button>Add New</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>State</th>
            <th>City</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {warehouses.map(warehouse => (
            <tr key={warehouse.id}>
              <td>{warehouse.id}</td>
              <td>{warehouse.name}</td>
              <td>{warehouse.state}</td>
              <td>{warehouse.city}</td>
              <td>{warehouse.status}</td>
              <td>
                <button onClick={() => handleEdit(warehouse.id)}>Edit</button>
                <button onClick={() => handleDelete(warehouse.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WarehouseManagement;
