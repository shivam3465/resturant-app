import React, { useState } from "react";
import "./order.scss";
import Card from "../card/Card";
import OrderItem from "../orderItem/OrderItem";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Order() {
  const [product,setProduct]=useState({});
  const {table}=useSelector(state=>state.user);
  const products = [
    {
      name: "Pizza",
      price: 349,
      id: "slk3l232l3k2l3kjlk1",
      imageLink:
        "https://stylesatlife.com/wp-content/uploads/2021/10/Neapolitan.jpg.webp",
    },
    {
      name: "Burger",
      price: 349,
      id: "slk3l232l3k2l3kjlk2",
      imageLink:
        "https://lh6.googleusercontent.com/8FNErnMjP6zQCJH-ZL50S22vhyUlQrXZ1kaYiosb0MTYvoQJbxn4Mt8V4WIjr2mjwvgHFWKWEeFgQaU9CkpPtlVe2FrqgMGAi3ck-DrjqslhdLY0QJHULGBxSKcpl8qTdiDBA_9u",
    },
    {
      name: "Cake",
      price: 349,
      id: "slk3l232l3k2l3kjlk3",
      imageLink:
        "https://www.cakehut.in/image/cache/catalog/2021%20cake%20photos/Double%20Chocolatee-600x600w.jpg.webp",
    },
    {
      name: "Cupcake",
      price: 349,
      id: "slk3l232l3k2l3kjlk4",
      imageLink:
        "https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg",
    },
    {
      name: "Paasta",
      price: 349,
      id: "slk3l232l3k2l3kjlk5",
      imageLink:
        "https://static.toiimg.com/thumb/84784534.cms?imgsize=468021&width=800&height=800",
    },
    {
      name: "Dosha",
      price: 349,
      id: "slk3l232l3k2l3kjlk4",
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Sr9yIPeraPfO7Ffg794td-69pqosnnu1mOmJqtQasw2HF45mkoJyxTkdlnKRm7St5x8&usqp=CAU",
    },
  ];

  if(!table.referenceNumber) return <Navigate to={'/register'}/>;
  return (
    <div className="order-container">
      <h2>Order Now most delicious and trending Food items from Our Store</h2>

      <div className="order">
        {products.map((item, i) => {
          return <Card data={item} key={i} setProduct={setProduct}/>;
        })}
      </div>
      {product.name && 
      <OrderItem product={product} setProduct={setProduct}/>}
    </div>
  );
}
