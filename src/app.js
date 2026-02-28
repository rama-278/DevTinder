const express = require('express');
const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
    res.send("User loggedin successfully");
    
});

app.get("/user/data",userAuth, (req, res) => {
    res.send("User data is sent");
});

app.get("/admin/getAllData", (req, res) => {
    res.send("All Data sent");
});
app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a usesr");
});

app.listen(7777, () => {
    console.log("The Server  is  succesfully listening on port number 3000");
});