import React, { useState } from 'react';

function TotalValueCalculator() {
  const [employeeData, setEmployeeData] = useState([
    { hours: 0, wage: 0 },
  ]);

  const handleChange = (e, index) => {
    const newData = [...employeeData];
    newData[index][e.target.name] = e.target.value;
    setEmployeeData(newData);
  };

  const handleAddEmployee = () => {
    setEmployeeData([...employeeData, { hours: 0, wage: 0 }]);
  };

  const totalValue = employeeData.reduce((acc, employee) => {
    return acc + employee.hours * employee.wage;
  }, 0);

  return (
    <div>
      {employeeData.map((employee, index) => (
        <div key={index}>
          <label>
            Employee {index + 1} - Hours:
            <input
              type="number"
              name="hours"
              value={employee.hours}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            Employee {index + 1} - Wage:
            <input
              type="number"
              name="wage"
              value={employee.wage}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <div>
            Employee {index + 1} Total: {employee.hours * employee.wage}
          </div>
        </div>
      ))}
      <button type="button" onClick={handleAddEmployee}>
        Add Employee
      </button>
      <div>
        Total Value: {totalValue}
      </div>
    </div>
  );
}

export default TotalValueCalculator;
