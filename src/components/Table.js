import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Table({ data, filteredData, entries }) {
  const isActive = useSelector((state) => state.search.isActive);
  const [icons, seticons] = useState(0);
  const [filteredColumn, setFilteredColumn] = useState(-1);
  // deux state - un pour n0 colonne filtrees et un deuxieme state pour indiquer le sens du filtre

  const handleClickIcon = (e) => {
    const dataTitle = parseInt(e.currentTarget.getAttribute("data-title"));
    console.log("filteredcolumn:", filteredColumn);
    console.log("datatitle:", dataTitle);
    seticons(filteredColumn === dataTitle ? -icons : -1);
    setFilteredColumn(dataTitle);
    console.log(icons);
    // faire la focntion fitre directement ici
  };

  const { pageNumber } = useParams();
  return (
    <table className="table">
      <thead>
        <tr id="table-title">
          <th onClick={handleClickIcon} data-title={1}>
            First Name{" "}
            {/* si colonne = 0 donc celle ci est filtree, si pas filtree double fleche si ca lest une des autres icones - si descendant ... si montant .... 
            si fileteed data pas egal a 1 alors fasort dans le cas contraire cas 1 -1*/}
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
          <th data-title={2} onClick={handleClickIcon}>
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
          <th data-title={3} onClick={handleClickIcon}>
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
          <th data-title={4} onClick={handleClickIcon}>
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
          <th data-title={5} onClick={handleClickIcon}>
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
          <th data-title={6} onClick={handleClickIcon}>
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
          <th data-title={7} onClick={handleClickIcon}>
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
          <th data-title={8} onClick={handleClickIcon}>
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
          <th data-title={9} onClick={handleClickIcon}>
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
        {/* (n0 de la page -1 ) multiple par nb entries souhaitees */}
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
          : data
              .slice(
                parseInt(pageNumber) === 1
                  ? 0
                  : (parseInt(pageNumber) - 1) * entries,
                parseInt(pageNumber) * entries
              )
              .map((employee, index) => (
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
