const { then } = require('../databases/connection.js');
const userDb=require('../model/model.js');

//to create the user
const create=async (req,res)=>{
    if(!req.body)
    {
     res.status(400).send('Content cannot be empty');
     return;
    }
    const {name,email,gender,status}=req.body;
    const user=userDb.create({
     name,
     email,
     gender,
     status,
    }).then(data=>{ res.redirect('/add-user')}).catch(e=>console.log(e));
 }