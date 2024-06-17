import React, { useState } from "react";


const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.username ||
      !formData.email ||
      !formData.dob ||
      !formData.phone
    ) {
      setErrorMessage("Please fill out all the fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMessage("Invalid email. Please check your email address.");
      return;
    }

    if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      setErrorMessage(
        "Invalid phone number. Please enter a 10-digit phone number.",
      );
      return;
    }

    const dobDate = new Date(formData.dob);
    const currentDate = new Date();

    if (dobDate > currentDate) {
      setErrorMessage("Invalid date of birth. Please enter a valid date.");
      return;
    }

    // Reset form data, error message, and close modal
    setFormData({
      username: "",
      email: "",
      dob: "",
      phone: "",
    });
    setErrorMessage("");
    setIsOpen(false);
  };

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal-content")) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`} onClick={handleCloseModal}>
      <h1>User Details Modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      <div
        className={`modal-content ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}>
        <form>
          <div className="form-group">
            <h2>Username:</h2>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <h2>Email:</h2>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <h2>Phone Number:</h2>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <h2>Date of Birth:</h2>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <div className="modal-close"></div>
      </div>
    </div>
  );
};

export default Modal;