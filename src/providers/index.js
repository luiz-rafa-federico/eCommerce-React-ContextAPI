import { AuthProvider } from "./AuthProvider";
import { CartProvider } from "./CartProvider";
import { RegisterProvider } from "./RegisterProvider";
import { SearchProvider } from "./SearchProvider";
import { ProductsProvider } from "./ProductsProvider";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <RegisterProvider>
          <SearchProvider>
            <ProductsProvider>{children}</ProductsProvider>
          </SearchProvider>
        </RegisterProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default Providers;
