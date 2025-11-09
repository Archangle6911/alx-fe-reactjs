// src/App.jsx
import React, { useState } from "react";
import { UserContext } from "./context/UserContext";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [user, setUser] = useState({ name: "Ali", role: "Student" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <WelcomeMessage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
