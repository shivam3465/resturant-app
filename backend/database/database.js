const mongoose = require('mongoose');

const connectToDatabase = async (uri) =>{
    try{
         await mongoose.connect(uri);
         console.log("connected to database");
    }
    catch(e){
        console.log(e.message);
    }
}

module.exports = connectToDatabase;