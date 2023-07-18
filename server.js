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

