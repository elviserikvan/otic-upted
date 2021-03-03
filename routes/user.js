const bcrypt = require('bcryptjs');
const passport = require('passport');
const router = require("express").Router();
const User = require('../models/Users');

const loggedIn = (req, res, next) => {
	if(req.isAuthenticated()) {
		next();
	}else {
		return res.status(401).json({message: 'Unauthorized Request'});
	}
}

router.get('/user', loggedIn, (req, res) => {
	return res.status(200).json(req.user);
});

router.post('/login', (req, res, next) => {

	passport.authenticate('local', function(err, user, info) {
	console.log('login requested');
	console.log(user);

	      if (err) {console.log('error 1'); return res.status(501).json(err); }

	      if (!user) {console.log('error 2'); console.log(info); return res.status(501).json(info); }

	      req.logIn(user, function(err) {
			    if (err) {console.log('error 3'); return res.status(501).json(err); }
			    return res.status(200).json({message: 'Login Success'});
			  });
	})(req, res, next);
})

router.post('/register', async (req, res) => {

	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(req.body.password);
	req.body.password = hash;
	req.body.created_at = Date.now();

	let user = new User(req.body);
	try {
		let user2 = await user.save();
		res.status(200).json(user2);
	} catch(e) {
		res.status(501).json(e);
	}
});

router.get('/logout', loggedIn, (req, res) => {
	req.logout();
	return res.status(200).json({message: 'Logout success'});
});

module.exports = router;
