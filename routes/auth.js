var express = require('express')
var router = express.Router()
var AccountModel = require('../models/Account');
var roleModel = require ('../models/Role');
var roleController = require ('../controller/roleController');

//import "bcryptjs" library
var bcrypt = require('bcryptjs');
var salt = 8;                     //random value


router.get('/register', async (req, res) => {
       const role = await roleController.getAllRoles();
       
       const roles = role.map(role => {
         return {
           _id: role._id.toString(), 
           name: role.name  
         };
       });
       console.log(roles);
       res.render('auth/register', {roles});
       
});

router.post('/register', async (req, res) => {
   try {
      var AccountRegistration = req.body;
      var roleID = req.body;
      var hashPassword = bcrypt.hashSync(AccountRegistration.password, salt);
      var user = {
         email: AccountRegistration.email,
         password: hashPassword,
         dob: AccountRegistration.dob,
         name: AccountRegistration.name,
         address: AccountRegistration.address,
         phone: AccountRegistration.phone
      }

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
      var role = await roleModel.findById(role.id)
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




