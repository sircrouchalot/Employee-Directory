import React from "react";
import "./App.css";

import EmployeeTable from "./components/EmployeeTable";
import NavBar from "./components/NavBar";


function App() {
  var employeeList = [
    {
      id: 1,
      name: "Alex Crouch",
      email: "acrouch06@gmail.com",
      department: "Engineering",
      manager: "Ashley Chambers",
    },
    {
      id: 2,
      name: "Ashley Chambers",
      email: "ashley@example.com",
      department: "Engineering",
      manager: "John Williamson",
    },
    {
      id: 3,
      name: "Gregory Block",
      email: "greg@example.com",
      department: "Sales",
      manager: "Hannah Shirley",
    },
    {
      id: 4,
      name: "Hannah Shirley",
      email: "acrouch06@gmail.com",
      department: "Sales",
      manager: "Megan Davidson",
    },
    {
      id: 5,
      name: "Joe Doe",
      email: "joe@example.com",
      department: "Engineer",
      manager: "Ashley Chambers",
    },
  ];

  return (
    <div className="container text-center">
      <NavBar employees={employeeList} />
      <EmployeeTable employees={employeeList} />
    </div>
  );
}

export default App;
