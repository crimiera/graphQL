var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var meetingSchema = new Schema({
    title: String, 
    duration: Number,
    description:String,
    suggested:[{ 
        date: { type: Date, default: Date.now }
    }],
});

var Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;