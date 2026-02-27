const express = require('express');
const app = express();


// app.use("/test", (req, res) => {
//     res.send("Welcome Home!");
// });

// app.use("/test2", (req, res) => {
//     res.send("Hello world!");
// });

// app.use("/hello", (req, res) => {
//     res.send("Hello hello hello");
// });


// app.use("/", (req, res) => {
//     res.send("Welcome from the Dashboard");
// });




//This will only handle GET call to /user
app.get("/user", (req, res) => {
    res.send({ firstName: "Ramadevi", lastName: "Bodapati" });
});

//This will only handle Post call to /user
app.post("/user", (req, res) => {
    res.send("Data successfully saved to database");
});

//This will handle delete method api calls to /user
app.delete("/user", (req, res) => {
    res.send("Deleted successfully");
});

//This will match all HTTP method API calls to /test
app.use("/test", (req, res) => {
   res.send("Hello world!");
});



app.listen(7777, () => {
    console.log("The Server  is  succesfully listening on port number 3000");
});