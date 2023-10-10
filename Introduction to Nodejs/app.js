const http = require("http");

function handleRequester(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200; // .tell about status of request
    response.end("<h1>" + new Date().toISOString + "</h1>"); // new Date create date object which return date
  } else if (request.url === "/") {
    response.statusCode = 200; // .tell about status of request
    response.end("<h1> Hello World!</h1>"); // it's return the response or data to client
  }
}

const server = http.createServer(handleRequester);

server.listen(3000);
