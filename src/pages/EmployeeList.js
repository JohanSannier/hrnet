import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";
import { addEmployee } from "../features/employeeSlice";
import { increment, reset } from "../features/countSlice";
import Searchbar from "../components/Searchbar";

function EmployeeList() {
  const employees = useSelector((state) => state.list.employees);
  const filteredData = useSelector((state) => state.search.results);
  const [entries, setEntries] = useState([10, 25, 50, 100]);
  const [entriesNumber, setEntriesNumber] = useState({ currentEntries: 10 });

  const handleEntriesNumber = (e) => {
    const value = parseInt(e.target.value);
    const { name } = e.target;
    console.log(value);
    setEntriesNumber({ [name]: value });
    console.log(entriesNumber);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.length === 0) {
      return;
    } else if (employees.length > 0) {
      return;
    } else {
      const populateEmployeeState = async () => {
        dispatch(reset());
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
