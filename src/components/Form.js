import React, { useState } from "react";
import { states } from "../data/States";
import { departments } from "../data/Departments";
import { useDispatch } from "react-redux";
import { addEmployee } from "../features/employeeSlice";
import ModalDialog from "../components/ModalDialog";

function Form() {
  const [input, setInputs] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const handleClickOpen = () => {
    onOpenModal();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addEmployee({ input }));
    setInputs({
      firstName: "",
      lastName: "",
      birthDay: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    });
    handleClickOpen();
  };

  return (
    <>
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
            <select value={input.state} name="state" onChange={handleChange}>
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
          <select
            value={input.department}
            name="department"
            onChange={handleChange}
          >
            {departments.map((department, index) => (
              <option key={index} value={department.name}>
                {department.name}
              </option>
            ))}
          </select>
        </label>
        <button>Save</button>
      </form>
      <ModalDialog
        open={openModal}
        title="Employee Created"
        description="Successfully added the employee to the employee list."
        closeContent="Close"
        handleCloseModal={onCloseModal}
      />
    </>
  );
}

export default Form;
