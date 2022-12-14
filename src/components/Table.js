import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sortEmployees } from "../features/employeeSlice";

function Table({ data, filteredData, entries }) {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.search.isActive);
  const [icons, seticons] = useState(0);
  const [filteredColumn, setFilteredColumn] = useState(-1);

  const handleClickIcon = (e) => {
    const dataTitle = parseInt(e.currentTarget.getAttribute("data-title"));
    const dataProperty = e.currentTarget.getAttribute("data-property");
    const newIcon = filteredColumn === dataTitle ? -icons : -1;
    const sorts = [];
    sorts[-1] = [...data].sort((a, b) =>
      a[dataProperty] > b[dataProperty] ? 1 : -1
    );
    sorts[0] = () => {
      return [...data];
    };
    sorts[1] = [...data].sort((a, b) =>
      a[dataProperty] < b[dataProperty] ? 1 : -1
    );
    seticons(newIcon);
    setFilteredColumn(dataTitle);
    dispatch(sortEmployees(sorts[newIcon]));
  };

  const { pageNumber } = useParams();
  return (
    <table className="table">
      <thead>
        <tr id="table-title">
          <th
            onClick={handleClickIcon}
            data-title={1}
            data-property="firstName"
          >
            First Name{" "}
            {filteredColumn !== 1 ? (
              <FaSort />
            ) : icons === 1 ? (
              <FaSortUp />
            ) : icons === -1 ? (
              <FaSortDown />
            ) : (
              <FaSort />
            )}
          </th>
          <th data-title={2} onClick={handleClickIcon} data-property="lastName">
            Last Name{" "}
            {filteredColumn !== 2 ? (
              <FaSort />
            ) : icons === 1 ? (
              <FaSortUp />
            ) : icons === -1 ? (
              <FaSortDown />
            ) : (
              <FaSort />
            )}
          </th>
          <th
            data-title={3}
            onClick={handleClickIcon}
            data-property="startDate"
          >
            Start Date{" "}
            {filteredColumn !== 3 ? (
              <FaSort />
            ) : icons === 1 ? (
              <FaSortUp />
            ) : icons === -1 ? (
              <FaSortDown />
            ) : (
              <FaSort />
            )}
          </th>
          <th
            data-title={4}
            onClick={handleClickIcon}
            data-property="department"
          >
            Department{" "}
            {filteredColumn !== 4 ? (
              <FaSort />
            ) : icons === 1 ? (
              <FaSortUp />
            ) : icons === -1 ? (
              <FaSortDown />
            ) : (
              <FaSort />
            )}
          </th>
          <th data-title={5} onClick={handleClickIcon} data-property="birthDay">
            Date of Birth{" "}
            {filteredColumn !== 5 ? (
              <FaSort />
            ) : icons === 1 ? (
              <FaSortUp />
            ) : icons === -1 ? (
              <FaSortDown />
            ) : (
              <FaSort />
            )}
          </th>
          <th data-title={6} onClick={handleClickIcon} data-property="street">
            Street{" "}
            {filteredColumn !== 6 ? (
              <FaSort />
            ) : icons === 1 ? (
              <FaSortUp />
            ) : icons === -1 ? (
              <FaSortDown />
            ) : (
              <FaSort />
            )}
          </th>
          <th data-title={7} onClick={handleClickIcon} data-property="city">
            City{" "}
            {filteredColumn !== 7 ? (
              <FaSort />
            ) : icons === 1 ? (
              <FaSortUp />
            ) : icons === -1 ? (
              <FaSortDown />
            ) : (
              <FaSort />
            )}
          </th>
          <th data-title={8} onClick={handleClickIcon} data-property="state">
            State{" "}
            {filteredColumn !== 8 ? (
              <FaSort />
            ) : icons === 1 ? (
              <FaSortUp />
            ) : icons === -1 ? (
              <FaSortDown />
            ) : (
              <FaSort />
            )}
          </th>
          <th data-title={9} onClick={handleClickIcon} data-property="zipCode">
            Zip Code{" "}
            {filteredColumn !== 9 ? (
              <FaSort />
            ) : icons === 1 ? (
              <FaSortUp />
            ) : icons === -1 ? (
              <FaSortDown />
            ) : (
              <FaSort />
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredData.length > 0 || isActive
          ? filteredData
              .slice(
                parseInt(pageNumber) === 1
                  ? 0
                  : (parseInt(pageNumber) - 1) * entries,
                parseInt(pageNumber) * entries
              )
              .map((employee, index) => (
                <tr key={index} id={`employee-${index}`}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.startDate}</td>
                  <td>{employee.department}</td>
                  <td>{employee.birthDay}</td>
                  <td>{employee.street}</td>
                  <td>{employee.city}</td>
                  <td>{employee.state}</td>
                  <td>{employee.zipCode}</td>
                </tr>
              ))
          : data
              .slice(
                parseInt(pageNumber) === 1
                  ? 0
                  : (parseInt(pageNumber) - 1) * entries,
                parseInt(pageNumber) * entries
              )
              .map((employee, index) => (
                <tr key={index} id={`employee-${index}`}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.startDate}</td>
                  <td>{employee.department}</td>
                  <td>{employee.birthDay}</td>
                  <td>{employee.street}</td>
                  <td>{employee.city}</td>
                  <td>{employee.state}</td>
                  <td>{employee.zipCode}</td>
                </tr>
              ))}
      </tbody>
    </table>
  );
}

export default Table;
