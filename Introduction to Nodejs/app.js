const http = require("http");

function handleRequester(request, response) {
  response.statusCode = 200;// .tell about status of request 
  response.end("<h1> Hello World!</h1>");// it's return the response or data to client  
}

const server = http.createServer(handleRequester);

server.listen(3000);
