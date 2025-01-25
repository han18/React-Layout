import React from "react";
import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = ({ employees, onEmployeeClick }) => (
  <ul style={{ listStyle: "none", padding: 0 }}>
    {employees.map((employee) => (
      <EmployeeListItem
        key={employee.id}
        employee={employee}
        onClick={() => onEmployeeClick(employee)}
      />
    ))}
  </ul>
);

export default EmployeeList;
