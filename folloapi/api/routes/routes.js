console.log('loading routes')

let routes = require('express').Router();

console.log('loading authroutes');
const authRouthes = require (__dirname+'/authenticationRoutes/authenticationRoute.js');


// route for signup
routes.post('/signup/', authRouthes.signup);
// route for login
routes.post('/signup/', authRouthes.login);


module.exports = {
    routes
}