import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData, activeSearch } from "../features/searchSlice";

function Searchbar() {
  const employees = useSelector((state) => state.list.employees);
  const [searchedInputs, setSearchedInputs] = useState({ search: "" });
  const dispatch = useDispatch();
  const handleInput = (e) => {
    const { name } = e.target;
    const searchWord = e.target.value.toLowerCase();
    setSearchedInputs({ [name]: searchWord });
    const singleWord = searchWord.trim().split(/\s+/);
    console.log(singleWord);
    // singleWord.forEach((word) => {

    const newFilter = employees.filter((employee) => {
      let unMatched = singleWord.length;
      for (const word of singleWord) {
        // console.log(word);
        if (
          employee.input.firstName.toLowerCase().includes(word) ||
          employee.input.lastName.toLowerCase().includes(word) ||
          employee.input.startDate.toLowerCase().includes(word) ||
          employee.input.department.toLowerCase().includes(word) ||
          employee.input.birthDay.toLowerCase().includes(word) ||
          employee.input.street.toLowerCase().includes(word) ||
          employee.input.city.toLowerCase().includes(word) ||
          employee.input.state.toLowerCase().includes(word) ||
          employee.input.zipCode.toLowerCase().includes(word)
        )
          unMatched--;
        // console.log(unMatched);
      }
      // console.log(!unMatched);
      return !unMatched;
      // return (
      //   employee.input.firstName.toLowerCase().includes(searchWord) ||
      //   employee.input.lastName.toLowerCase().includes(searchWord) ||
      //   employee.input.startDate.toLowerCase().includes(searchWord) ||
      //   employee.input.department.toLowerCase().includes(searchWord) ||
      //   employee.input.birthDay.toLowerCase().includes(searchWord) ||
      //   employee.input.street.toLowerCase().includes(searchWord) ||
      //   employee.input.city.toLowerCase().includes(searchWord) ||
      //   employee.input.state.toLowerCase().includes(searchWord) ||
      //   employee.input.zipCode.toLowerCase().includes(searchWord)
      // );
    });
    dispatch(filterData(newFilter));
    dispatch(activeSearch(searchWord));
    // });
  };

  return (
    <label className="label flex">
      Search:{" "}
      <input
        type="search"
        value={searchedInputs.search}
        onInput={handleInput}
        name="search"
        id="search-input"
      />
    </label>
  );
}

export default Searchbar;
