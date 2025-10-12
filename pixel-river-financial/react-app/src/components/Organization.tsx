import { useState } from 'react';
import managementData from '../data/management.json';
import './Organization.css';
import { useEntryForm } from '../hooks/useEntryForm';

interface Role {
    title: string;
    name: string;
    description?: string;
}

const Organization = () => {
  const [expandedName, setExpandedName] = useState<string | null>(null);
  const { formValues, handleChange, handleSubmit, error, successMsg } = useEntryForm("role");

  const toggleDescription = (name: string) => {
  setExpandedName(expandedName === name ? null : name);
};

return(
  <div className="organization-page">
    <h2>Management Data</h2>
    <form onSubmit={handleSubmit} className="addForm">
      <h3>Add New Role</h3>
      <input type="text" name="role" placeholder="Role Title" value={formValues.role} onChange={handleChange} required />
      <input type="text" name="name" placeholder="Employee's Name" value={formValues.name} onChange={handleChange} required />
      <button type="submit">Add Role</button>
      {error && <p className="error">{error}</p>}
      {successMsg && <p className="success">{successMsg}</p>}
    </form>
    
    <div className="management-list">
      {managementData.roles.map((role: Role) => (
        <div key={role.name}>
          <h3 onClick={() => toggleDescription(role.name)}>
            {role.title} - {role.name}
          </h3>
          {expandedName === role.name && (
            <p className="role-description">
              {role.description}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
);
};

export default Organization;