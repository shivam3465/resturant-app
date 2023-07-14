import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { Person, Search, Menu } from "@mui/icons-material";

const MainNavBar = ({ name,  setHamActive }) => {
  return (
    <div
      className={name}
      style={{
        backgroundColor: "black"
      }}
    >
      <Link to={"/"} onClick={() => setHamActive(false)}>
        Home
      </Link>
      <Link to={"/blog"} onClick={() => setHamActive(false)}>
        Blog
      </Link>
      <Link to={"/register"} onClick={() => setHamActive(false)}>
        Register
      </Link>      
    </div>
  );
};

export default function Navbar() {
  const [searchActive, setSearchActive] = useState(false);  
  const [hamActive, setHamActive] = useState(false);
  

  const toggleSearch = () => {    
    setSearchActive(!searchActive);
  };
  const changeView = () => {
    setHamActive(!hamActive);
  };

  return (
    <div id="navbar" style={{ backgroundColor:"black" }}>
      <div id="left">
        <div id="logo">
          <Menu onClick={changeView} />
          <Link to={"/"}>Fleksa</Link>
        </div>
        <MainNavBar
          name={hamActive ? "mobile-view-navbar" : "main"}          
          setHamActive={setHamActive}
        />
      </div>

      <div id="right">
        {searchActive && (
          <input
            type="text"
            placeholder="Search here ..."
            onBlur={toggleSearch}
          />
        )}
        <Search
          className="icon"
          onClick={() => setSearchActive(!searchActive)}
        />

        {!searchActive && !hamActive && (
          <div>
            <Person
              className="icon"
              id="person"              
            />
          </div>
        )}
      </div>
    </div>
  );
}
