const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    referenceNumber:{
        type:String,
        required:true
    },
    reserveTableRefernce:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'reserve_table',
        required:true
    },
    orderRefernce:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'order'
    }

})

module.exports = mongoose.model('customer',customerSchema);