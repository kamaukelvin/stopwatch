import React, { useState, useEffect } from "react";
import "./alarm.css";

const tempAlarms = [
  {
    title: "talk to your cousin",
    day: "monday",
    time: "11.00"
  }
];

export default function Alarm(props) {
  const [alarms, setAlarms] = useState([]);

  useEffect(() => {
    setAlarms(tempAlarms);
  }, []);

  return (
    <div className="alarm-wrapper">
      {alarms.map((el) => (
        <div className="">{el.title}</div>
      ))}
    </div>
  );
}
