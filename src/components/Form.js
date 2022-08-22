import React, { useState } from "react";
import { states } from "../data/States";
import { departments } from "../data/Departments";

function Form() {
  const [input, setInputs] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: 0,
    department: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  console.log(input);

  return (
    <form onSubmit={handleSubmit}>
      <label className="label">
        First Name:{" "}
        <input
          type="text"
          name="firstName"
          value={input.firstName}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          value={input.lastName}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        Date of Birth:{" "}
        <input
          type="date"
          name="birthDay"
          value={input.birthDay}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        Start Date:{" "}
        <input
          type="date"
          name="startDate"
          value={input.startDate}
          onChange={handleChange}
        />
      </label>
      <fieldset>
        <legend>Address</legend>
        <label className="label">
          Street:{" "}
          <input
            type="text"
            name="street"
            value={input.street}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          City:{" "}
          <input
            type="text"
            name="city"
            value={input.city}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          State:{" "}
          <select value={input.state} onChange={handleChange}>
            {states.map((state, index) => (
              <option key={index} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </label>
        <label className="label">
          Zip Code:{" "}
          <input
            type="text"
            name="zipCode"
            value={input.zipCode}
            onChange={handleChange}
            maxLength={5}
          />
        </label>
      </fieldset>
      <label className="label">
        Department:{" "}
        <select value={input.department} onChange={handleChange}>
          {departments.map((department, index) => (
            <option key={index} value={department.name}>
              {department.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;