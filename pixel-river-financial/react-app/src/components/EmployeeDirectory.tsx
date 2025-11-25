import React, { useEffect, useState } from "react";
import { employeeRepository, type Employee } from "../repositories/employeeRepository";
import "./EmployeeDirectory.css";
import { useAuth } from "@clerk/clerk-react";

const EmployeeDirectory: React.FC = () => {
  const { getToken } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // fetch data from backend
  const loadEmployees = async () => {
    try {
      setLoading(true);
      const token = await getToken();
      const data = await employeeRepository.getAll(token || undefined);
      setEmployees(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  // add new employee
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = await getToken();
      await employeeRepository.addEmployee(department, name, undefined, token || undefined);
      setSuccess("Employee added successfully!");
      setName("");
      setDepartment("");
      await loadEmployees(); // refresh list
    } catch (err: any) {
      setError(err.message);
    }
  };

  // search filter
  const filteredEmployees = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading employees...</p>;

  return (
    <section id="employee-directory">
      <h2>Employee Directory</h2>

      <form onSubmit={handleAdd} className="entry-form">
        <h3>Add New Employee</h3>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <button type="submit">Add Employee</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>

      <div className="search-bar">
        Search:{" "}
        <input
          type="text"
          placeholder="Search by name or department..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="employee-list">
        {filteredEmployees.map((emp) => (
          <li key={emp.id}>
            {emp.name} — {emp.department}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EmployeeDirectory;
