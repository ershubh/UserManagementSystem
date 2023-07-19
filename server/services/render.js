const axios=require('axios');
// create a service to render homepage
const homeroutes=(req,res)=>{
    axios.get('http://localhost:8000/api/users').then((resp)=>{
        console.log(resp.data);
        res.render('index',{users:resp.data})}).catch(e=>res.send(e));
}
// create a service to render new_User page
const add_user=(req,res)=>{
    res.render('new_User');
}