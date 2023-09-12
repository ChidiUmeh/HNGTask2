# HNGTask2

### Overview
This is a REST API (Application Programming Interface) which performs Basic CRUD Operations and uses HTTP methods such as POST,GET PATCH and DELETE to add a new user, fetch the user's details, modify details of an existing user and delete the user's details.

### Endpoints, Routes, Standard formats and Status code
Endpoints are functions available through the API. They perform specific function,taking some number of parameters and return data to the client. A route is the "name" you use to access endpoints used in the URL. The API responds with a structured response in JSON format. For instance, when a get request is made on the id parameter, the API responds with the user's details in the form of a JSON format if a user with the id exist and a status code of 200 meaning "OK" and if the user does not exist it returns error and the message "No user with the specified id exist" in the form of a json format and a status code of 404 meaning "Not found" like ine the sample below:  

```
app.get('/api/:id', async(req,res)=>{
    const {id} = req.params
    const detail = await details.findOne({_id:id})
    if (detail)
    return res.status(200).json({detail})
    return res.status(404).json({error:`No user with the id: ${id}`} )
```

### Setting up and deploying an API locally
Create a folder with your app name and create a file with `app.js`.  
In your terminal, type ```npm init```, follow the instructions and click enter or type ```npm init -y``` to skip the processes,you'll see a package.json in your folder.  
Install the dependecies by typing ```npm install express mongoose``` to install express(nodejs framework to create REST APIs) and mongoose(JS library to create a connection between MongoDB and nodejs app) and dev dependency nodemon(a tool to observe the changes in the file and restarts the server) by typing ```npm install -D nodemon```  
In your package.json file, write the script, "start":"nodemon app.js".  
In your app.js, require the dependencies and create the server by typing this code,  
```
const mongoose = require("mongoose")
const express = require("express")
const app = express()
then create a port
port=5000

mongoose.connect("mongodb://127.0.0.1:27017/(name of your database)")
.then(()=>console.log("mongodb connected"))
app.listen(port,()=>`Server listening on port ${port}`)
```
To launch your server,run `npm start` in the terminal to get the following message
```
> task-2@1.0.0 start
> nodemon app.js

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node app.js`
Server listening on port 5000
mongodb connected
```
Finally, go to Chrome and enter localhost:5000/(endpoint) to test your APIs 

`
