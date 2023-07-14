import React from "react";
import "./home.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
const imageLink =
  "https://media.istockphoto.com/id/1281489885/photo/meat-dish-with-vegetables-for-catering-lots-of-plates.jpg?s=612x612&w=0&k=20&c=Sb9RNzLHOLHoHPTqnF41wNzqKtrBTX5uWhklzdaaAy8=";

export default function Home() {
  return (
    <div className="home">
      <div className="banner">
        <div className="left">
          <div className="content-container">
            <div className="title">Most delicious flavour and combos</div>
            <div className="content">
              Feels Like Home, Tastes Like a Paradise
            </div>
            <Link to={"/register"}>
              <button className="btn">
                Get Started <ArrowForwardIcon />
              </button>
            </Link>
          </div>
        </div>
        <img src={imageLink} alt="" />
      </div>
    </div>
  );
}
