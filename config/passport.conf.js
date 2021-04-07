const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../models/User');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      let user = {
        id:"123456",
        displayName: 'nguyenvanhai',
        nickname: "zaytsev5",
        email:  "shinminah357159",
        role: "admin"
      }
      console.log("got this gar");
      return done(null, user);
      // Match user
      // User.findOne({
      //   email: email
      // }).then(user => {
      //   if (!user) {
      //     return done(null, false, { message: ' Email không tồn tại' });
      //   }

      //   // Match password
      //   // bcrypt.compare(password, user.password, (err, isMatch) => {
      //   //   if (err) throw err;
      //   //   if (isMatch) {
      //   //     return done(null, user);
      //   //   } else {
      //   //     return done(null, false, { message: 'Có lỗi! Mật khẩu không đúng' });
      //   //   }
      //   // });
      //   if(password == user.password){
      //     return done(null, user);
      //   }
      //   else return done(null, false, { message: ' Mật khẩu không đúng' });

      // });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    // User.findById(id, function(err, user) {
      // let user = {
      //   id:"01231",
      //   displayName: 'nguyenvanhai',
      //   nickname: "zaytsev5",
      //   email:  "shinminah357159"
      // }
      done(null, user);
    // });
  });
};
