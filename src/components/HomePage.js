import React from "react";
import Header from "./Header";
import EmployeeList from "./EmployeeList";
import EmplyListItems from "./EmplyListItems";
import SearchBar from "./SearchBar";

function HomePage() {
  return (
    <div>
      <h2> Home Page </h2>
      <Header />
      <EmployeeList />
      <SearchBar />
      <EmplyListItems />
      <EmplyListItems />
      <EmplyListItems />
    </div>
  );
}

export default HomePage;
