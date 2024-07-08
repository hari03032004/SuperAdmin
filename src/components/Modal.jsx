import React, { useState } from "react";

import "./Modal.css";
import Button from "./Button";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {id:1,hospital:"",display:"",category:"",description:"",location:"",option:""}
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
            <label htmlFor="hospital">Hospital</label>
            <input name="hospital" onChange={handleChange} value={formState.hospital} />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input name="category" onChange={handleChange} value={formState.category} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input name="location" onChange={handleChange} value={formState.location} />
          </div>
          <Button data="submit" width="150px" click={handleSubmit}/>
        </form>
      </div>
    </div>
  );
};