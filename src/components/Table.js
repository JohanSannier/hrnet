import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { useSelector } from "react-redux";

function Table({ data, filteredData, entries }) {
  const isActive = useSelector((state) => state.search.isActive);
  // console.log(entries);
  const [icons, seticons] = useState("default");
  const [filteredColumn, setFilteredColumn] = useState(0);
  // deux state - un pour n0 colonne filtrees et un deuxieme state pour indiquer le sens du filtre

  const handleClickIcon = (e) => {
    const dataTitle = parseInt(
      e.target.parentNode.parentNode.getAttribute("data-title")
    );
    console.log(e.target);
    setFilteredColumn((prevValue) => {
      prevValue === dataTitle
        ? seticons((prevIcon) => !prevIcon)
        : (prevValue = dataTitle);
    });
  };
  return (
    <table className="table">
      <thead>
        <tr id="table-title">
          <th onClick={handleClickIcon} data-title={1}>
            First Name{" "}
            {/* si colonne = 0 donc celle ci est filtree, si pas filtree double fleche si ca lest une des autres icones - si descendant ... si montant .... */}
            {icons === true ? (
              <FaSortUp />
            ) : icons === false ? (
              <FaSortDown />
            ) : (
              <FaSort />
            )}
          </th>
          <th data-title={2} onClick={handleClickIcon}>
            Last Name <FaSort />
          </th>
          <th>
            Start Date <FaSort />
          </th>
          <th>
            Department <FaSort />
          </th>
          <th>
            Date of Birth <FaSort />
          </th>
          <th>
            Street <FaSort />
          </th>
          <th>
            City <FaSort />
          </th>
          <th>
            State <FaSort />
          </th>
          <th>
            Zip Code <FaSort />
          </th>
        </tr>
      </thead>
      <tbody>
        {/* (n0 de la page -1 ) multiple par nb entries souhaitees */}
        {filteredData.length > 0 || isActive
          ? filteredData.slice(0, entries).map((employee, index) => (
              <tr key={index} id={`employee-${index}`}>
                <td>{employee.input.firstName}</td>
                <td>{employee.input.lastName}</td>
                <td>{employee.input.startDate}</td>
                <td>{employee.input.department}</td>
                <td>{employee.input.birthDay}</td>
                <td>{employee.input.street}</td>
                <td>{employee.input.city}</td>
                <td>{employee.input.state}</td>
                <td>{employee.input.zipCode}</td>
              </tr>
            ))
          : data.slice(0, entries).map((employee, index) => (
              <tr key={index} id={`employee-${index}`}>
                <td>{employee.input.firstName}</td>
                <td>{employee.input.lastName}</td>
                <td>{employee.input.startDate}</td>
                <td>{employee.input.department}</td>
                <td>{employee.input.birthDay}</td>
                <td>{employee.input.street}</td>
                <td>{employee.input.city}</td>
                <td>{employee.input.state}</td>
                <td>{employee.input.zipCode}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}

export default Table;
