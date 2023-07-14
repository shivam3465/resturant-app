const mongoose = require('mongoose');

const reserveTableSchema = new mongoose.Schema({
    tableNo:{
        type: Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    slot:{
        type:String,
        required:true
    },
    referenceNumber:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('reserve_table',reserveTableSchema);