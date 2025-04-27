import React, { useState } from 'react';

function TrafficLight() {
  const [color, setColor] = useState("red");

  return (
    <div style={{display:"flex", flexDirection: "column", backgroundColor: "black", width: "10%", margin: "auto" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <div 
        onClick={() => setColor("red")}
        style={{
          backgroundColor: "red",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          margin: "10px",
          opacity: color === "red" ? 1 : 0.4,
          cursor: "pointer"
        }}
      />
      <div 
        onClick={() => setColor("yellow")}
        style={{
          backgroundColor: "yellow",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          margin: "10px",
          opacity: color === "yellow" ? 1 : 0.4,
          cursor: "pointer"
        }}
      />
      <div 
        onClick={() => setColor("green")}
        style={{
          backgroundColor: "green",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          margin: "10px",
          opacity: color === "green" ? 1 : 0.4,
          cursor: "pointer"
        }}
      />
    </div>
    </div>
  );
}

export default TrafficLight;
