# Simple Full-Stack Search Suggestion with TypeScript

## Overview
This project demonstrates a full-stack implementation of a search suggestion feature using **TypeScript, Node.js, and AJAX**. The application consists of a **frontend (client-side)** and a **backend (server-side)** that interact via a simple API. The project incorporates **caching and debouncing** to optimize API performance and enhance user experience.

## Features
### Frontend
- Built with **HTML, CSS, and TypeScript** for a simple, responsive UI.
- **Debouncing**: Limits API requests by waiting for the user to stop typing before sending a request.
- **AJAX Integration**: Dynamically fetches filtered results from the backend based on user input.
- **Caching**: Stores previously fetched results for faster responses on repeated queries.

### Backend
- **Node.js server** built with TypeScript.
- Fetches data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/comments?postId=3).
- Filters data by the `name` property to match user input.
- Implements **caching** to prevent redundant API calls.

## Tech Stack
- **Frontend**: HTML, CSS, TypeScript
- **Backend**: Node.js with TypeScript
- **External API**: JSONPlaceholder
- **Build Tool**: TypeScript Compiler (`tsc`)

## Installation & Setup
Follow these steps to set up and run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/takeleberhe/simple-html-site-node.js-typescript.git
cd simple-html-site-node.js-typescript
```

### 2. Install Dependencies
#### Install Root Dependencies
```bash
npm install
```
#### Install Backend Dependencies
```bash
cd src/server
npm install
```
#### Install Frontend Dependencies
```bash
cd ../client
npm install
```

### 3. Compile TypeScript (Optional)
If needed, compile the TypeScript files to JavaScript:
```bash
tsc
```
This will generate JavaScript files in the `dist/client` and `dist/server` directories.

### 4. Start the Backend Server
Navigate to the project root and start the backend:
```bash
cd ../../  # Navigate back to project root
node dist/server/index.js
```
The backend server is now running and ready to handle requests.

### 5. Open the Frontend
To view the frontend, open `src/client/index.html` in your browser.

## License
This project is licensed under the **MIT License**. See the `LICENSE` file for details.

