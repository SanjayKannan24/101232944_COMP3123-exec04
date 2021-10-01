let express = require('express');
let express_app = express();

//http://localhost:8088/
express_app.get("/" , (req , res) => {
    res.send("<h1>Name : Sanjay Kannan</h1>" + 
    "<h2>Student ID : 101232944</h2>" + 
    "<h4>This is Lab Exercise 04</h4>");
})

//http://localhost:8088/hello
express_app.get("/hello" , (req , res) => {
    res.send("<h1>Hello Express JS</h1>")
})

//Querystring
//http://localhost:8088/user?firstname=Sanjay&lastname=Kannan
express_app.get("/user" , (req , res) => {
    let firstname = req.query.firstname;
    let lastname = req.query.lastname;

    output = {
        status: "Success",
        firstname,
        lastname
    }
    res.send(output);
})

//Post
//Path parameter
//http://localhost:8088/user/Sanjay/Kannan
express_app.post("/user/:firstname/:lastname" , (req , res) => {
    let firstname = req.params.firstname;
    let lastname = req.params["lastname"];

    output = {
        status: "Success",
        firstname,
        lastname
    }
    res.send(output);
})

let server = express_app.listen(8088 , () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server running at http://%s:%s" , host , port);
})