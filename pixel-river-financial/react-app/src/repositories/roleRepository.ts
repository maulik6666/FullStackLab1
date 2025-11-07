const BASE = "http://localhost:3000/api";

export type Role = { id: number; title: string };

export const roleRepository = {
  async getAll(): Promise<Role[]> {
    const res = await fetch(`${BASE}/roles`);
    if (!res.ok) throw new Error("Failed to fetch roles");
    return res.json();
  },
  async addRole(title: string) {
    const res = await fetch(`${BASE}/roles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) throw new Error("Failed to add role");
    return res.json();
  },
  async isRoleFilled(title: string): Promise<boolean> {
    const url = new URL(`${BASE}/roles/is-filled`);
    url.searchParams.set("title", title);
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error("Failed to check role");
    const data = await res.json();
    return !!data.filled;
  },
};