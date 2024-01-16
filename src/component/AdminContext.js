// AdminContext.js
import { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [adminId, setAdminId] = useState(null);

  const setAdmin = (id) => {
    setAdminId(id);
  };

  return (
    <AdminContext.Provider value={{ adminId, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
