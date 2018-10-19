let Sub= require('../models/subs');
let express= require('express');
let router= express.Router();
let mongoose = require('mongoose');

var mongodbUri ='mongodb://admin:welcome1@ds135653.mlab.com:35653/wwtdb';
mongoose.connect(mongodbUri);
let db = mongoose.connection;

db.on('error', function (err) {
    console.log('Unable to Connect to [ ' + db.name + ' ]', err);
});

db.once('open', function () {
    console.log('Successfully Connected to [ ' + db.name + ' ]');
});

//CREATE
router.addsub = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var sub = new Sub();
    sub.name = req.body.name;// the requested value
    sub.age = req.body.age;// the requested value
    sub.gender = req.body.gender;// the requested value
    sub.sw = req.body.sw;// the requested value
    sub.gw= req.body.gw;// the requested value
    sub.cw = req.body.cw;// the requested value
    sub.height = req.body.height;// the requested value
    sub.location = req.body.location;// the requested value
    sub.save(function(err) {
        if (err)
            res.json({ message: 'Donation NOT Added!', errmsg : err } );
        // return a suitable error message
        res.json({ message: 'Donation Successfully Added!', data: sub });
        // return a suitable success message
    });
}

//READ

//get a list of all the submissions
router.displayAll=(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    Sub.find(function (err,subs) {
if(err)
    res.send(err);
        res.send(JSON.stringify(subs,null,3));
    });
};

//get a single submission
router.findoneSub=(req,res)=> {
    res.setHeader('Content-Type', 'application/json');
Sub.find({"_id": req.params.id},function (err, sub) {
    if (err != null)
        res.send(" no here");
    else res.send(JSON.stringify(sub,null,5));
});
}

//UPDATE
router.updatesub =  (req, res) => {

    Sub.findByIdAndUpdate(req.params.id,req.body, function(err) {
        if (err)
            res.json({ message: 'Donation NOT DELETED!', errmsg : err } );

        else
            res.json({ message: 'Donation Successfully Deleted!'});
        Sub.findOne(req.params.id).then()
        res.send(sub);
    });
}
//update a submission

//DELETE
router.deleteSub =  (req, res) => {

    Sub.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.json({ message: 'Donation NOT DELETED!', errmsg : err } );
        else
            res.json({ message: 'Donation Successfully Deleted!'});
    });
}
module.exports = router;