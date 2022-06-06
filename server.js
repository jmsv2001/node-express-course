const express = require('express');     // Access to the express library by searching your node_modules for "express"
const app = express();                  // Creates an instance of the express constructor, which we will name "app"

app.listen(8000,function(){             // app.listen method will start up the server locally on the port you give
    console.log("server is running")    // in this case the base url is: http://localhost:8000
    })                                  // To end this process, push CTRL+C

