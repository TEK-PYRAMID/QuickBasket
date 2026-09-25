// Owner: Prashant (Architecture & Shared UI)

import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { UserProvider } from './context/UserContext';
import { OrderProvider } from './context/OrderContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <CartProvider>
            <WishlistProvider>
              <OrderProvider>
                <MainLayout>
                  <AppRoutes />
                </MainLayout>
              </OrderProvider>
            </WishlistProvider>
          </CartProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
