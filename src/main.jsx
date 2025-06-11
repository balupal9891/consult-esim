import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import LoginPage from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from './components/Signup';
import DashboardPage from './components/Dashboard';
import { AppContextProvider } from './appContext/AppContext';
import ProductPage from './components/ProductPage';
import Header from './components/Header.jsx';
import ContactPage from './components/Contact.jsx';
import MainLayout from './layout/MainLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Routes that use Header */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>

          {/* Routes that should not show Header */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  </StrictMode>,
)
