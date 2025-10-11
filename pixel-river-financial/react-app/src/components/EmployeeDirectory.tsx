import React from 'react';
import type { Department } from '../data/employee';
import './EmployeeDirectory.css';
import { useEntryForm } from '../hooks/useEntryForm';

interface EmployeeDirectoryProps {
  employeeData: Department;
}

const EmployeeDirectory: React.FC<EmployeeDirectoryProps> = ({ employeeData }) => {
        const [searchTerm, setSearchTerm] = React.useState('');
        const { formValues, handleChange, handleSubmit, error, successMsg } = useEntryForm("employee");
        
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredEmployeeData = () => {
        if (!searchTerm) return employeeData;

        const lowercaseSearch = searchTerm.toLowerCase();
        const newfilteredData: Department = {};

        for(const department in employeeData) {
            const departmentLower = department.toLowerCase();
            const employeesInDeptartment = employeeData[department];
            
            const departmentMatches = departmentLower.includes(lowercaseSearch);
            const filteredEmployees = employeesInDeptartment.filter(employee =>
                employee.toLowerCase().includes(lowercaseSearch)
            );

            if (departmentMatches || filteredEmployees.length > 0) {
                if (departmentMatches) {
                    newfilteredData[department] = employeesInDeptartment;
                } else {
                    newfilteredData[department] = filteredEmployees;
                }
            }
        }
        return newfilteredData;
    };
    
    return (
        <section id="employee-directory">
            <h2>Employee Directory</h2>
            <div className="search-bar">
                Search: <input type="text" placeholder="Search by name or department..."
                value={searchTerm} onChange={handleSearchChange}
                />
            </div>
            {Object.keys(filteredEmployeeData()).map(department => (
                <div key={department} className="department">
                    <h4>{department}</h4>
                    <ul>
                        {filteredEmployeeData()[department].map(employee => (
                            <li key={employee}>{employee}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default EmployeeDirectory;