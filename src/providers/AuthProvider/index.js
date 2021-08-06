import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const getToken = localStorage.getItem("token") || "";
  const [auth, setAuth] = useState(getToken);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = (userData, history) => {
    api
      .post("/sessions/", userData)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", response.data.access);
        setAuth(response.data.access);
        setIsAuthenticated(true);
        toast.success("Usuário logado!");
        setIsCheckout(true);
        return history.push("/dashboard");
      })
      .catch((err) => {
        console.log("Error", err);
        toast.error(
          "Verifique seus dados. Caso seja um novo usuário, faça cadastro."
        );
      });
  };

  useEffect(() => {
    if (getToken !== "") {
      return setIsAuthenticated(true);
    }
  }, [isAuthenticated, getToken]);

  return (
    <AuthContext.Provider
      value={{
        setAuth,
        signIn,
        token: auth,
        isCheckout,
        setIsCheckout,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
