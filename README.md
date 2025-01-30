Simple Full-Stack Search Suggestion with TypeScript
This project is a full-stack application demonstrating the ability to create a search suggestion feature using TypeScript, Node.js, and AJAX. The project is divided into two main parts: the frontend (client-side) and the backend (server-side), showcasing how they interact through a simple API and filtering logic. Additionally, caching and debouncing techniques have been implemented to enhance API performance and improve the user experience.

Project Overview
The application allows users to search for comments dynamically, similar to Google's search suggestion functionality. As the user types into the search box, the frontend makes AJAX requests to a backend Node.js server. The backend fetches data from an external API, filters the results, and sends them back to the frontend, where they are displayed dynamically.

To improve performance, debouncing is applied to minimize the number of API calls. This technique waits until the user finishes typing their query before sending the request, reducing unnecessary server calls. Additionally, caching is used to store previously fetched results, ensuring faster responses when the same query is made again.

Key Features
Frontend:
HTML, CSS, and TypeScript for a simple, responsive user interface.
Debouncing: Limits the number of AJAX requests by waiting for the user to stop typing before triggering the request, reducing unnecessary server calls and improving performance.
AJAX request to the backend on each keystroke, but only after debouncing the user input.
Displays filtered results from the backend based on user input.
Caching: Stores previously fetched results in memory for faster responses if the same query is requested again, improving performance and user experience.
Backend:
Node.js server built with TypeScript.
Fetches data from JSONPlaceholder API.
Filters data by the name property to match user input.
Implements caching to avoid redundant API calls for the same data.
Tech Stack
Frontend: HTML, CSS, TypeScript
Backend: TypeScript (Node.js)
External API: https://jsonplaceholder.typicode.com/comments?postId=3
Build Tool: TypeScript Compiler (tsc)
Additional Features:
Debouncing: Implemented on the frontend to limit the number of requests.
Caching: Implemented on the backend to store and reuse API responses.
Installation and Setup
Follow the steps below to get the project running locally.

Clone the Repository
Clone the repository to your local machine:

bash
git clone https://github.com/takeleberhe/simple-html-site-node.js-typescript.git
cd simple-html-site-main
bash
npm install     #install parent folder dependecies
Install Backend Dependencies
Navigate to the src/server directory and install the required dependencies:

bash
cd src/server
npm install
Install Frontend Dependencies
Navigate to the src/client directory and install the required dependencies:

bash
cd ../client
npm install
Running the Project
1. Compile TypeScript      #optional as the typescript is already compiled
In the root directory of your project, run the TypeScript compiler to generate the JavaScript files for both the client and server:
```bash
tsc
```
This will compile the TypeScript files into the dist/client and dist/server directories.

2. Running the Backend Server
Navigate to the root directory. In your terminal, use the cd command to go to the project root folder, where the dist folder is located:

```bash
cd to simple-html-site-main   #rootfolder
```
Run the compiled server:

```bash
node dist/server/index.js
```
This will start the backend server using the compiled JavaScript file (index.js) located in the dist/server directory. Once the server is running, it will be ready to handle requests from the frontend.

3. Open the Frontend in a Browser
To view the frontend:

Open the src/client/index.html file directly in a web browser.

License
This project is licensed under the MIT License - see the LICENSE file for details.
