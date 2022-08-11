import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]); 

  const navigate = useNavigate();
  const handleReturn = () => {
    hero.publisher === "DC Comics" ? navigate("/dc") : navigate("/marvel");
  };

  if (!hero) {
    // return <>404 - Not found</> Si el heroe no existe
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={handleReturn}>
          Back
        </button>
      </div>
    </div>
  );
};

// El Hook de useParams como su nombre lo dice nos permite obtener los parametros. Con el comodin que utilizamos en HeroesRouter al haber puesto /id: si hacemos un console.log de los params podremos ver que el id esta apuntando al mismo que establecimos.

// Si no pusiera la evaluacion de que si el heroe no existe envie al usuario a en este caso /marvel, no podria retornas hero.superhero.
