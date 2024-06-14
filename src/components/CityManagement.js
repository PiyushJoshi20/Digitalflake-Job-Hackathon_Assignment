// -----------------------------------This code is done by Piyush Joshi-------------------------------------------
import React, { useState, useEffect } from 'react';
import './CityManagement.css';

const CityManagement = () => {
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [editingCity, setEditingCity] = useState(null);
  const [newCity, setNewCity] = useState({ name: '', code: '', stateName: '', status: 'Active' });

  useEffect(() => {
    fetch('http://localhost:5000/api/cities')
      .then(response => response.json())
      .then(data => setCities(data));
    fetch('http://localhost:5000/api/states')
      .then(response => response.json())
      .then(data => setStates(data));
  }, []);

  const handleAddCity = () => {
    fetch('http://localhost:5000/api/cities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newCity, id: cities.length + 1 })
    })
      .then(response => response.json())
      .then(data => {
        setCities([...cities, { ...newCity, id: cities.length + 1 }]);
        setNewCity({ name: '', code: '', stateName: '', status: 'Active' });
      });
  };

  const handleDeleteCity = (id) => {
    if (window.confirm('Are you sure you want to delete this city?')) {
      fetch(`http://localhost:5000/api/cities/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => {
          setCities(cities.filter(city => city.id !== id));
        });
    }
  };

  const handleEditCity = (city) => {
    setEditingCity(city);
  };

  const handleSaveCity = () => {
    fetch(`http://localhost:5000/api/cities/${editingCity.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingCity)
    })
      .then(response => response.json())
      .then(data => {
        setCities(cities.map(city => (city.id === editingCity.id ? editingCity : city)));
        setEditingCity(null);
      });
  };

  return (
    <div className="city-management">
      <div className="sidebar">
        <ul>
          <li>State</li>
          <li>City</li>
          <li>Warehouse</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <button onClick={() => setEditingCity({ name: '', code: '', stateName: '', status: 'Active' })}>
            Add New
          </button>
        </div>
        {editingCity ? (
          <div className="edit-form">
            <h2>{editingCity.id ? 'Edit City' : 'Add City'}</h2>
            <form>
              <label>
                City Name:
                <input
                  type="text"
                  value={editingCity.name}
                  onChange={(e) => setEditingCity({ ...editingCity, name: e.target.value })}
                />
              </label>
              <label>
                City Code:
                <input
                  type="text"
                  value={editingCity.code}
                  onChange={(e) => setEditingCity({ ...editingCity, code: e.target.value })}
                />
              </label>
              <label>
                State:
                <select
                  value={editingCity.stateName}
                  onChange={(e) => setEditingCity({ ...editingCity, stateName: e.target.value })}
                >
                  {states.map(state => (
                    <option key={state.id} value={state.name}>{state.name}</option>
                  ))}
                </select>
              </label>
              <label>
                Status:
                <select
                  value={editingCity.status}
                  onChange={(e) => setEditingCity({ ...editingCity, status: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Readonly">Readonly</option>
                </select>
              </label>
              <button type="button" onClick={handleSaveCity}>Save</button>
              <button type="button" onClick={() => setEditingCity(null)}>Cancel</button>
            </form>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>City Name</th>
                <th>City Code</th>
                <th>State Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cities.map(city => (
                <tr key={city.id}>
                  <td>{city.id}</td>
                  <td>{city.name}</td>
                  <td>{city.code}</td>
                  <td>{city.stateName}</td>
                  <td>{city.status}</td>
                  <td>
                    <button onClick={() => handleEditCity(city)}>Edit</button>
                    <button onClick={() => handleDeleteCity(city.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CityManagement;
