import React, { useContext } from "react";
import "./styles.css";
import { Context } from "../../Context";

function Logged() {
  const { user } = useContext(Context);

  return (
    <>
      <header>
        <div>
          <a href="/">Startec</a>
        </div>

        <div>
          <a href="/">Logout</a>
        </div>
      </header>

      <div className="container">
        <h1>
          Hello <span>{user.name}</span>, You are logged!
        </h1>
      </div>
    </>
  );
}

export default Logged;
