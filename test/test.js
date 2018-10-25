let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../bin/www');
let expect = chai.expect;

chai.use(chaiHttp);
let _ = require('lodash' );
describe('A funcation that creates a Submission', function () {
    it('should create the submission', function (done) {

    })

})




//
// // create a user a new user
// var testUser = new User({
//     username: "jmar777",
//     password: "Password"
// });
//
// // save user to database
// testUser.save(function(err) {
//     if (err) throw err;
//
// // fetch user and test password verification
//     User.findOne({ username: 'jmar777' }, function(err, user) {
//         if (err) throw err;
//
//         // test a matching password
//         user.comparePassword('Password123', function(err, isMatch) {
//             if (err) throw err;
//             console.log('Password123:', isMatch); // -> Password123: true
//         });
//
//         // test a failing password
//         user.comparePassword('123Password', function(err, isMatch) {
//             if (err) throw err;
//             console.log('123Password:', isMatch); // -> 123Password: false
//         });
//     });
module.exports = server;