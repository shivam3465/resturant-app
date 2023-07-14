const Customer = require("../models/customer");


const registerCustomer =  (name,phone,referenceNumber,reserveTableRefernce,email="") => {
    return new Promise(async (resolve, reject) => {
        try{
        await Customer.create({name,phone,email,referenceNumber,reserveTableRefernce});
        resolve({success:true});
        }
    catch(err){
        reject({success:false,err:err.message});
    }
}
    )
}

module.exports = registerCustomer;