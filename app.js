const express = require('express');
const morgan = require('morgan');
const app = express();


// 1)MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

const tourRouter = require('./Routes/tourRoutes');
const userRouter = require('./Routes/userRoutes');


app.use((req, res, next)=>{
    console.log('Hello from the middleware👋');
    next();
    });

app.use((req,res, next)=>{
    req.requestTime = new Date().toISOString();
    next();
})

// 2)ROUTE HANDLERS
// 3)ROUTES
    app.use('/api/v1/tours',tourRouter); 
    app.use('/api/v1/users',userRouter); 

//4)START SERVER
const port = 3000;
app.listen(port||3000,()=>{
    console.log(`app running on port ${port}...`);
});
