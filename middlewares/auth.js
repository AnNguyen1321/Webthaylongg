
const checkRoles = (Roles) => (req, res, next) => {
   if (Roles.includes(req.session.role)) {
      next(); 
   } else {
      res.redirect('/auth/login'); 
   }
}
 
 module.exports = {
   checkRoles
 }