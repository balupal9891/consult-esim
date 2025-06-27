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
import ContactPage from './components/Contact.jsx';
import MainLayout from './layout/MainLayout.jsx';
import ProductsPage from './components/ProductsPage.jsx';
import OrdersPage from './components/OrdersPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import OrderViewPage from './components/OrderViewPage.jsx';
import DashboardLayout from './layout/DashbaordLayout.jsx';
import CartPage from './components/CartPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Routes that use Header */}
          <Route  element={<MainLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/dashboard/products" element={<DashboardLayout> <ProductsPage /> </DashboardLayout>} />
            <Route path="/dashboard/orders" element={<DashboardLayout> <OrdersPage /> </DashboardLayout>} />
            <Route path="/dashboard/products/:id" element={<ProductPage />} />
            <Route path="/dashboard/orders/:id" element={<OrderViewPage />} />
          </Route>

          {/* Routes that should not show Header */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  </StrictMode>,
)
