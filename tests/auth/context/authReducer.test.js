import { authReducer, types } from "../../../src/auth";

describe("Pruebas en authReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
    // En vez de crear un estado desde 0, es decir un objeto con las propiedades name, descripcion, logged. Es mas practico simplemente tomar el estado de logged en false ya que es un usuario no autenticado y comparar si este es igual al creado con el authReducer.
  });

  test("Debe de (login) llamar el login autenticar y establecer el usuario", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Jorge",
        id: "123",
      },
    };

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
    // Si el user estuviera en null, la prueba no pasa
  });

  test("Debe de (logout) borrar el name del usuario y logged en false", () => {
    const state = {
      logged: true,
    };

    const action = {
      type: types.logout,
      payload: {
        logged: false,
      },
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
