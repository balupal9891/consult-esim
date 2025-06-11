import { UserProvider } from './UserContext';
import { ProductProvider } from './ProductContext';
import { OrdersProvider } from './OrderContext';
import { DashboardProvider } from './DashboardContext';

export const AppContextProvider = ({ children }) => {
  return (
    <DashboardProvider>
      <UserProvider>
        <ProductProvider>
          <OrdersProvider>
            {children}
          </OrdersProvider>
        </ProductProvider>
      </UserProvider>
    </DashboardProvider>
  );
};