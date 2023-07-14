import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ShowRefrence() {
  const { table } = useSelector((state) => state.user);
  // console.log(table)
  return (
    <div className="container Order-item" >
      <div className="main" style={{border:"1px solid rgb(226, 226, 226)"}}>        
        <h2>Table Number: {table.tableNo} booked for {table.date} from {table.slot} </h2>
        <h2>Refrence Number : {table.referenceNumber} <br/>(Keep it for future refrence)</h2>        
        <Link to={'/order'} className="btn" style={{color:"black"}}>Order From Menu</Link>
      </div>
    </div>
  );
}
