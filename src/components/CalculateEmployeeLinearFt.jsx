import './styles/Calculator.css';
import React, { useState } from 'react';

function TotalValueCalculatorLinearFt() {
  const [employeeData, setEmployeeData] = useState([
    { LinearFt : 0, CostPerFt: 0 },
  ]);

  const handleChange = (e, index) => {
    const newData = [...employeeData];
    newData[index][e.target.name] = e.target.value;
    setEmployeeData(newData);
  };

  const handleAddEmployee = () => {
    setEmployeeData([...employeeData, { LinearFt: 0, CostPerFt: 0 }]);
  };

  const totalValue = employeeData.reduce((acc, employee) => {
    return acc + employee.LinearFt * employee.CostPerFt;
  }, 0);

  return (
    <div className="total-value-calculator">
      {employeeData.map((employee, index) => (
        <div key={index} className="employee-data">
          <label>
            Employee {index + 1} - LinearFt:
            <input
              type="number"
              name="LinearFt"
              value={employee.LinearFt}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
                Employee {index + 1} - CostPerFt:
                <input
                    type="number"
                    name="CostPerFt"
                    value={employee.CostPerFt}
                    onChange={(e) => handleChange(e, index)}
                />
            </label>
                <div>
                    Employee {index + 1} Total: {employee.LinearFt * employee.CostPerFt}
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
              
export default TotalValueCalculatorLinearFt;
            