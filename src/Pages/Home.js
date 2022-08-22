import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>HRnet</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="employee-list">View Current Employees</Link>
      </nav>
    </div>
  );
}

export default Home;
