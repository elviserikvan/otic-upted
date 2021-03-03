const bcrypt = require('bcryptjs');
const User = require('./models/Users');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

/*
passport.use('local', new localStrategy({
		usernameField: 'email',
		passwordField: 'password'
	},
	(email, password, done) => {
		console.log('passport main function');
		User.findOne({email}, (err, user) => {
			if(err) {return done(err); }
			
			if(! user) {
				return done(null, false, {message: 'Email no se encuentra'});
			}
			
			if(!bcrypt.compareSync(password, user.password)) {
				return done(null, false, {message: 'Contraseña incorrecta'});
			}

			return done(null, user);

		})
	}
));

passport.serializeUser( (user, done) => {
	return done(user._id);
})

passport.deserializeUser( async (id, done) => {
	let user = await User.findById(id).exec();
	done(null, user);
})
*/

passport.use('local', new localStrategy({
		usernameField: 'email',
		passwordField: 'password'
	},

	function(username, password, done) {
		User.findOne({ email: username }, function(err, user) {
			if (err) { return done(err); }

			if (!user) {
				return done(null, false, { message: 'Usuario incorrecto.' });
			}

			if(!bcrypt.compareSync(password, user.password)) {
				return done(null, false, {message: 'Contraseña incorrecta'});
			}

			return done(null, user);
		});
	}
));


passport.serializeUser(function(user, done) {
	done(null, user._id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

