import React, { useState } from 'react';

function TrafficLight() {
  const [color, setColor] = useState("red");

  const handleNextColor = () => {
    if (color === "red") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("green");
    } else if (color === "green") {
      setColor("red");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", backgroundColor: "black", width: "10%", margin: "auto", padding: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
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

        <button 
          onClick={handleNextColor}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#ccc",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Cambiar color
        </button>
        
    
      </div>
      
    </div>
    
    
  );

}

export default TrafficLight;
