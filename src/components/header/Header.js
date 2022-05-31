import React, { useState } from "react";
import "./header.css";

export default function Header({ activeTab, setActiveTab }) {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="header">
      <ul>
        <li
          className={activeTab === "world" && "active"}
          onClick={() => handleTabClick("world")}
        >
          World
        </li>
        <li
          className={activeTab === "alarms" && "active"}
          onClick={() => handleTabClick("alarms")}
        >
          Alarms
        </li>
        <li
          className={activeTab === "clocks" && "active"}
          onClick={() => handleTabClick("clocks")}
        >
          Clock
        </li>
      </ul>
    </div>
  );
}
