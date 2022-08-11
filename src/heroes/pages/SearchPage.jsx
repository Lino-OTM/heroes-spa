import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";
//paquete utilizado para extraer todo lo que se encuentra en el objeto del search (console.log({location})) para poder verlo

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  // const showSearch = (q.length === 0); opcion 2
  // const showError = (q.length > 0) && heroes.length === 0; opcion 2

  const { searchText, onInputChange } = useForm({
    searchText: q,
    // En vez de poner : "", al haber puesto q esto hace que al recargar el navegador en el input quede el nombre del heroe. Se mantiene el estado del queryparamter (el url) y sin usar localStorage.
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`);
    // Esto sirve para cambiar el url cuando el usuario de la enter a la busqueda, aunque solo se podria dejar en { searchText}
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label="form">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a hero
            </div>
          ) : (
            heroes.length === 0 && (
              <div
                aria-label="error-alert"
                className="alert alert-danger animate__animated animate__fadeIn"
              >
                No results found with <b>{q}</b>
              </div>
            )
          )}
          {/* Con esta condicion podemos mostrar el cuadro "Search a hero", si el input esta vacio, o mostrar el error si se escribe cualquier cosa, O mostrar el heroe si el search corresponde */}

          {/* Otra forma de hacerlo: */}
          {/* <div className="alert alert-primary" style={{display: showSearch ? "" : "none" }}>Search a hero</div>
    <div className="alert alert-danger" style={{display: showError ? "" : "none"}}>No results found with <b>{ q }</b></div> */}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}

          {/* <HeroCard {...hero} /> */}
        </div>
      </div>
    </>
  );
};
