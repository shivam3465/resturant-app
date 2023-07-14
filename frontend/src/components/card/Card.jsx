import React from "react";
import "./card.scss";

export default function Card({ data, setProduct }) {
  return (
    <div className="card">
      <img src={data.imageLink} alt="" />
      <div className="details">
        <div className="name">{data.name}</div>
        <div className="price">
          <b>Price: </b> {data.price} Rs Only
        </div>
      </div>

      <button onClick={() => setProduct(data)} className="btn">
        Order Now
      </button>
    </div>
  );
}
