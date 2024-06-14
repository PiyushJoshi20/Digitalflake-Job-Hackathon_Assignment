// -----------------------------------This code is done by Piyush Joshi-------------------------------------------
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StateManagement.css';

const StateManagement = () => {
  const [states, setStates] = useState([]);
  const [editingState, setEditingState] = useState(null);
  const [newState, setNewState] = useState({ name: '', code: '', status: 'Active' });

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await axios.get('/api/states');
      setStates(response.data);
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  const handleAddState = async () => {
    try {
      const response = await axios.post('/api/states', newState);
      setStates([...states, response.data]);
      setNewState({ name: '', code: '', status: 'Active' });
    } catch (error) {
      console.error('Error adding state:', error);
    }
  };

  const handleEditState = async (state) => {
    try {
      const response = await axios.put(`/api/states/${state.id}`, state);
      setStates(states.map(s => (s.id === state.id ? response.data : s)));
      setEditingState(null);
    } catch (error) {
      console.error('Error editing state:', error);
    }
  };

  const handleDeleteState = async (id) => {
    try {
      await axios.delete(`/api/states/${id}`);
      setStates(states.filter(s => s.id !== id));
    } catch (error) {
      console.error('Error deleting state:', error);
    }
  };

  return (
    <div className="state-management-container">
      <div className="sidebar">

      </div>
      <div className="main-content">
        <h1>State Management</h1>
        <button onClick={() => setEditingState({ id: null, name: '', code: '', status: 'Active' })}>Add New</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>State Name</th>
              <th>State Code</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {states.map(state => (
              <tr key={state.id}>
                <td>{state.id}</td>
                <td>{state.name}</td>
                <td>{state.code}</td>
                <td>{state.status}</td>
                <td>
                  <button onClick={() => setEditingState(state)}>Edit</button>
                  <button onClick={() => handleDeleteState(state.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editingState && (
          <div className="edit-state-dialog">
            <h2>{editingState.id ? 'Edit State' : 'Add State'}</h2>
            <input
              type="text"
              placeholder="State Name"
              value={editingState.name}
              onChange={(e) => setEditingState({ ...editingState, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="State Code"
              value={editingState.code}
              onChange={(e) => setEditingState({ ...editingState, code: e.target.value })}
            />
            <select
              value={editingState.status}
              onChange={(e) => setEditingState({ ...editingState, status: e.target.value })}
            >
              <option value="Active">Active</option>
              <option value="Readonly">Readonly</option>
            </select>
            <button onClick={() => (editingState.id ? handleEditState(editingState) : handleAddState())}>
              {editingState.id ? 'Save' : 'Add'}
            </button>
            <button onClick={() => setEditingState(null)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StateManagement;
