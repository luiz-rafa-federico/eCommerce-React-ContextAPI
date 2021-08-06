import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const registerUser = (data, history) => {
    api
      .post("/users/", data)
      .then((_) => {
        toast.success("Usuário criado com sucesso. Faça Login!");
        return history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Usuário já cadastrado. Faça login!");
      });
  };

  return (
    <RegisterContext.Provider value={{ registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
