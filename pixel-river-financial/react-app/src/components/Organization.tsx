import { useState } from 'react';
import managementData from '../data/management.json';

interface Role {
    title: string;
    name: string;
    description?: string;
}

const Organization = () => {
  const [expandedName, setExpandedName] = useState<string | null>(null);

const toggleDescription = (name: string) => {
  setExpandedName(expandedName === name ? null : name);
};

return(
  <div className="organization-page">
    <h2>Management Data</h2>
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