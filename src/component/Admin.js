// Admin.js

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Productlist from '../component/Productlist';
import AddProduct from '../component/Addproduct';

function Admin() {
  return (
    <div>
      <Sidebar />
      <div className="admin-content">
        <Routes>
          {/* Use relative paths for nested routes */}
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="productlist/:adminId" element={<Productlist />} />
          {/* Add a default route or redirection */}
          <Route
            path="/"
            element={<Navigate to="addproduct" replace />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
