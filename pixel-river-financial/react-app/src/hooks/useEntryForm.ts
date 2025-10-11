import { useState } from 'react';
import { validStaffService } from '../services/validStaffService';
import { employeeRepository } from '../repositories/employeeRepository';
import { roleRepository } from '../repositories/roleRepository';

export const useEntryForm = (type: 'employee' | 'role') => {
  const [formValues, setFormValues] = useState({ name: '', department: '', role: '' });
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(null);
    const validation = validStaffService.validateForm(type, formValues);

    if (!validation.isValid) {
      setError(validation.errorMessage);
      return;
    }

    if (type === 'employee') {
      employeeRepository.addEmployee(formValues.department, formValues.name);
      setSuccessMsg('Employee added!');
    } else {
      roleRepository.addRole(formValues.role, formValues.name);
      setSuccessMsg('Role added!');
    }

    setFormValues({ name: '', department: '', role: '' });
    setError(null);
  };

  return {
    formValues,
    handleChange,
    handleSubmit,
    error,
    successMsg,
    allEmployees: employeeRepository.getAll(),
    allRoles: roleRepository.getAll()
  };
};