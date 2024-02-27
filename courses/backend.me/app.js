// to start check the dependencies you need to create in package.json
// also get extension of EJS Language Support

require('dotenv').config();

const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const myRoutes = require('./server/routers/routes');
const adminRoutes = require('./server/routers/admin_routes');
const app = express();

const expressLayout=require('express-ejs-layouts'); // this is for layout, it has role of partials
const { default: mongoose } = require('mongoose');
app.use(expressLayout);
app.set('layout', './layouts/main'); // this is for layout, it has role of partials

// main.ejs is the layout file that will be used for all the views
// in views we have other ejs files that will be used as for one page

const port = process.env.PORT || 3000;
const connectionString=process.env.CONNECTION_STRING;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public')); // this is for static files, it has role of static files
app.set('view engine', 'ejs'); // this is for ejs, it has role of template engine
app.set('views', './views'); // this is for views, it has role of views

//Searching
app.use(express.json()); // 
app.use(express.urlencoded({extended: true})); // 

// app.set('views', path.join(__dirname, 'server/views')); // this is for views, it has role of views


// cookies. for sessions.
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
app.use(cookieParser());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: MongoStore.create({ mongoUrl: connectionString }),
    // cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day

}));


//method override

const methodOverride = require('method-override');
app.use(methodOverride('_method'));










app.use('/', myRoutes); 
app.use('/', adminRoutes); 


app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(connectionString)
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log(err);
    });






