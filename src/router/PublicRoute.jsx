import { useContext } from "react";
import { AuthContext } from "../auth";
import {Navigate} from 'react-router-dom'

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return (!logged)
   ? children 
   : <Navigate to="/marvel" />;
};

// el !logged dice "si no esta autenticado" va a mostrar los hijos, caso contrario envia al usuario a Marvel