/* ---------   View http://expressjs.com/  ---------- */

const express = require('express');     // Access to the express library by searching your node_modules for "express"
const app = express();                  // Creates an instance of the express constructor, which we will name "app"

const mockUserData=[{name:'Mark'},{name:'Jill'}]

app.get('/users', function(req,res)     // GET requests are used to send only limited amount of data because data is sent into header
{                                       // Routes HTTP GET requests to the specified path with the specified callback functions
         res.json({                     // Sends a JSON response.
              success: true,
              message: 'successfully got users. Nice!',
              users: mockUserData
         })
})

app.get('/users/:id',function(req,res)   // Words with a colon in front of them in the url are treated as variables
{
	console.log(req.params.id)          // Can access the value of each variable through req.params
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.listen(8000,function(){             // app.listen method will start up the server locally on the port you give
    console.log("server is running")    // in this case the base url is: http://localhost:8000
    })                                  // To end this process, push CTRL+C
