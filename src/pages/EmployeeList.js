import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";
import { addEmployee } from "../features/employeeSlice";
import Searchbar from "../components/Searchbar";

function EmployeeList() {
  const employees = useSelector((state) => state.list.employees);
  const filteredData = useSelector((state) => state.search.results);
  // eslint-disable-next-line no-unused-vars
  const [entries, setEntries] = useState([10, 25, 50, 100]);
  const [entriesNumber, setEntriesNumber] = useState({ currentEntries: 10 });
  const { pageNumber } = useParams();
  const navigate = useNavigate();

  const handleEntriesNumber = (e) => {
    const value = parseInt(e.target.value);
    const { name } = e.target;
    setEntriesNumber({ [name]: value });
    navigate("/employee-list/1");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (employees.length > 0) {
      return;
    } else {
      const getEmployeesFromLoc = JSON.parse(localStorage.getItem("employees"));
      if (getEmployeesFromLoc != null) {
        for (const employee of getEmployeesFromLoc) {
          dispatch(addEmployee(employee));
        }
      }
    }
  }, []);

  return (
    <main>
      <h1>Current Employees</h1>
      <div className="employee-table">
        <div className="upper-content flex">
          <p className="show-entries">
            Show
            <select
              name="currentEntries"
              id="current-entries"
              value={entriesNumber.currentEntries}
              onChange={handleEntriesNumber}
            >
              {entries.map((entry, index) => (
                <option value={entry} key={index}>
                  {entry}
                </option>
              ))}
            </select>
            entries
          </p>
          <Searchbar />
        </div>
        <Table
          data={employees}
          filteredData={filteredData}
          entries={entriesNumber.currentEntries}
        />
        <div className="lower-content flex">
          <p className="lower-content-paragragh">
            Showing 1 to {entriesNumber.currentEntries} of {employees.length}{" "}
            entries
          </p>
          <p>
            <Link
              to={`/employee-list/${
                pageNumber > 1 ? parseInt(pageNumber) - 1 : 1
              }`}
            >
              Previous
            </Link>
            <button className="page-btn disabled">{pageNumber}</button>{" "}
            <Link
              to={`/employee-list/${
                parseInt(pageNumber) * entriesNumber.currentEntries >
                employees.length
                  ? parseInt(pageNumber)
                  : parseInt(pageNumber) + 1
              }`}
            >
              Next
            </Link>
          </p>
        </div>
      </div>
      <div className="flex link">
        <Link to="/">Home</Link>
      </div>
    </main>
  );
}

export default EmployeeList;
