var express = require('express')
var router = express.Router()
var AccountModel = require('../models/Account');
var roleModel = require ('../models/Role');
const createAccounts = require ('../controller/auth/accountController');

//import "bcryptjs" library
var bcrypt = require('bcryptjs');
var salt = 8;                     //random value


router.get('/register', async (req, res) => {
      const roles = await roleModel.find({});
       console.log(roles);
       res.render('auth/register', {roles});
});
router.post('/register', createAccounts);

router.get('/login', (req, res) => {
   res.render('auth/login',)
})

router.post('/login', async (req, res) => {
   try {
      var AccountLogin = req.body;
      var user = await AccountModel.findOne({ email: AccountLogin.email})
      var role = await roleModel.findOne({ _id : user.role_id})
      if (user) {
         var hash = bcrypt.compareSync(AccountLogin.password, user.hashed_password)
         if (hash) {
            req.session.name = user.name;
            req.session.role = role.name;
            console.log(req.session);
            if (role.name == 'admin') {
               res.redirect('/admin');
            }
            else if(role.name == 'guest') {
               res.redirect('/guest');
            }
            else if (role.name == 'QA')
            {
               res.redirect('/QA')
            }
            else 
            {
               res.redirect('/auth/login')
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




