

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import todoRoutes from './routers/todo_routes';
const { swaggerUi, swaggerDocs } = require('./swagger');


const app: express.Application = express();
const PORT: number = 7000;
const MONGODB_URI: string = 'mongodb://localhost:27017/listtodos';  

// Middleware
app.use(bodyParser.json());


//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
app.use('/api/v1/listtodos', todoRoutes);

