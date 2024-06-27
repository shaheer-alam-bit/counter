import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Counter App
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          onClick={() => setCount(count + 1)}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            borderRadius: "50%",
            border: "1px solid black",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
            outline: "none",
          }}
        >
          +
        </button>
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginLeft: "20px",
            marginRight: "20px",
            fontSize: "24px",
          }}
        >
          {count}
        </p>
        <button
          onClick={() =>
            count > 0
              ? setCount(count - 1)
              : alert("Counter can't be less than 0")
          }
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            borderRadius: "50%",
            border: "1px solid black",
            backgroundColor: "#f44336",
            color: "white",
            cursor: "pointer",
            outline: "none",
          }}
        >
          -
        </button>
      </div>
      <button
        onClick={() => setCount(0)}
        style={{
          width: "60px",
          height: "40px",
          fontSize: "16px",
          borderRadius: "10px",
          border: "1px solid black",
          backgroundColor: "#2196F3",
          color: "white",
          cursor: "pointer",
          outline: "none",
          marginTop: "20px",
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
