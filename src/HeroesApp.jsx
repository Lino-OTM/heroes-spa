import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <AuthProvider>

    <AppRouter />

    </AuthProvider>
  )
}

// Este AuthProvider me permite compartir la informacion, que se encuentra en mi provider en toda la app. En pantallas autenticadas y no autenticadas. En todos lados en la app. Yo tengo acceso
