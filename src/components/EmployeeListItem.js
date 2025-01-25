import React from "react";

const EmployeeListItem = ({ employee, onClick }) => (
  <li
    onClick={onClick}
    style={{
      padding: "10px",
      margin: "30px",
      borderBottom: "2px solid gray",

    }}
  >
    <strong>{employee.name}</strong>
    <p>{employee.title}</p>
  </li>
);

export default EmployeeListItem;
