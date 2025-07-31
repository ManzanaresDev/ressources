import { useState, useEffect } from "react";
import "./BoutonTheme.css";

function BoutonTheme() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkMode]);

  return (
    <div>
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

export default BoutonTheme;
