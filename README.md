# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

A live demo of the application is available at: [DigitalFlake Admin Panel Demo](#) (replace with actual link if available).

## Features

- User authentication (Login)
- State management (Add, Edit, Delete)
- City management (Add, Edit, Delete)
- Warehouse management (Add, Edit, Delete)
- Responsive design

## Installation

### Prerequisites

- Node.js and npm installed
- Git installed

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/digitalflake-admin-panel.git

### `npm run eject`

2. Navigate to the project directory:
   -cd digitalflake-admin-panel

3. Install the dependencies:
   -npm install

4. start the backend server:
   -node server.js

5. Start the frontend application:
   -npm start

## Usage
Open your browser and navigate to http://localhost:3000 to access the application.

## Login Credentials
Please use the following credentials to log in:
--Email: test@example.com
--Password: password


## API Endpoints

## States
GET /api/states: Get all states
POST /api/states: Add a new state
PUT /api/states/:id: Update an existing state
DELETE /api/states/:id: Delete a state

## Cities
GET /api/cities: Get all cities
POST /api/cities: Add a new city
PUT /api/cities/:id: Update an existing city
DELETE /api/cities/:id: Delete a city

## Warehouses
GET /api/warehouses: Get all warehouses
POST /api/warehouses: Add a new warehouse
PUT /api/warehouses/:id: Update an existing warehouse
DELETE /api/warehouses/:id: Delete a warehouse

## Technologies
Frontend: React
Backend: Express.js
Styling: CSS
State Management: useState (React hooks)
HTTP Client: Axios

digitalflake-admin-panel/
├── public/
├── src/
│   ├── components/
│   │   ├── CityManagement.js
│   │   ├── StateManagement.js
│   │   ├── WarehouseManagement.js
│   ├── assets/
│   │   ├── DigitalFlakeLogo.png
│   ├── App.js
│   ├── Home.js
│   ├── Login.js
│   ├── index.js
├── server.js
├── package.json
├── README.md


## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Note
## Please use the email test@example.com and the password password to log in. The SQL Workbench is not opening on my PC, and that's why the database is not connected to the project

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
