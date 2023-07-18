const express=require('express');
const route=express.Router();

// Route to connect to homepage
route.get('/',services.homeroutes);
// Route to connect to add_user page
route.get('/add-user',services.add_user);
// Route to connect to update page
route.get('/update-user', services.update_user);