var express = require('express')
var router = express.Router()
var AccountModel = require('../models/Account');
var roleModel = require ('../models/Role');

//import "bcryptjs" library
var bcrypt = require('bcryptjs');
var salt = 8;                     //random value

const {v4: uuidv4} = require('uuid');   //generate unique id for user


router.get('/register', (req, res) => {
   res.render('auth/register')
})

router.post('/register', async (req, res) => {
   try {
      var AccountRegistration = req.body;
      var hashPassword = bcrypt.hashSync(AccountRegistration.password, salt);
      var user = {
         email: AccountRegistration.email,
         password: hashPassword,
         roleid: uuidv4(),
         dob: AccountRegistration.dob,
         name: AccountRegistration.name,
         address: AccountRegistration.address,
         phone: AccountRegistration.phone
      }
      var role = {
        _id: user.roleid,
        rolename: 'admin'
      }
      await roleModel.create(role);
      await AccountModel.create(user);
      res.redirect('/auth/login')
   } catch (err) {
      res.send(err)
   }
})

router.get('/login', (req, res) => {
   res.render('auth/login',)
})

router.post('/login', async (req, res) => {
   try {
      var AccountLogin = req.body;
      var user = await AccountModel.findOne({ email: AccountLogin.email })
      var role = await  roleModel.findById(role.id)
      if (user) {
         var hash = bcrypt.compareSync(AccountLogin.password, user.password)
         if (hash) {
            //initialize session after login success
            req.session.name = user.name;
            req.session.role = role.rolename;
            if (role.rolename == 'admin') {
               res.redirect('/admin');
            }
            else {
               res.redirect('/user');
            }
         }
         else {
            res.redirect('/auth/login');
         }
      }
   } catch (err) {
      res.send(err)
   }
});

router.get('/logout', (req, res) => {
   req.session.destroy();
   res.redirect("/auth/login");
})

module.exports = router




