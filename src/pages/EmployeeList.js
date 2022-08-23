import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function EmployeeList() {
  const employees = useSelector((state) => state.list.employees);
  return (
    <section>
      <Link to="/">Home</Link>
      <div>Hello</div>
    </section>
  );
}

export default EmployeeList;
