// import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import LoginLayout from '../../../layouts/login/LoginLayout';
import PageLogin from '../../../pages/auth/login/PageLogin';
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout';

// page home
import PageHome from '../../../pages/home/PageHome';

// page user
import PageUserList from '../../../pages/users/list/PageUserList';
import PageUserData from '../../../pages/users/data/PageUserData';
// page product
import PageProductList from '../../../pages/products/list/PageProductList';
import PageProductData from '../../../pages/products/data/PageProductData';

import PageNotFound from '../../../pages/errors/PageNotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<PageHome />} />
        <Route path="/users">
          <Route index element={<PageUserList />} />
          <Route path="data" element={<PageUserData />} />
        </Route>
        <Route path="/products">
          <Route index element={<PageProductList />} />
          <Route path="data" element={<PageProductData />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/auth" element={<LoginLayout />}>
        <Route path="login" element={<PageLogin />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
