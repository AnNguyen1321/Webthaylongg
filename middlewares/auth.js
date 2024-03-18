
const checkNameSession = (req, res, next) => {
    if (req.session.name) {
       next();
    } else {
       res.redirect('/auth/login');
    }
 }
 

 const checkAdminSession = (req, res, next) => {
    if (req.session.name && req.session.role == 'admin') {
       next();
    }
    else {
       res.redirect('/auth/login');
       return;
    }
 }
 

 const checkMultipleSession = (allowedRoles) => (req, res, next) => {
    if (req.session.name && allowedRoles.includes(req.session.role)) {
       next();
    } else {
       res.redirect('/auth/login');
    }
 }
 
 module.exports = {
    checkNameSession,
    checkAdminSession,
 }