import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  // Esto me va a regresar un arreglo de heroes.

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

/* Pasos para entender el funcionamiento:

1: Creamos el [arreglo] de {objetos} con los datos de los heroes, desarrolladora, nombre, superpoder, PUBLICADORA, etc.

2: Creamos una funcion que retorne los heroes segun las PUBLICADORAS indicadas. Marvel y DC getHeroesByPublisher.

3: Creamos un componente que retorne una lista con los heroes <HeroList />

4: en <HeroList /> Traemos la funcion para obtener los heroes segun su publicadora.

5: Desestructuramos el publisher (de getHeroesByPublisher(), el cual este los recibe de heroes ((La lista))) para poder utilizarlo en la lista segun la pagina, sea DC o Marvel.

6: Dentro del return de HeroList creamos un map para poder devolver una lista de LOS NOMBRES de los heroes segun su publicadora (por eso tenemos heroes.superhero)

NOTA: heroes.map es utilizado para poder retornar en pantalla el resultado de getHeroesByPublisher.

7: En DcPage y MarvelPage colocamos el HeroList y mandamos como argumento el publisher que corresponde

*/

// Nota 2: Tras haber pasado los heroes a HeroCard, {...hero} es utilizado para pasarle todas las propiedades sin tener que desestructurar una por una.
