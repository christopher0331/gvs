import './styles/Calculator.css';
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
    <div className="total-value-calculator">
      {employeeData.map((employee, index) => (
        <div key={index} className="employee-data">
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
            <div></div>
            <button type="button" onClick={handleAddEmployee} className="add-employee-button">
                Add Employee
            </button>
            <div className="total-value">
              Total Value: {totalValue}
            </div>
        </div>
        );
    }
              
export default TotalValueCalculator;
            