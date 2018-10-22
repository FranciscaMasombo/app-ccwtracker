let mongoose = require('mongoose');
let wwtdbschema =  new mongoose.Schema({
        name: String,
        age: { type: Number, min: 1, max: 65 },
        gender: String,
        sw: Number,
        gW: Number,
        cw: Number,
        Height: Number,
        location: String,
        date: { type: Date, default: Date.now },
    }, {collection: 'wwtdb'});
module.exports= mongoose.model('sub', wwtdbschema);
