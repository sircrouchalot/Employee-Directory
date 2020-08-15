import React from "react";

function EmployeeTable(props) {
  const { employees } = props;
  const [sortedField, setSortedField] = React.useState(null);

  const sortableEmployees = React.useMemo(() => {
    let sortedEmployees = [...employees];
    if (sortedField !== null) {
        sortedEmployees.sort((a, b) => {
        if (a[sortedField] > b[sortedField]) {
          return 1;
        } else if (a[sortedField] < b[sortedField]) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    return sortedEmployees;
  }, [employees, sortedField]);


  return (
    <table className="table">
      <caption>Employees</caption>
      <thead className="thead-dark">
        <tr>
        <th scope="col">
            <button type="button" className="btn btn-secondary" onClick={() => setSortedField("id")}>
              ID
            </button>
          </th>
          <th scope="col">
            <button type="button" className="btn btn-secondary" onClick={() => setSortedField("name")}>
              Name
            </button>
          </th>
          <th scope="col">
            <button type="button" className="btn btn-secondary" onClick={() => setSortedField("email")}>
              Email
            </button>
          </th>
          <th scope="col">
            <button type="button" className="btn btn-secondary" onClick={() => setSortedField("department")}>
              Department
            </button>
          </th>
          <th scope="col">
            <button type="button" className="btn btn-secondary" onClick={() => setSortedField("manager")}>
              Manager
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortableEmployees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td> 
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.department}</td>
            <td>{employee.manager}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
