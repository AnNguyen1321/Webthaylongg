const AccountModel = require('../../models/Account');
//import "bcryptjs" library
var bcrypt = require('bcryptjs');
var salt = 8;                     //random value

const getAllAccount = (req, res) => {
    // Get all accounts from the database.
    const getAllAccounts = AccountModel.find();
    return getAllAccounts
}

module.exports = getAllAccount

const createAccount = async (req , res) =>{
   try{
    var AccountRegistration = req.body;
    console.log(AccountRegistration);
    var hashPassword = bcrypt.hashSync(AccountRegistration.password, salt);
    var user = {
       email: AccountRegistration.email,
       hashed_password: hashPassword,
       dob: AccountRegistration.dob,
       role_id : AccountRegistration.roleID,
       name: AccountRegistration.name,
       address: AccountRegistration.address,
       phone: AccountRegistration.phone
    }
    await AccountModel.create(user);
    res.redirect('/auth/login');
   }
   catch (err){
      res.redirect('/auth/register' , err)
      
   }
}
module.exports = createAccount;