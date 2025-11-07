import React, { useEffect, useState } from "react";
import { roleRepository, type Role } from "../repositories/roleRepository";
import "./Organization.css";

const Organization: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [title, setTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const loadRoles = async () => {
    try {
      setLoading(true);
      const data = await roleRepository.getAll();
      setRoles(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRoles();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await roleRepository.addRole(title);
      setTitle("");
      setSuccess("Role added successfully!");
      await loadRoles(); // refresh list
    } catch (err: any) {
      setError(err.message);
    }
  };

  const filteredRoles = roles.filter((r) =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading roles...</p>;

  return (
    <section id="organization">
      <h2>Organization Roles</h2>

      <form onSubmit={handleAdd} className="entry-form">
        <h3>Add New Role</h3>
        <input
          type="text"
          placeholder="Role title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Add Role</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>

      <div className="search-bar">
        Search:{" "}
        <input
          type="text"
          placeholder="Search by role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="role-list">
        {filteredRoles.map((role) => (
          <li key={role.id}>{role.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default Organization;