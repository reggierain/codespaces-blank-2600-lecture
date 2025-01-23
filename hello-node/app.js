// console.log("Hello Node.js!");

// Use the Express framework to quickly make an application that responds to HTTP requests and sends responses. Our application runs on a server (in this case, a GitHub Codespaces server) and clients can connect to it and request resources, which we will send.
// We can use NPM to install open source modules written by other developers
// NPM is Node Package Manager. Makes it easy to install software packages shared by other developers on the command line.
import express from "express";

// create an express server application:
const app = express();

// Make the application to listen for incoming HTTP requests
const server = app.listen(3000, ()=>{console.log("listening")});

// Handle HTTP requests
// When the client sends a request, it has a METHOD and a PATH
// METHOD: indicates what the user wants to do. for example, if the users want sto get a webpage, the request will have a get method. if the user wants to create something on the server, the request will have a post method. Delete method for deleting things on the server, etc.
// PATH: this is part of the url that directs the user's request and tells our application how to handle it.

app.get('/', (req, res)=>{
    res.send(`
        <h1>Hello Node.js</h1>
        <p>Our first node.js</p>
        `);
});

app.get('/pets', (req, res)=>{
    res.send(`<h1>Welcome to our Pet Website.`);
});

let petTypes = {
    dog: "calm and gentle",
    bird: "fun but noisy",
    fish: "easy to care for",
    cat: "nice to have around"
};

app.get('/pets/:type', (req, res)=>{
    if (petTypes[req.params.type] === undefined){
        res.status(404).send("Error 404 - the pet type you're looking for was not found");
    }
    res.status(statusCode).send(
        `<h1>Pet Information: ${req.params.type}</h1>
        <p>Description: ${petTypes[req.params.type]}</p>`
    );

    // When a server sends a response, the response includes a status code with a summary of what happened. For example: 200 means ok, 404 means the request was not found, 500 means server error, etc. By default, Express sets the 200 code.
});

// Sending objects in response
app.get('/all-pets', (req, res)=>{
    //send the petTypes object
    res.json(petTypes);
    // converts the JavaScript object into the standardized JSON format to send to the client. Also sets headers on the response so that client knows it's getting a JSON object

});

// SENDING FILES
app.get('/pages/index', (req,res)=>{
    res.sendFile('./files/index.html', {root: import.meta.dirname});
});

app.get('/pages/style.css', (req,res)=>{
    res.sendFile('./files/style.css', {root: import.meta.dirname});
});
