import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

function Home() {
  return (
    <div>
      <h1>HRnet</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="employee-list">View Current Employees</Link>
      </nav>

      <h2>Create Employee</h2>
      <Form />
    </div>
  );
}

export default Home;
