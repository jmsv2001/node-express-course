/* ---------   View http://expressjs.com/  ---------- */

const express = require('express');     // Access to the express library by searching your node_modules for "express"
const app = express();                  // Creates an instance of the express constructor, which we will name "app"

const bodyParser = require('body-parser');  
app.use(bodyParser.json());             // App.use() Mounts the specified middleware function or functions

const mockUserData=[{name:'Mark'},{name:'Jill'}]

app.get('/users', function(req,res)     // GET requests are used to send only limited amount of data because data is sent into header
{                                       // Routes HTTP GET requests to the specified path with the specified callback functions
         res.json({                     // Sends a JSON response. View Localhost01.png
              success: true,
              message: 'successfully got users. Nice!',
              users: mockUserData
         })
})

// colons are used as variables that be viewed in the params
app.get('/users/:id',function(req,res)   // Words with a colon in front of them in the url are treated as variables
{
	console.log(req.params.id)          // Can access the value of each variable through req.params
	res.json({                          // View Localhost02.png
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.post('/login',function(req,res){    
    // Typically passwords are encrypted using something like bcrypt before sending to database
    const username=req.body.username;
    const password=req.body.password;

    // This should come from the database
    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
        // In practice, use JSON web token sign method here to make an encrypted token
        res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})

app.listen(8000,function(){             // app.listen method will start up the server locally on the port you give
    console.log("server is running")    // in this case the base url is: http://localhost:8000
    })                                  // To end this process, push CTRL+C
