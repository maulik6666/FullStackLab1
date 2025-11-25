import { roleRepository } from '../repositories/roleRepository';

export const validStaffService = {
  async isValid(type: string, values: any, token?: string): Promise<boolean> {
    if (type === "role") {
      const filled = await roleRepository.isRoleFilled(values.role, token);
      if (filled) return false;
    }

    return true;
  }
};