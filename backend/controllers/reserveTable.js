const ReserveTable = require("../models/reserveTable");
const registerCustomer = require("./customer");

const reserveTable = async (req,res) => {
  try {
    const { name, phone, email } = req.body;
    if (!name) {
      return res.json({ success: false, msg: "Please enter your name" });
    }
    if (!phone) {
      return res.json({
        success: false,
        msg: "Please enter your phone number",
      });
    }

    const referenceNumber =
      name.charAt(0).toUpperCase() + Date.now().toString();
      const table = await  ReserveTable.create({ ...req.body, referenceNumber });
    const customer = await registerCustomer(
      name,
      phone,
      referenceNumber,
      table._id,
      email
    );

    if (!customer.success) {
      ReserveTable.findByIdAndDelete(table._id);
      throw new Error(customer.err);
    }

    res.json({ success: true,msg:"Table reserved successfully", tableDetails: table });

  } catch (err) {
    console.log(err);
    res.json({ success: false, error: err.message });
  }
};

const slotsAvailable = async (req,res) => {
  try{
    const {date,tableNo}= req.body;
    const tables = await ReserveTable.find({$and: [{date:date},{tableNo:tableNo}]});

    let slots=[];
    tables.forEach((table) => {
      slots.push(table.slot);
    });

    res.json({success: true, slots: slots});
  }
  catch(err) {
    res.json({success: false, err: err.message});
  }
}

const SearchTable = async (req, res) =>{
  try {
    const {number}=req.params;
    const table = await ReserveTable.findOne({referenceNumber: number});
    if(table) res.json({success: true, table});
    else res.json({success: false,message: "No table found"})
  } catch (error) {
    res.json({success: false, error: error.message});
  }
}

module.exports = {reserveTable,slotsAvailable,SearchTable};
