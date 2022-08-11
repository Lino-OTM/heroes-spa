import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  //Con el console.log de useLocation puedo ver con mas detalle estas propiedades que desestructure

  // Con el AuthContext establecemos si el usuario esta logueado o no.

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};

// children = que es un higher order component eso es decir que voy a recibir los componentes que van a estar adentro de este private route

// En el caso de estar en la pagina de <Search/> y tener escrito el nombre de un heroe al darle enter aunque nada haya cambiado se va a volver a ejecutar la funcion. Con un useMemo esto se podria evitar.
