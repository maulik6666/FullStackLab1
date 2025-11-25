const BASE = "http://localhost:3000/api";

export type Employee = {
  id: number;
  name: string;
  department: string;
  roleId?: number | null;
};

export const employeeRepository = {
  async getAll(token?: string): Promise<Employee[]> {
    const res = await fetch(`${BASE}/employees`, {
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : undefined,
      credentials: "include",
    });
    if (!res.ok) throw new Error("Failed to fetch employees");
    return res.json();
  },

  async addEmployee(
    department: string,
    name: string,
    roleId?: number | null,
    token?: string
  ) {
    const res = await fetch(`${BASE}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ department, name, roleId: roleId ?? null }),
      credentials: "include",
    });
    if (!res.ok) throw new Error("Failed to add employee");
    return res.json();
  },

  async removeEmployee(id: number, token?: string) {
    const res = await fetch(`${BASE}/employees/${id}`, {
      method: "DELETE",
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      credentials: "include",
    });
    if (!res.ok) throw new Error("Failed to delete employee");
  },
};