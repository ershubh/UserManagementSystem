const express=require('express');
const app=express();
const dotenv=require('dotenv');
const bodyparser=require('body-parser');
const path=require('path');

app.use(bodyparser.urlencoded({extended:true}));

app.use(morgan('tiny'));

//Some static paths for css and javascript files
app.use('/css',express.static(path.resolve(__dirname,'html/css')));
app.use('/img',express.static(path.resolve(__dirname,'html/img')));
app.use('/js',express.static(path.resolve(__dirname,'html/js')));

//setup the configuration file
module.exports.dotenv_path=dotenv.config({path:'config.env'});

//set the express to use views folder for ejs
app.set('view engine','ejs');

//ports defined
const port=process.env.PORT || 80;

//Start the server on the some port
app.listen(port,()=>{console.log(`Server is running on port:${port}`)});
