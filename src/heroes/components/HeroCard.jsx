import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return <></>;

  return <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,HeroC
}) => {

  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} alt={superhero} className="card-img" />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {/* {alter_ego !== characters && charactersByHero} */}

              {/* ESTO TIENE OTRA ALTERNATIVA MAS FACIL DE LEER, PERO SE VE INNECESARIO CREAR OTRO COMPONENTE SOLO PARA UN PARRAFO (Por eso lo puse en una constante en vez de un componente directo) */}

              <CharactersByHero characters={characters} alter_ego={alter_ego} /> 
              {/* Esta es la 3er forma de hacerlo, (tambien se pueden usar ternarios en el jsx de la linea 3-4) */}

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
