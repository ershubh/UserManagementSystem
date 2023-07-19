const express=require('express');
const route=express.Router();
const controller=require('../controller/controller.js');
const services=require('../services/render.js');

// Route to connect to homepage
route.get('/',services.homeroutes);
// Route to connect to add_user page
route.get('/add-user',services.add_user);
// Route to connect to update page
route.get('/update-user', services.update_user);

// API post to create users
route.post('/api/users',controller.create);
// API post to find the users
route.get('/api/users',controller.find);
// API post to update the specified users
route.put('/api/users/:id',controller.update);
// API post to delete the specified users
route.delete('/api/users/:id',controller.delet);

module.exports=route;

