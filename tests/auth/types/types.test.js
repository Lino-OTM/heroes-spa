import { types } from "../../../src/auth";

describe('Pruebas en "Types.js"', () => {
  test("Debe de regresar estos types", () => {
    // console.log(types);
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
//Cuando se agreguen mas types la prueba fallara pero seremos concientes de que se han agregado mas types.

// Esta prueba previene que si el dia de mañana alguien toca mi codigo y cambia el nombre de las propiedades como login en vez de logins2 esto hara que salte un error en los tests.