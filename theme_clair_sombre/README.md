# 🌗 React – Code du thème clair / sombre

---

## 📄 `App.jsx`

```jsx
import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
      </button>
    </div>
  );
}

export default App;
```

---

## 🎨 `index.css`

```css
/* Styles globaux */

body {
  background-color: white;
  color: black;
  transition: background-color 0.3s ease, color 0.3s ease;
}

body.dark {
  background-color: #121212;
  color: #f1f1f1;
}
```

---

Tu peux copier ces deux fichiers dans ton projet React (`src/App.jsx` et `src/index.css`) pour avoir un fonctionnement complet du switch de thème clair / sombre.
