const http = require("http");

const handleAllRequests = function (requestobject, responseobject) {
  console.log("just received a request");

  responseobject.write("This is my basic server");
  responseobject.end();
  console.log(requestobject);
};
const server = http.createServer(handleAllRequests);

server.listen(3000, "127.0.0.1", function () {
  console.log("server is ready to accept");
});
