import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";
import { HeroesRoutes } from "../../src/heroes";

describe("Pruebas en <AppRouter />", () => {
  test("Debe de mostrar el login si NO esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();
    expect(screen.getAllByText("Login").length).toBe(2);
    //Se evalua que hayan 2 por el h1 y el boton
  });

  test("Debe de mostrar el componente de Marvel si esta autenticado", () => {

    const contextValue = {
      logged: true,
      user: {
        id: "ABC123",
        name: "Pepe",
      },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        {/* Tambien se podria poner /marvel, pero con /login demuestro estar autenticado */}
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug()

    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);

  });
});
