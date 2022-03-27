import React from "react";
import Logo from "../assets/logo.png";
export default function Header() {
  return (
    <div
      style={{
        background:" rgb(222 217 241)",
  
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="Pawsome" height="80px"  padding="0px0"/>
        <div
          style={{
            marginLeft: 50,
            fontSize: 40,
            color: " #360c30",
            fontFamily: "Cursive ",
          }}
        >
         PAWSOME - Pet Spa 
        </div>
      </div>
    </div>
  );
}
