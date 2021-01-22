var authController = require('../controllers/auth_controller.js');

module.exports = function(app, passport) {
    app.get('/register', authController.register);
    app.get('/signin', authController.signin);
    app.post('/register', passport.authenticate('local-signup', {
            successRedirect: '/kind',
            failureRedirect: '/register'
        }
    ));
    app.get('/logout',authController.logout);
    app.get('/kind', isLoggedIn, authController.home);
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/kind',
            failureRedirect: '/signin',
        })
    );
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    };
}