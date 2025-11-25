const BASE = "http://localhost:3000/api";

export type Role = { id: number; title: string };

export const roleRepository = {
  async getAll(token?: string): Promise<Role[]> {
    const res = await fetch(`${BASE}/roles`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      credentials: "include",
    });
    if (!res.ok) throw new Error("Failed to fetch roles");
    return res.json();
  },

  async addRole(title: string, token?: string) {
    const res = await fetch(`${BASE}/roles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ title }),
      credentials: "include",
    });
    if (!res.ok) throw new Error("Failed to add role");
    return res.json();
  },

  async isRoleFilled(title: string, token?: string): Promise<boolean> {
    const url = new URL(`${BASE}/roles/is-filled`);
    url.searchParams.set("title", title);
    const res = await fetch(url.toString(), {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      credentials: "include",
    });
    if (!res.ok) throw new Error("Failed to check role");
    const data = await res.json();
    return !!data.filled;
  },
};