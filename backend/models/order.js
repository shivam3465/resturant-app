const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    dish:{
        type:[{name:String,count:Number}],
        required:true
    },
    referenceNumber:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"Preparing"
    }
    
})

module.exports = mongoose.model('order',orderSchema);