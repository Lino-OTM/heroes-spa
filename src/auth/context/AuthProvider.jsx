import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// const initialState = {
// logged: false,
// };

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  // El initializer (init) es lo que voy a poder usar para inicializar el estado

  const login = (name = "") => {
    const user = { id: "ABC", name };

    const action = { type: types.login, payload: user };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = { type: types.logout };
    dispatch(action);
  };
  // En vez de poner initialState puede ser un objeto vacio.

  // Aqui se manda tanto el login como el logout, las funciones estan establecidas mas arriba.
  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Si pusiera el authState y dispatch en el value={{}} del provider le estoy dando poder a el resto de los componentes.
