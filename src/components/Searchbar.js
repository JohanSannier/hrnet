import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../features/searchSlice";

function Searchbar() {
  const employees = useSelector((state) => state.list.employees);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    const searchWord = e.target.value.toLowerCase();
    const newFilter = employees.filter((employee) => {
      return (
        employee.input.firstName.toLowerCase().includes(searchWord) ||
        employee.input.lastName.toLowerCase().includes(searchWord) ||
        employee.input.startDate.toLowerCase().includes(searchWord) ||
        employee.input.department.toLowerCase().includes(searchWord) ||
        employee.input.birthDay.toLowerCase().includes(searchWord) ||
        employee.input.street.toLowerCase().includes(searchWord) ||
        employee.input.city.toLowerCase().includes(searchWord) ||
        employee.input.state.toLowerCase().includes(searchWord) ||
        employee.input.zipCode.toLowerCase().includes(searchWord)
      );
    });
    dispatch(filterData(newFilter));
  };

  return (
    <label className="label flex">
      Search: <input type="search" name="search" onInput={handleInput} />
    </label>
  );
}

export default Searchbar;
