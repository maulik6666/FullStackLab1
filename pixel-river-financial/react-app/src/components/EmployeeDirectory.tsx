import React from 'react';
import type { Department } from '../data/employee';
import './EmployeeDirectory.css';

interface EmployeeDirectoryProps {
  employeeData: Department;
}

const EmployeeDirectory: React.FC<EmployeeDirectoryProps> = ({ employeeData }) => {
    return (
        <section id="employee-directory">
            <h2>Employee Directory</h2>
            {Object.keys(employeeData).map(department => (
                <div key={department} className="department">
                    <h4>{department}</h4>
                    <ul>
                        {employeeData[department].map(employee => (
                            <li key={employee}>{employee}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default EmployeeDirectory;