import React, { useState } from "react";
import FreshPlate from "./FreshPlateForm";
import SoiledPlate from "./SoiledPlateForm";

const ManagePlate = () => {
  const [selectedTab, setSelectedTab] = useState("freshPlate");
  const selectTab = (e) => {
      console.log('selectedTab', e.target.id)
    setSelectedTab(e.target.id);
  };
  return (
    <div className="container">
      <ul className="nav nav-tabs">
        <li style={{padding: "20px"}}
          className={`${selectedTab === "freshPlate" ? "active-tab" : ""}`}
          onClick={selectTab}
        >
          <a href="#" id="freshPlate" style={{color: "#072366"}}>Fresh Plate</a>
        </li>
        <li style={{padding: "20px"}} className={`${selectedTab === "soiledPlate" ? "active-tab" : ""}`}>
          <a href="#" id="soiledPlate" onClick={selectTab} style={{color: "#072366"}}>
            Soiled Plate
          </a>
        </li>
      </ul>
      {selectedTab === "freshPlate" && <FreshPlate />}
      {selectedTab === "soiledPlate" && <SoiledPlate />}
    </div>
  );
};

export default ManagePlate;
