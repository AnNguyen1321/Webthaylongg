var express = require('express')
var router = express.Router()
var AccountModel = require('../models/Account');
var roleModel = require ('../models/Role');


//import "bcryptjs" library
var bcrypt = require('bcryptjs');                     //random value


router.get('/register', async (req, res) => {
      const roles = await roleModel.find({});

      res.render('auth/register', {roles});
});
const createAccounts = require ('../controller/auth/accountController');
router.post('/register', createAccounts);

router.get('/login', (req, res) => {
   res.render('auth/login',)
})

router.post('/login', async (req, res) => {
   try {
      var AccountLogin = req.body;
      var user = await AccountModel.findOne({ email: AccountLogin.email})
      if (user) {
         var role = await roleModel.findOne({ _id : user.role_id})
         var hash = bcrypt.compareSync(AccountLogin.password, user.hashed_password)
         if (hash) {
            req.session.name = user.name;
            req.session.role = role.name;
            console.log(req.session.role);
            if (role.name === 'Administrator') {
               res.redirect('/admin');
             } else if (role.name === 'Guest') {
               res.redirect('/guest');
             } else if (role.name === 'Student') {
               res.redirect('/Student');
             } else if (role.name === 'Marketing Manager') {
               res.redirect('/marketing_manager');
             } else if (role.name === 'Marketing Coordinator') {
               res.redirect('/marketing_coordinator');
             } 
         }
         else {
           res.render('auth/login', { error: 'Wrong email or password' });
         }
      }
      else {
         res.render('auth/login', { error: 'Wrong email or password' });
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




