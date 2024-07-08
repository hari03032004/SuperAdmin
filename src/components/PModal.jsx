import React, { useState } from "react";

import "./Modal.css";
import Button from "./Button";

export const PModal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {id:1,gender:"Male",age:"",region:"",height:"",weight:"",bmi:"",shoesize:"",option:""},
  );

  const handleChange = (e) => {

    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              value={formState.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input name="age" onChange={handleChange} value={formState.age} />
          </div>
          <div className="form-group">
            <label htmlFor="region">Region</label>
            <input name="region" onChange={handleChange} value={formState.region} />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height</label>
            <input name="height" onChange={handleChange} value={formState.height} />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input name="weight" onChange={handleChange} value={formState.weight} />
          </div>
          <div className="form-group">
            <label htmlFor="bmi">BMI</label>
            <input name="bmi" onChange={handleChange} value={formState.bmi} />
          </div>
          <div className="form-group">
            <label htmlFor="shoesize">Shoe size</label>
            <input name="shoesize" onChange={handleChange} value={formState.shoesize} />
          </div>
          <Button data="submit" width="150px" click={handleSubmit}/>
        </form>
      </div>
    </div>
  );
};
