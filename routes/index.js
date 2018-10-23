var express = require('express');
var router = express.Router();
let user= require('../models/user');


var mongodbUri ='mongodb://admin:welcome1@ds135653.mlab.com:35653/users';
mongoose.connect(mongodbUri);
let db = mongoose.connection;

db.on('error', function (err) {
    console.log('Unable to Connect to [ ' + db.name + ' ]', err);
});

db.once('open', function () {
    console.log('Successfully Connected to [ ' + db.name + ' ]');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Weight Watchers Tracker' });
});


router.post('/register',function (req, res){
  var username = req.body.username;
    var password = req.body.password;
  var firstname =  req.body.firstname;
  var lastname = req.body.lastname;

  var newuser = new User();
  newuser.username= username;
  newuser.password= password;
  newuser.firstname= firstname;
  newuser.lastname = lastname;
  newuser.save(function (err, saveUser) {
      if(err){
        console.log(err);
        return res.status(500).send();
      }
      return res.status(200).send();
  })

});

module.exports = router;
