#Timeshare Contract Management System - Frontend

A React-based frontend for managing clients, hotels, and timeshare contracts.

The application communicates with the Spring Boot backend through REST APIs and provides a clean dashboard for managing business data.

---

## Features

### Dashboard

* Total Clients
* Total Hotels
* Total Contracts

### Client Management

* View Clients

### Hotel Management

* View Hotels

### Contract Management

* Create Timeshare Contracts
* View Existing Contracts

---

## Tech Stack

* React
* Vite
* Axios
* React Router
* CSS3

---

## Project Structure

```text
src
├── api
│   └── axios.js
│
├── components
│   ├── Navbar.jsx
│   └── Sidebar.jsx
│
├── pages
│   ├── Dashboard.jsx
│   ├── Clients.jsx
│   ├── Hotels.jsx
│   └── Contracts.jsx
│
├── styles.css
├── App.jsx
└── main.jsx
```

---

## Screens

* Dashboard
* Clients
* Hotels
* Contracts

---

## Running the Project

Clone the repository:

```bash
git clone https://github.com/Sagnik-dan/Timeshare-Contract-Frontend.git
```

Install dependencies:

```bash
npm install
```

Run:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Backend Configuration

The frontend expects the backend to run at:

```
http://localhost:8080
```

Configure this in:

```text
src/api/axios.js
```

Example:

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
});

export default api;
```

---

## Future Improvements

* Authentication
* Search & Filtering
* Responsive Design
* Edit/Delete Operations
* Charts & Analytics
* Dark/Light Theme Toggle
* Toast Notifications

---

## Author

**Sagnik Dandapat**

Full Stack Java Developer
