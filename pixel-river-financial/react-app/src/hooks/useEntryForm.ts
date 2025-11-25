import { useState } from "react";
import { validStaffService } from "../services/validStaffService";
import { employeeRepository } from "../repositories/employeeRepository";
import { roleRepository } from "../repositories/roleRepository";
import { useAuth } from "@clerk/clerk-react";

export const useEntryForm = (type: "employee" | "role") => {
  const { getToken } = useAuth();

  const [formValues, setFormValues] = useState({
    name: "",
    department: "",
    role: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    const token = await getToken();

    // VALIDATION
    const validation = await validStaffService.isValid(
      type,
      formValues,
      token || undefined
    );

    if (!validation) {
      setError("Validation failed");
      return;
    }

    try {
      if (type === "employee") {
        await employeeRepository.addEmployee(
          formValues.department,
          formValues.name,
          null, // roleId placeholder (lab app doesn't require)
          token || undefined
        );
        setSuccessMsg("Employee added!");
      } else {
        await roleRepository.addRole(formValues.role, token || undefined);
        setSuccessMsg("Role added!");
      }

      setFormValues({ name: "", department: "", role: "" });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  return {
    formValues,
    handleChange,
    handleSubmit,
    error,
    successMsg,
  };
};