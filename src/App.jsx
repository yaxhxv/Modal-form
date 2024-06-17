import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    if (isOpen) setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((currentData) => {
      return {
        ...currentData,
        [id]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFormData(formData))
      setFormData({
        username: "",
        email: "",
        phone: "",
        dob: "",
      });
  };
  return (
    <div className="App" onClick={handleClose}>
      <h1>User Details Modal</h1>
      <button className="button" onClick={handleClick}>
        Open Form
      </button>
      {isOpen && (
        <Modal>
          <div className="modal-content">
            <h3>Fill Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="rows">
                <label htmlFor="username">
                  <strong>Username:</strong>
                </label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="rows">
                <label htmlFor="email">
                  <strong>Email Address:</strong>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="rows">
                <label htmlFor="phone">
                  <strong>Phone Number:</strong>
                </label>
                <input
                  type="number"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="rows">
                <label htmlFor="dob">
                  <strong>Date Of Birth:</strong>
                </label>
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="rows">
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}

function validateFormData(data) {
  let phone = data.phone + "";
  if (phone.length !== 10) {
    window.alert("Invalid phone number. Please enter a 10-digit phone number.");
    return false;
  }
  let date = data.dob;
  // console.log(typeof date);
  if (new Date(date).getTime() > new Date().getTime()) {
    window.alert(
      "Invalid date of birth. Date of birth cannot be in the future."
    );
    return false;
  }
  return true;
}

export default App;