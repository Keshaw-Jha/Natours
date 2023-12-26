const app = require(`./app`);


//START APP
const port = 3000;
app.listen(port||3000,()=>{
    console.log(`app running on port ${port}...`);
});