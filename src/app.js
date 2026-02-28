const express = require('express');
const app = express();

app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("ERROR OCCURED");
    }
});

app.get("/user/getUserData", (req, res) => {
    //try {
        throw new error("abcsdfd");
        res.send("User data sent");
        
    //}
    // catch (err) {
    //     res.status(500).send("Some error,contact support team");
        
    // }
});

app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("ERROR OCCURED2");
    }
});

app.listen(7777, () => {
    console.log("The Server  is  succesfully listening on port number 3000");
});