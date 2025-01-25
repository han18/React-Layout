import React, { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";


const App = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    { id: 1, name: "James King", title: "President and CEO" },
    { id: 2, name: "Julie Taylor", title: "VP of Marketing" },
    { id: 3, name: "Eugene Lee", title: "CFO" },
    { id: 4, name: "John Williams", title: "VP of Engineering" },
    { id: 5, name: "Ray Moore", title: "VP of Sales" },
    { id: 6, name: "Paul Jones", title: "QA Manager" },
  ];

  return (
    <div>
      <Header title="Employee Directory" />
      {!selectedEmployee ? (
        <HomePage employees={employees} onEmployeeClick={setSelectedEmployee} />
      ) : (
        <EmployeePage
          employee={selectedEmployee}
          onBack={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
};

export default App;
