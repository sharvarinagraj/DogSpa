import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DogSpa from "../assets/Dogspa.jpg";

export default function Checkout({ Package }) {
  const history = useHistory();
  const [success, setSuccess] = useState(false);

  return (
    <div style={{ padding: 50, display: "flex" }}>

<div style={{ flex: 1 }}>
        {success && (
          <div style={{ textAlign: "center" }}>
            <img src={DogSpa} alt="DogSpa" height="300px" />
            <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
              We have received your request
            </div>
            <div style={{ fontFamily: "cursive" }}>
              bookingId #{Math.round(Math.random() * 100000)}
            </div>
            <div style={{ fontFamily: "cursive", fontSize: 20 }}>
              Please visit the venue 10-15 minutes prior to your slot
            </div>
          </div>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <div>
          <h1 style={{ fontFamily: "cursive" }}>Selected package</h1>
          {Object.keys(Package).reduce((acc, ing) => {
            return acc + Package[ing] ? 1 : 0;
          }, 0) === 0 && <p>No Package Selected</p>}
          {Object.keys(Package).map((packages) => {
            return (
              Package[packages] && (
                <p>
                  {packages[0].toUpperCase()}
                  {packages.substr(1)}
                </p>
              )
            );
          })}
          <button
            className="proceedToCheckout"
            onClick={() => history.push("/")}
          >
            Back
          </button>
          <button
            onClick={() => setSuccess(true)}
            className="proceedToCheckout"
            style={{ marginLeft: 10 }}
          >
            Book Visit
          </button>
        </div>
      </div>
      
    </div>
  );
}
