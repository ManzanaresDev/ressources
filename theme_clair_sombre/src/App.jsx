import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkMode]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Exemple mode claire/sombre</h1>
      </div>
      <button
        onClick={() => {
          setDarkMode((prev) => !prev);
        }}
      >
        {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
      </button>
    </div>
  );
}

export default App;
