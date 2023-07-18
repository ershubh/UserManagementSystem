// create a service to render homepage
const homeroutes=(req,res)=>{
    res.render('index');
}
// create a service to render new_User page
const add_user=(req,res)=>{
    res.render('new_User');
}
// create a service to render update_User page
const update_user=(req,res)=>{
    res.render('update_user');
}
module.exports= {homeroutes, add_user, update_user};