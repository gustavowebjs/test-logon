import React, { useEffect, useState } from "react";
import "./global.css";
import Routes from "./routes";
import { Context } from "./Context";

function App() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <Context.Provider value={{ user, setUser }}>
        <Routes />
      </Context.Provider>
    </div>
  );
}

export default App;
