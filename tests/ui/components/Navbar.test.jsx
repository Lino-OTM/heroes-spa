import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate
}))


describe("Pruebas en <Navbar /> ", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "Peter Parker",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrar el nombre del usuario", () => {

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();

    expect(screen.getByText("Peter Parker")).toBeTruthy()
  });

  test("Debe de llamar el logout y navigate cuando se hace click en el boton", () => {

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn)

    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true})

  });
});

// Notas: antes de querer renderizar el navbar tengo que tener en cuenta:
/*
1- Tiene que estar dentor de un <MemoryRouter> y el <AuthContext>
2- Hay que crear un contextValue, Y ESTE DEBE TENER: el estado del login, los datos del user => name - y en el caso que sea necesario marcar el logout como un jest function. (En la primer prueba NO se utiliza, pero en la 2da si.)
3- El logout esta en el contexto ya que hace referencia al boton que existe en la barra de navegacion cuando el usuario ya esta autenticado.

4- Revisar mas sobre la desestructuracion en el jest.mock, (Ademas de saber que se hizo para traer todas las propeidades de react-router-dom y poder usas el MemoryRouter ya que lo solicita)
*/
