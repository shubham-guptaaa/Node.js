Simple Node.js Server

This is a basic HTTP server built using Node.js that serves static files such as HTML, CSS, JavaScript, and images.

Features

Serves static files from the project directory.

Supports multiple file types: .html, .css, .js, .png.

Handles 404 errors when files are not found.

Displays server errors for debugging.

Prerequisites

Node.js installed on your system.

Installation

Clone this repository or create a new project directory:

git clone <repository-url>
cd <project-directory>

Ensure you have Node.js installed.

No additional dependencies are required.

Usage

Save the provided server code as server.js.

Run the server using:

node server.js

Open a web browser and visit:

http://localhost:3000/

File Structure

/project-directory
│── server.js        # Node.js server script
│── index.html       # Default HTML file
│── style.css        # CSS file (if any)
│── script.js        # JavaScript file (if any)
│── images/          # Directory for image files

Code Explanation

1. Importing Required Modules

const http = require("http");
const fs = require("fs");
const path = require("path");

http: Handles HTTP requests and responses.

fs: Reads files from the file system.

path: Manages file paths.

2. Defining the Port

const port = 3000;

The server listens on port 3000.

3. Creating the Server

const server = http.createServer((req, res) => {

http.createServer() creates an HTTP server.

Handles file requests based on the URL.

4. Determining the File Path

const filePath = path.join(
  __dirname,
  req.url === "/" ? "index.html" : req.url
);

Serves index.html for the root URL (/).

Serves requested files if available.

5. Determining the MIME Type

const extName = path.extname(filePath).toLocaleLowerCase();

let mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
};

const contentType = mimeTypes[extName] || "application/octet-stream";

Maps file extensions to their correct MIME types.

6. Reading and Serving the File

fs.readFile(filePath, (err, content) => {

Reads the requested file asynchronously.

7. Handling Errors

if (err) {
  if (err.code === "ENOENT") {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404: File not found");
  } else {
    res.writeHead(500);
    res.end(`Server Error: ${err.code}`);
  }
}

Returns a 404 error for missing files.

Returns a 500 error for other issues.

8. Serving the File

} else {
  res.writeHead(200, { "Content-Type": contentType });
  res.end(content, "utf8");
}

Sends a 200 OK response and serves the requested file.

9. Listening for Requests

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

Starts the server and listens on port 3000.

Improvements & Next Steps

Add support for more file types (e.g., .jpg, .svg, .json).

Implement a better 404 page.

Use Express.js for easier routing and middleware support.

License

This project is open-source and free to use.

