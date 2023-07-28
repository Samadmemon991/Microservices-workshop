// imports
const express = require("express");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

// ! SHIPPING OPERATIONS
app.get("/shipping", (req, res) => {
    res.send("GET SHIPPING");
});

app.post("/shipping", (req, res) => {
    console.log(req.body);
    const url = 'http://localhost:5003/billing/';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    res.send("POST SHIPPING");
});

app.put("/shipping", (req, res) => {
    res.send("PUT SHIPPING");
});

app.delete("/shipping", (req, res) => {
    res.send("DELETE SHIPPING");
});

app.listen(5004, () => {
    console.log('Shipping Server listening on port 5004');
});