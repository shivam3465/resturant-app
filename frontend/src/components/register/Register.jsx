import React, { useEffect, useState } from "react";
import "./register.scss";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData, setTable } from "../../redux/user";
import { baseUrl } from "../../App";
import axios from "axios";

const InputElement = ({ name, placeholder, compulsory }) => {
  const { data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log(data);

  return (
    <div className="input">
      <label htmlFor={name}>
        {placeholder}
        <span
          style={{
            color: "rgb(250 38 38)",
            fontSize: "1.4rem",
            marginLeft: "2px",
          }}
        >
          {compulsory ? "*" : ""}
        </span>
      </label>
      <input
        type={"text"}
        placeholder={placeholder}
        onChange={(e) => dispatch(setData({ ...data, [name]: e.target.value }))}
      />
    </div>
  );
};

export default function Register() {
  const [referenceNumber, setRefrenceNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {table}=useSelector(state=>state.user);
  const [error, setError] = useState("");

  const searchUser = async () => {
    setLoading(true);    
    if(!referenceNumber){
      setError("Please enter a quantity greater than zero")
      return;
    }
    try {
      const { data: res } = await axios.get(
        `${baseUrl}/tables/${referenceNumber}`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setLoading(false);
      // console.log(res);
      dispatch(setTable(res.table))
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if(table.tableNo) return <Navigate to={'/order'}/>;
  return (
    <div className="container">
      <div className="main">
        <h2>Register Now</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <InputElement placeholder={"Name"} name={"name"} compulsory={true} />
        <InputElement
          placeholder={"Phone Number"}
          name={"phone"}
          compulsory={true}
        />
        <InputElement placeholder={"Email Id"} name={"email"} />
        <Link to={"/book"}>
          <button className="btn">Next</button>
        </Link>

        <div style={{ color: "rgb(196 196 196)", fontSize: "1.8rem" }}>
          Or has Refrence number of table
        </div>
        <div className="input">
          <label htmlFor="">
            Refrence Number
            <span
              style={{
                color: "rgb(250 38 38)",
                fontSize: "1.4rem",
                marginLeft: "2px",
              }}
            ></span>
          </label>
          <input type="text" placeholder="Refrence Number" onChange={(e)=>setRefrenceNumber(e.target.value)}/>
        </div>
        <button onClick={searchUser} className="btn">
          Get Table
        </button>
      </div>
    </div>
  );
}
