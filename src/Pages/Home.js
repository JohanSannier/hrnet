import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

function Home() {
  return (
    <section>
      <h1>HRnet</h1>
      <nav>
        <Link to="employee-list">View Current Employees</Link>
      </nav>

      <h2>Create Employee</h2>
      <Form />
    </section>
  );
}

export default Home;
