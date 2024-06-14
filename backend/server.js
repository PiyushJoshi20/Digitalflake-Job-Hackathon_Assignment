// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const crypto = require('crypto');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(cors());

// const users = [
//   {
//     email: 'test@example.com',
//     password: '$2a$10$Vw9dH6BOU1K4hRfGPiyGZed0U/Qj8oZ7A6NH.zD9hr0VuyLR5Di8G' // hashed password for 'password'
//   }
// ];

// app.get('/', (req, res) => {
//   res.send('Backend is running');
// });

// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

// console.log(`Received email: ${email}, password: ${password}`);

//   const user = users.find(user => user.email === email);
//   if (!user) {
//     return res.status(401).send({ message: 'Invalid credentials' });
//   }

//   const isPasswordValid = await bcrypt.compare(password, user.password);
//   if (!isPasswordValid) {
//     return res.status(401).send({ message: 'Invalid credentials' });
//   }

//   res.status(200).send({ message: 'Login successful' });
// });

// app.post('/api/request-reset', (req, res) => {
//   const { email } = req.body;

//   const user = users.find(user => user.email === email);
//   if (!user) {
//     return res.status(400).send({ message: 'User not found' });
//   }

//   const resetToken = crypto.randomBytes(32).toString('hex');
//   // In a real app, you'd save this token to the database and send it via email
//   console.log(`Reset link: http://localhost:5000/reset-password?token=${resetToken}`);

//   res.status(200).send({ message: 'Reset link sent' });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// -----------------------------------This code is done by Piyush Joshi-------------------------------------------

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

let states = [];
let cities = [];
let warehouses = [];
let stateIdCounter = 1;
let cityIdCounter = 1;
let warehouseIdCounter = 1;

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@example.com' && password === 'password') {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

// State routes
app.get('/api/states', (req, res) => {
  res.status(200).json(states);
});

app.post('/api/states', (req, res) => {
  const { name, code, status } = req.body;
  const newState = { id: stateIdCounter++, name, code, status };
  states.push(newState);
  res.status(201).json({ message: 'State added successfully', state: newState });
});

app.put('/api/states/:id', (req, res) => {
  const { id } = req.params;
  const { name, code, status } = req.body;
  const state = states.find(state => state.id === parseInt(id));
  if (state) {
    state.name = name;
    state.code = code;
    state.status = status;
    res.status(200).json({ message: 'State updated successfully', state });
  } else {
    res.status(404).json({ message: 'State not found' });
  }
});

app.delete('/api/states/:id', (req, res) => {
  const { id } = req.params;
  states = states.filter(state => state.id !== parseInt(id));
  res.status(200).json({ message: 'State deleted successfully' });
});

// City routes
app.get('/api/cities', (req, res) => {
  res.status(200).json(cities);
});

app.post('/api/cities', (req, res) => {
  const { name, code, stateName, status } = req.body;
  const newCity = { id: cityIdCounter++, name, code, stateName, status };
  cities.push(newCity);
  res.status(201).json({ message: 'City added successfully', city: newCity });
});

app.put('/api/cities/:id', (req, res) => {
  const { id } = req.params;
  const { name, code, stateName, status } = req.body;
  const city = cities.find(city => city.id === parseInt(id));
  if (city) {
    city.name = name;
    city.code = code;
    city.stateName = stateName;
    city.status = status;
    res.status(200).json({ message: 'City updated successfully', city });
  } else {
    res.status(404).json({ message: 'City not found' });
  }
});

app.delete('/api/cities/:id', (req, res) => {
  const { id } = req.params;
  cities = cities.filter(city => city.id !== parseInt(id));
  res.status(200).json({ message: 'City deleted successfully' });
});

// Warehouse routes
app.get('/api/warehouses', (req, res) => {
  res.status(200).json(warehouses);
});

app.post('/api/warehouses', (req, res) => {
  const { name, state, city, status } = req.body;
  const newWarehouse = { id: warehouseIdCounter++, name, state, city, status };
  warehouses.push(newWarehouse);
  res.status(201).json({ message: 'Warehouse added successfully', warehouse: newWarehouse });
});

app.put('/api/warehouses/:id', (req, res) => {
  const { id } = req.params;
  const { name, state, city, status } = req.body;
  const warehouse = warehouses.find(warehouse => warehouse.id === parseInt(id));
  if (warehouse) {
    warehouse.name = name;
    warehouse.state = state;
    warehouse.city = city;
    warehouse.status = status;
    res.status(200).json({ message: 'Warehouse updated successfully', warehouse });
  } else {
    res.status(404).json({ message: 'Warehouse not found' });
  }
});

app.delete('/api/warehouses/:id', (req, res) => {
  const { id } = req.params;
  warehouses = warehouses.filter(warehouse => warehouse.id !== parseInt(id));
  res.status(200).json({ message: 'Warehouse deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
