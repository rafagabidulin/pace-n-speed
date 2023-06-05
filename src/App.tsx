import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';

export const App = () => (
  <div>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </div>
);
