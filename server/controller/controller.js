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
 //to find the specified user
const find=(req,res)=>{
    if(req.query.id)
    {
        const id=req.query.id;
        userDb.findById(id).then(data=>{
         if(!data)
         {
           res.send('Not found the user'+id);
         }
         else
         {
           res.send(data);
         }})
         .catch(e=>res.send("Error retrieving the data"));
    }
    else
    {
        userDb.find().then(usr=>res.send(usr)).catch(e=>res.status(500).send(e));
    }
  
}
//to update the specified user
const update=(req,res)=>{
    if(!req.body)
    {
       return res.status(500).send('Data cannot be empty');
    } 
   const id=req.params.id;
   userDb.findByIdAndUpdate(id,req.body).then(data=>{
       if(!data)
       {
        res.send(`cannot update with ${id} May be user not found!`);
       }
       else
       {
           res.send(data);
       }
   }).catch(e=>res.status(500).send('error update user information'));}
   //to delete the specified user
const delet=(req,res)=>{
    //Find the id from url 
    const id=req.params.id;

    userDb.findByIdAndDelete(id).then((data)=>{
    if(!data)
    {
        res.status(404).send('data cant be delete.May id is wrong');
    }
    else
    {
        res.send('Id has been deleted');
    }}).catch(e=>res.send(e));
}
module.exports={create,find,update,delet};