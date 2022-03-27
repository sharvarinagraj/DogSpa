import React from "react";

import Base from "../assets/Dogspa.png";
import Cut  from "../assets/cut.png";
import Groom from "../assets/groom.png";

import Bath from "../assets/bath.png";

import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function Customize({ Package, setPackage }) {
  let history = useHistory();

  const onChange = (event, name) => {
    console.log(localStorage);
    let newPackage = JSON.parse(JSON.stringify(Package));
    newPackage[name] = event;
    setPackage(newPackage);
    localStorage.setItem("Package", JSON.stringify(newPackage));
  };

  return (
    
    <div style={{ display: "flex" }}>

<div style={{ flex: 1, padding: 40 }}>
<h1> Select a package and procced</h1>

        <label className="container-checkbox">
          Premium Groom <span className="details">Includes deep bubble bath, brushing, ear cleaning,nail trim and colonge spray</span><p> </p>
          
          <input
            type="checkbox"
            checked={Package["Premium Groom"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "Premium Groom")
            }
            
          />
          <span className="checkmark"></span>
         
        </label>



        <label className="container-checkbox">
          Bath brush & Beyond  <span className="details"> Includes bath, brushing, blowdry, colonge spray</span>  <p> </p>
          <input
            type="checkbox"
            checked={Package["Bath brush & Beyond"]}
            onChange={(event) => onChange(event.currentTarget.checked, "Bath brush & Beyond")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Cut Style & Beyond  <span className="details"> Includes bath, brushing</span>  <p> </p>
          <input
            type="checkbox"
            checked={Package["Cut Style & Beyond"]}
            onChange={(event) => onChange(event.currentTarget.checked, "Cut Style & Beyond")}
          />
          <span className="checkmark"></span>
        </label>
        
         
        <button
          onClick={() => history.push("/checkout")}
          className="proceedToCheckout"
        >
Book your dog's visit
        </button>
      </div>



    
      <div style={{ flex: 1, padding: 20 }}>

       
        <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: Package["Bath brush & Beyond"] ? 100 : -100,
              opacity: Package["Bath brush & Beyond"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="Package z4"
          >
            <img src={Bath} alt="DogSpa" height="100%" width="100%" />
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: Package["Cut Style & Beyond"] ? 120 : -100,
              opacity: Package["Cut Style & Beyond"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="Package z4"
          >
            <img src={Cut} alt="DogSpa" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: Package["Premium Groom"] ? 100 : -100,
              opacity: Package["Premium Groom"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="Package z3"
          >
            <img src={Groom} alt="DogSpa" height="100%" width="100%" />
          </motion.div>


         
          <motion.div transition={{ duration: 1 }} className="">
            <img src={Base} alt="DogSpa" height="100%" width="100%" />
          </motion.div>
        </div>
      </div>



      
    </div>
  );
}
