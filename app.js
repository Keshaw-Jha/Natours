const express = require('express');
const morgan = require('morgan');

const app = express();

// 1)MIDDLEWARES
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));//static files access

app.use((req, res, next)=>{
    console.log('Hello from the middleware👋');
    next();
    });

app.use((req,res, next)=>{
    req.requestTime = new Date().toISOString();
    next();
})

// IMPORT ROUTES
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// 3)ROUTES
    app.use('/api/v1/tours',tourRouter); 
    app.use('/api/v1/users',userRouter); 

//4) MADE APP AVAILABLE FOR SERVER
module.exports = app;
