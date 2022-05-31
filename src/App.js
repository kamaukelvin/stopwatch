import { useState } from "react";
import "./styles.css";
import { Stopwatch, Alarm, Header } from "./components";

export default function App() {
  const [activeTab, setActiveTab] = useState("world");
  return (
    <div className="App">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "alarms" && <Stopwatch />}
      {activeTab === "clocks" && <Alarm />}
    </div>
  );
}
