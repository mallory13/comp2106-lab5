var express = require('express');
var router = express.Router();

var passport = require('passport');
var mongoose = require('mongoose');
var Account = require('../models/account');

/* GET users listing. */
router.get('/', isLoggedIn, function(req, res, next) {

  //res.send('respond with a resource');
    
    var usernames = ['Me', 'You', 'Them'];

                         
     Account.find(function(err, users){
         if(err){
             console.log(err);
             res.end(err);
         }
         else{
             res.render('users/index',{
                 title: 'Users',
                 users: usernames
             });
         }
         
         
     }     );               
});


module.exports = router;
