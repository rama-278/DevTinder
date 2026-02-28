const express = require('express');
const app = express();






//This will only handle GET call to /user
// app.get("/user", (req, res) => {
//     res.send({ firstName: "Ramadevi", lastName: "Bodapati" });
// });

// //This will only handle Post call to /user
// app.post("/user", (req, res) => {
//     res.send("Data successfully saved to database");
// });

// //This will handle delete method api calls to /user
// app.delete("/user", (req, res) => {
//     res.send("Deleted successfully");
// });

// //This will match all HTTP method API calls to /test
// app.use("/test", (req, res) => {
//    res.send("Hello world!");
// });



//Advanced routing techiniques or patterns
// app.get(/a/ , (req, res) => {
//     res.send("This is GET method");
// });


// app.get(/.*fly$/ , (req, res) => {
//     res.send({ firstName: "Ramadevi", lastName: "Bodapati" });
// });

// app.get("/user/:id/:name", (req, res) => {
//     console.log(req.params);
//     res.send({firstName:"Bindu",lastName:"Bodapati"});
// });



app.get("/user", [
    (req, res, next) => {
    console.log("Handling the route user 1");
    //res.send("Handler Respose 1");
    next();
},
    (req, res, next) => {
    console.log("Handling the route user 2");
        //res.send("Handler Respose 2");
        next();
    }],
     (req, res, next) => {
    console.log("Handling the route user 3");
         //res.send("Handler Respose 3");
         next();
    },
      (req, res, next) => {
    console.log("Handling the route user 4");
          //res.send("Handler Respose 4");
          next();
    },
       (req, res, next) => {
           console.log("Handling the route user 5");
           res.send("Handler Respose 5");
},

);

app.listen(7777, () => {
    console.log("The Server  is  succesfully listening on port number 3000");
});