const http = require("http");
const PORT1 = 7000;
const PORT2 = 7500;

// Array of good phrases
var goodPhrases = [
    "You are amazing",
    "You have a great smile",
    "Holy shit I've never met someone like you..",
    "I hate anyone who hates you"
];

// Array of bad phrases
var badPhrases = [
    "Who the hell are you?!?",
    "Stop. Just stop trying.",
    "Are you serious? Who do you think you are?",
    "This is a private Christian server, please mind your language."
];

// Functions to grab a random index of array
function randomGoodPhrase () {
    var response = goodPhrases[Math.floor(Math.random() * goodPhrases.length)]
    return response
}
function randomBadPhrase () {
    var response = badPhrases[Math.floor(Math.random() * badPhrases.length)]
    return response
}

// Handle request for Port 1
var handleRequest1 = (req, res) => {
    res.end(randomGoodPhrase());
};

// Handle Request for port 2
var handleRequest2 = (req, res) => {

    res.end(randomBadPhrase());
};

// Storing the HTTP create server for port 1
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

// Server 1 using handleRequest1 on Port 1
server1.listen(PORT1, () => {
    console.log(`Server listening on: http://localhost:${PORT1}`);
});

// Server 2 using handleRequest2 on Port 2
server2.listen(PORT2, () => {
    console.log(`Server listening on: http://localhost:${PORT2}`);
});