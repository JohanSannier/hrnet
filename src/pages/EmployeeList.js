import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";
import { addEmployee } from "../features/employeeSlice";
import { increment } from "../features/countSlice";

function EmployeeList() {
  const employees = useSelector((state) => state.list.employees);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.length === 0) {
      return;
    } else if (employees.length > 0) {
      return;
    } else {
      const populateEmployeeState = async () => {
        for (let index = 0; index < localStorage.length; index++) {
          const input = await JSON.parse(localStorage.getItem(index));
          dispatch(addEmployee({ input }));
          dispatch(increment());
        }
      };
      populateEmployeeState().catch(console.error);
    }
  }, []);

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
