import React, { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { useSelector } from "react-redux";

function Table({ data, filteredData, entries }) {
  const isActive = useSelector((state) => state.search.isActive);
  // console.log(entries);
  const [icons, seticons] = useState("default");
  // deux state - un pour n0 colonne filtrees et un deuxieme state pour indiquer le sens du filtre
  // console.log(entries);
  useEffect(() => {
    const searchbar = document.getElementById("search-input");
    // console.log(searchbar.value.length);
  }, []);

  const handleClickIcon = () => {
    // setIcons((prevValue) => {
    //   switch (prevValue) {
    //     case "default":
    //       prevValue = true;
    //       break;
    //     case true:
    //       prevValue = false;
    //       break;
    //     case false:
    //       prevValue = true;
    //       break;
    //     default:
    //       break;
    //   }
    // });
    // setIcons((prevValue) => {
    //   if (prevValue === "default") {
    //     prevValue = true;
    //   } else {
    //     prevValue = !prevValue;
    //   }
    // });
    // setIcons((prevValue) => {
    //   prevValue === null
    //     ? (prevValue = true)
    //     : prevValue === true
    //     ? (prevValue = false)
    //     : (prevValue = true);
    // });
  };
  return (
    <table className="table">
      <thead>
        <tr className="table-title">
          <th onClick={handleClickIcon}>
            First Name{" "}
            {/* si colonne = 0 donc celle ci est filtree, si pas filtree double fleche si ca lest une des autres icones - si descendant ... si montant .... */}
            {icons === "true" ? (
              <FaSortUp />
            ) : icons === "false" ? (
              <FaSortDown />
            ) : (
              <FaSort />
            )}
          </th>
          <th>
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
