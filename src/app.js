const express = require('express');
const app = express();

app.use("/api", (req, res) => {
    res.send("Welcome from the Dashboard");
});


app.use("/test", (req, res) => {
    res.send("Hello world!");
});

app.use("/hello", (req, res) => {
    res.send("Hello hello hello");
});

app.listen(7777, () => {
    console.log("The Server  is  succesfully listening on port number 3000");
});