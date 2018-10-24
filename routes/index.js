var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Weight Watchers Tracker' });
});

router.post('/register',function (req, res) {
    var newuser = new User();
    newuser.username = req.body.username;
    newuser.password = req.body.password;
    newuser.firstname = req.body.firstname;
    newuser.lastname = req.body.lastname;
    newuser.save(function (err) {

        if (err){
            res.json({message: 'Donation NOT Added!', errmsg: err});
            // return a suitable error message
        }
        else {
            res.json({message: 'Donation Successfully Added!', data: User});
            // return a suitable success message
        }
    });
});

router.post('/login', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var username = req.body.username;
    var password = req.body.password;
        User.findOne({username: username}, function (err, user) {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }
            if (!user) {
                return res.status(400).send();
            }
            else {
                user.comparePassword(password, function (err, isMatch) {
                    if (isMatch && isMatch == true) {
                        req.session.user = user;
                        res.json({message: 'here you are '});
                    } else {
                        return res.status(401).send();
                    }
                });
            }
        });
     });

router.get('/logout', function (req, res)
{
    req.session.destroy();
    res.json({message: 'logout successfully done  '});
});
module.exports = router;
