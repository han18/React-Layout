import React from "react";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

const HomePage = ({ employees, onEmployeeClick }) => (
  <div className="home-page">
    <SearchBar />
    <EmployeeList employees={employees} onEmployeeClick={onEmployeeClick} />
  </div>
);

export default HomePage;
