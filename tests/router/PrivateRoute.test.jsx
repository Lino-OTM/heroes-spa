import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("Pruebas en <PrivateRoute />", () => {

  test("Debe de mostrar el children SI esta autenticado", () => {
    //Esto es propio de NODE
    Storage.prototype.setItem = jest.fn()

    const contextValue = {
      logged: true,
      user: {
        id: "ABC123",
        name: "Pepe",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
        <PrivateRoute>
          <h1>Ruta Privada</h1>
        </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta Privada")).toBeTruthy();
    expect( localStorage.setItem).toHaveBeenCalled()
    // screen.debug()
  });
});
