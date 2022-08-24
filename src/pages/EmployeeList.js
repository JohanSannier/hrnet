import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from "../components/Table";

function EmployeeList() {
  const employees = useSelector((state) => state.list.employees);

  return (
    <main>
      <h1>Current Employees</h1>
      <div className="employee-table">
        <div className="upper-content flex">
          <p className="show-entries">
            Show
            <select name="entries" id="entries">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            entries
          </p>
          <label className="label flex">
            Search: <input type="search" name="search" />
          </label>
        </div>
        <Table data={employees} />
        <div className="lower-content flex">
          <p className="lower-content-paragragh">
            Showing 1 to {employees.length} of {employees.length} entries
          </p>
          <p>
            Previous <button className="page-btn">1</button> Next
          </p>
        </div>
      </div>
      <Link to="/" className="link">
        Home
      </Link>
    </main>
  );
}

export default EmployeeList;
