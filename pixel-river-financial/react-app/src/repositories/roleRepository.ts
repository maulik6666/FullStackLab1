import managementData from '../data/management.json';

let roleData = [...managementData.roles];

export const roleRepository = {
  getAll: () => roleData,

  addRole: (title: string, name: string) => {
    if (!title.trim() || !name.trim()) return;
    roleData.push({ title, name });
  },

  isRoleFilled: (title: string) => {
    return roleData.some(role => role.title === title);
  },
};