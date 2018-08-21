const http = require("http");
const PORT = 7000;

var handleRequest = (req, res) => {

    res.end(`You are amazing`);
};

var server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});