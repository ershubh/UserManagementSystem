const axios=require('axios');
// create a service to render homepage
const host='0.0.0.0';
const homeroutes=(req,res)=>{
    axios.get('http://0.0.0.0:8000/api/users').then((resp)=>{
        console.log(resp.data);
        res.render('index',{users:resp.data})}).catch(e=>res.send(e));
}
// create a service to render new_User page
const add_user=(req,res)=>{
    res.render('new_User');
}
// create a service to render update_User page
const update_user=(req,res)=>{
    // res.render('update_user');
    axios.get('http://0.0.0.0:8000/api/users',{params:{id:req.query.id}})
    .then((data)=>{
     res.render('update_user',{user:data.data})}).catch(e=>res.send(e));
}

//Export the module variables
module.exports= {homeroutes, add_user, update_user};
