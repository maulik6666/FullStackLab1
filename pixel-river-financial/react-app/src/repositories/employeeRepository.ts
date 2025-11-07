const BASE = "http://localhost:3000/api";

export type Employee = {
  id: number;
  name: string;
  department: string;
  roleId?: number | null;
};

export const employeeRepository = {
  async getAll(): Promise<Employee[]> {
    const res = await fetch(`${BASE}/employees`);
    if (!res.ok) throw new Error("Failed to fetch employees");
    return res.json();
  },
  async addEmployee(department: string, name: string, roleId?: number | null) {
    const res = await fetch(`${BASE}/employees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ department, name, roleId: roleId ?? null }),
    });
    if (!res.ok) throw new Error("Failed to add employee");
    return res.json();
  },
  async removeEmployee(id: number) {
    const res = await fetch(`${BASE}/employees/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete employee");
  },
};