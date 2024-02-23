// how to add swagger to our project.

/* 
npm install swagger-jsdoc swagger-ui-express --save-dev

*/


const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const todoRoutes =require('./routers/test_routers');





//middlewares
app.use(bodyParser.json());
app.use('/api/v1/todos',todoRoutes);



mongoose.connect('mongodb://localhost:27017/test');
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});