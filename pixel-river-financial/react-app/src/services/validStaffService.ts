import { roleRepository } from '../repositories/roleRepository';

export const validStaffService = {
  validateForm: (type: 'employee' | 'role', values: any) => {
    if (values.name.trim().length < 3) {
      return { isValid: false, errorMessage: 'Name must have at least 3 characters.' };
    }

    if (type === 'role' && roleRepository.isRoleFilled(values.role)) {
      return { isValid: false, errorMessage: 'That role is already filled.' };
    }

    return { isValid: true, errorMessage: null };
  }
};