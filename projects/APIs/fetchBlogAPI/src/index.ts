//npm install --save-dev typescript @types/node
// npm init -y

//npm install express
//npm install --save-dev @types/express
//npx tsc --init.
//npm install --save-dev @types/mongoose

import dotenv from 'dotenv';
dotenv.config();
import express,{Application} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import userRoutes from './routers/user_routes';
import blogRoutes from './routers/blog_routes';

const port: number = parseInt(process.env.PORT!, 10) || 3000;
const mongoUri: string = process.env.MONGO_URL!;

const app: Application = express();








app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


// cookies and sessions

app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store:MongoStore.create({mongoUrl:mongoUri})

  }));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1', blogRoutes);

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server once connected to the database
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

