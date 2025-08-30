// Function to update footer with current year
const setYear = () => {
    const yearSpan = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
};

// Function to display employee list
const EmployeeDirectory = (employeeData) => {
    const mainSection = document.getElementById("employee-directory");

    for (const department in employeeData) {
        // Create new section for each department
        const departmentSection = document.createElement("section");
        departmentSection.classList.add("department");

        // Heading of departments
        const departmentHeading = document.createElement("h4");
        departmentHeading.textContent = department;
        departmentSection.appendChild(departmentHeading);

        // Employee list
        const employeeList = document.createElement("ul");
        employeeData[department].forEach(employeeName => {
            const employeeListItem = document.createElement("li");
            employeeListItem.textContent = employeeName;
            employeeList.appendChild(employeeListItem);
        });
        departmentSection.appendChild(employeeList);

        // Append department section to main
        mainSection.appendChild(departmentSection);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    setYear();
    // Making sure employees data is available from the employees.js file
    if (typeof employees !== 'undefined') {
        EmployeeDirectory(employees);
    }
});
