import React, { useState } from "react";
import "./orderItem.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../App";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

export default function OrderItem({ setProduct, product }) {
  const { table } = useSelector((state) => state.user);
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");

  const submit = async () => {
    if (quantity <= 0){
      setError("Please enter a quantity greater than zero")
      return;
    }
      try {
        const { data: res } = await axios.post(
          `${baseUrl}/orders/take`,
          {
            dish: {
              name: product.name,
              count: quantity,
            },
            referenceNumber: table.referenceNumber,
          },
          {
            headers: { "content-type": "application/json" },
            withCredentials: true,
          }
        );
        toast.success(res.msg);
        setProduct({});
      } catch (error) {
        console.log(error);
      }
  };

  if (!table.referenceNumber) return <Navigate to={"/register"} />;

  return (
    <div className="container Order-item">      
      <div className="main">
        <CloseIcon onClick={() => setProduct({})} />
        <h2>Order For Table Number: {table.tableNo} </h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <div className="item">
          <span>Product: {product.name}</span>
          <div className="input">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="select Quantitiy"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>
        <button className="btn" onClick={submit}>
          Order
        </button>
      </div>
    </div>
  );
}
