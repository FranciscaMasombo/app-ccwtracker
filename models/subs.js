let mongoose = require('mongoose');
let wwtdbschema =  new mongoose.Schema({
        name: String,
        age: Number,
        gender: String,
        sw: Number,
        gW: Number,
        cw: Number,
        Height: Number,
        location: String,
        upvotes: {type: Number, default: 0}
    }, {collection: 'wwtdb'});
module.exports= mongoose.model('sub', wwtdbschema);
