import React from "react";

const EmployeePage = ({ employee, onBack }) => (
  <div>
    <button onClick={onBack}>
      Back
    </button>
    <div style={{ padding: "20px", border: "5px solid gray" }}>
      <h2>{employee.name}</h2>
      <p>{employee.title}</p>
      <p>Call Office: </p>
      <p>781-000-0002</p>
      <p>Call Mobile:</p>
      <p>617-000-0002</p>
      <p>SMS:</p>
      <p> 617-000-0002</p>
      <p>Email:</p>
      <p> {employee.email}</p>
    </div>
  </div>
);

export default EmployeePage;
