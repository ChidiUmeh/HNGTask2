# HNGTask2

### Overview
This is a REST API (Application Programming Interface) which performs Basic CRUD Operations and uses HTTP methods such as POST,GET PATCH and DELETE to add a new user, fetch the user's details, modify details of an existing user and delete the user's details.

### Endpoints, Routes, Standard formats and Status code
Endpoints are functions available through the API. They perform specific function,taking some number of parameters and return data to the client. A route is the "name" you use to access endpoints used in the URL. The API responds with a structured response in JSON format. For instance, when a get request is made on the id parameter, the API responds with the user's details in the form of a JSON format if a user with the id exist and a status code of 200 meaning "OK" and if the user does not exist it returns an error and the message "No user with the specified id exist" in the form of a json format and a status code of 404 meaning "Not found" like in the sample below:  

```
app.get('/api/:id', async(req,res)=>{
    const {id} = req.params
    const detail = await details.findOne({_id:id})
    if (detail)
    return res.status(200).json({detail})
    return res.status(404).json({error:`No user with the id: ${id}`} )
})
```
### Use HTTP Methods to Operate on the Resources
Use URLs to specify the resources you want to work with. Use the HTTP methods to specify what to do with this resource.
* Read: Use GET for reading resources and it requires you to provide your id. You can access it through the endpoint `https://task2-xgz0.onrender.com/api/id` and by clicking on the link which is sent after you created an account.
* Create: Use POST for creating new resources and it requires you to input your name in json format and send. You can access it through the endpoint `https://task2-xgz0.onrender.com/api`.
* Update: Use PATCH for updating existing resources and it requires you to provide your id, edit the name you created in json format and send. You can access it through the endpoint `https://task2-xgz0.onrender.com/api/id`
* Delete: Use DELETE for deleting existing resources and you can only delete it by providing your id.You can access it through the endpoint `https://task2-xgz0.onrender.com/api/id`

### Setting up and deploying an API locally
Create a folder with your app name and create a file with `app.js`.  
In your terminal, type ```npm init```, follow the instructions and click enter or type ```npm init -y``` to skip the processes,you'll see a package.json in your folder.  
Install the dependecies by typing ```npm install express mongoose``` to install express(nodejs framework to create REST APIs) and mongoose(JS library to create a connection between MongoDB and nodejs app) and dev dependency nodemon(a tool to observe the changes in the file and restarts the server) by typing ```npm install -D nodemon```  
In your package.json file, write the script, "start":"nodemon app.js".  
In your app.js, require the dependencies and create the server by typing this code,  
```
const express = require("express")
const app = express()

port=5000


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
```
Finally, go to postman and enter localhost:5000/endpoint to test the API endpoints.   


