import { employees } from '../data/employee';

let employeeData = { ...employees };

export const employeeRepository = {
  getAll: () => employeeData,

  addEmployee: (department: string, name: string) => {
    if (!department) return;
    if (!employeeData[department]) employeeData[department] = [];
    employeeData[department].push(name);
  },

  removeEmployee: (department: string, name: string) => {
    if (employeeData[department]) {
      employeeData[department] = employeeData[department].filter(emp => emp !== name);
    }
  }
};