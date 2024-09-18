// //componentes
// import {Button} from "./components/Button"
// import { Card } from "./components/Card";
// import { CardsLayout } from './components/Card';
// //styles
// import './sass/App.scss'
// //iconos
// import {TiArrowLeftOutline } from "react-icons/ti";
// import {TiArrowRightOutline } from "react-icons/ti";
// //hooks
// import { useState, useEffect} from "react";


// const App = ()=>{

//     const [pokemonId, setPokemonId] = useState(1);
//     const [pokemonEvolutions, setPokemonEvolutions] = useState ([])

//     useEffect(()=>{
//     getEvolutions(pokemonId);
//     }, [pokemonId])

//     async function getEvolutions(id) {
//       const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
//       const data = await response.json();
//       let pokemonEvorray = []
       
//         //sin
//         let pokemonLv1 = data.chain.species.name;
//         let pokemonLv1Img = await getPokemonImgs(pokemonLv1)
       
//         let pokemon1Shiny = await getPokeShiny(pokemonLv1);
//         pokemonEvorray.push([pokemonLv1, pokemonLv1Img, pokemon1Shiny])
       
       
   
//       // dos
//     if (data.chain.evolves_to.length !== 0) {
//       let pokemonLv2 = data.chain.evolves_to[0].species.name;
//       let pokemonLv2Img = await getPokemonImgs(pokemonLv2)
    
//       let pokemon2Shiny = await getPokeShiny(pokemonLv2);
//       pokemonEvorray.push([pokemonLv2, pokemonLv2Img,pokemon2Shiny])
     

//  // tres
//  if (data.chain.evolves_to[0].evolves_to.length !== 0) {
//   let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
//   let pokemonLv3Img = await getPokemonImgs(pokemonLv3)
  
//   let pokemon3Shiny = await getPokeShiny(pokemonLv3);
//   pokemonEvorray.push([pokemonLv3, pokemonLv3Img,pokemon3Shiny])
  
  
//  }   
//  }   
//    setPokemonEvolutions(pokemonEvorray)
//    console.log(pokemonEvorray);
//  }
   
    
//    async function getPokemonImgs(name) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
//     const data = await response.json()
//     return data.sprites.other['official-artwork'].front_default;
//    }

//    async function getPokeShiny(name) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
//     const data = await response.json()
//     return data.sprites.other['official-artwork'].front_shiny;
//    }
//     function prevClick(){
//          (pokemonId === 1)?
//          setPokemonId(1):
//          setPokemonId(pokemonId -1 )
//     }

//       function nextClick(){
//         setPokemonId(pokemonId + 1)
//       }
      
//     return(
//     <div className="app">
//     {/*Tarjetas*/}
//     <div className= { `card-container card${pokemonEvolutions.length}`}>
//     {pokemonEvolutions.map(pokemon => 
//     <Card 
//     key={pokemon[0]}
//     name={pokemon[0]}
//     img={pokemon[1]}
//     name2={pokemon[0]}
//     img2={pokemon[2]}
    
//     /> 
//     )}
//     </div>
//     <div className="buttons-container"> 
//      <Button icon={<TiArrowLeftOutline/>} 
//     handleClick ={prevClick}
//     />
//      <Button icon= {<TiArrowRightOutline/>}
//       handleClick ={nextClick} 
//       />
//      </div>
//     </div>



//     )
// }

// export {App}




//version 2


// import { Button } from "./components/Button";
// import { Card } from "./components/Card"; 
// import './sass/App.scss';
// import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
// import { useState, useEffect } from "react";

// const App = () => {
//   const [pokemonId, setPokemonId] = useState(1);
//   const [pokemonEvolutions, setPokemonEvolutions] = useState([]);

//   useEffect(() => {
//     getEvolutions(pokemonId);
//   }, [pokemonId]);

//   async function getEvolutions(id) {
//     const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
//     const data = await response.json();
//     let pokemonEvorray = [];

//     // Primer nivel de evolución
//     let pokemonLv1 = data.chain.species.name;
//     let pokemonLv1Img = await getPokemonImgs(pokemonLv1);
//     let pokemon1Shiny = await getPokeShiny(pokemonLv1);
//     pokemonEvorray.push({ name: pokemonLv1, img: pokemonLv1Img, shinyImg: pokemon1Shiny });

//     // Segundo nivel de evolución
//     if (data.chain.evolves_to.length !== 0) {
//       let pokemonLv2 = data.chain.evolves_to[0].species.name;
//       let pokemonLv2Img = await getPokemonImgs(pokemonLv2);
//       let pokemon2Shiny = await getPokeShiny(pokemonLv2);
//       pokemonEvorray.push({ name: pokemonLv2, img: pokemonLv2Img, shinyImg: pokemon2Shiny });

//       // Tercer nivel de evolución
//       if (data.chain.evolves_to[0].evolves_to.length !== 0) {
//         let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
//         let pokemonLv3Img = await getPokemonImgs(pokemonLv3);
//         let pokemon3Shiny = await getPokeShiny(pokemonLv3);
//         pokemonEvorray.push({ name: pokemonLv3, img: pokemonLv3Img, shinyImg: pokemon3Shiny });
//       }
//     }
//     setPokemonEvolutions(pokemonEvorray);
//   }

//   async function getPokemonImgs(name) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
//     const data = await response.json();
//     return data.sprites.other['official-artwork'].front_default;
//   }

//   async function getPokeShiny(name) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
//     const data = await response.json();
//     return data.sprites.other['official-artwork'].front_shiny;
//   }

//   function prevClick() {
//     setPokemonId(pokemonId === 1 ? 1 : pokemonId - 1);
//   }

//   function nextClick() {
//     setPokemonId(pokemonId + 1);
//   }

//   return (
//     <div className="app">
//       {/* Tarjetas normales */}
//       <div className="card-row">
//         {pokemonEvolutions.map(pokemon => (
//           <Card
//             key={pokemon.name}
//             name={pokemon.name}
//             img={pokemon.img}
//           />
//         ))}
//       </div>

//       {/* Tarjetas shiny */}
//       <div className="card-row">
//         {pokemonEvolutions.map(pokemon => (
//           <Card
//             key={`${pokemon.name}-shiny`}
//             name={pokemon.name}
//             img={pokemon.shinyImg}
//           />
//         ))}
//       </div>

//       {/* Botones de navegación */}
//       <div className="buttons-container">
//         <Button icon={<TiArrowLeftOutline />} handleClick={prevClick} />
//         <Button icon={<TiArrowRightOutline />} handleClick={nextClick} />
//       </div>
//     </div>
//   );
// };

// export { App };

// version 3
import { Button } from "./components/Button";
import { Card } from "./components/Card"; 
import './sass/App.scss';
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
import { useState, useEffect } from "react";

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonEvolutions, setPokemonEvolutions] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    getEvolutionsById(pokemonId);
  }, [pokemonId]);

  // Obtener la cadena de evolución por ID
  async function getEvolutionsById(id) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
      if (!response.ok) throw new Error('No se encontró la cadena de evolución');
      const data = await response.json();
      processEvolutionData(data);
    } catch (error) {
      setError(error.message);
    }
  }

  // Obtener la cadena de evolución por URL
  async function getEvolutionsByUrl(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('No se encontró la cadena de evolución');
      const data = await response.json();
      processEvolutionData(data);
    } catch (error) {
      setError(error.message);
    }
  }

  // Procesa los datos de la cadena de evolución
  async function processEvolutionData(data) {
    let pokemonEvoArray = [];

    // Primer nivel de evolución
    let pokemonLv1 = data.chain.species.name;
    let pokemonLv1Img = await getPokemonImgs(pokemonLv1);
    let pokemon1Shiny = await getPokeShiny(pokemonLv1);
    pokemonEvoArray.push({ name: pokemonLv1, img: pokemonLv1Img, shinyImg: pokemon1Shiny });

    // Segundo nivel de evolución
    if (data.chain.evolves_to.length !== 0) {
      let pokemonLv2 = data.chain.evolves_to[0].species.name;
      let pokemonLv2Img = await getPokemonImgs(pokemonLv2);
      let pokemon2Shiny = await getPokeShiny(pokemonLv2);
      pokemonEvoArray.push({ name: pokemonLv2, img: pokemonLv2Img, shinyImg: pokemon2Shiny });

      // Tercer nivel de evolución
      if (data.chain.evolves_to[0].evolves_to.length !== 0) {
        let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokemonLv3Img = await getPokemonImgs(pokemonLv3);
        let pokemon3Shiny = await getPokeShiny(pokemonLv3);
        pokemonEvoArray.push({ name: pokemonLv3, img: pokemonLv3Img, shinyImg: pokemon3Shiny });
      }
    }
    setPokemonEvolutions(pokemonEvoArray);
    setError(null);
  }

  async function getPokemonImgs(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();
    return data.sprites.other['official-artwork'].front_default;
  }

  async function getPokeShiny(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();
    return data.sprites.other['official-artwork'].front_shiny;
  }

  // Botón anterior
  function prevClick() {
    setPokemonId(pokemonId === 1 ? 1 : pokemonId - 1);
  }

  // Botón siguiente
  function nextClick() {
    setPokemonId(pokemonId + 1);
  }

  // Función de búsqueda por nombre
  async function handleSearch(e) {
    e.preventDefault();
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${searchTerm.toLowerCase()}/`);
      if (!response.ok) throw new Error('No se encontró el Pokémon');
      const data = await response.json();
      const evolutionChainUrl = data.evolution_chain.url;
      setSearchTerm(''); // Limpiamos el término de búsqueda
      getEvolutionsByUrl(evolutionChainUrl); // Busca la cadena de evolución usando la URL
      setError(null); // Reiniciamos el error si fue exitoso
    } catch (error) {
      setError(error.message); // Si hay error, lo mostramos
    }
  }

  return (
    <div className="app">
      {/* Buscador */}
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite el nombre"
        />
        <button type="submit">Buscar</button>
      </form>

      {error && <p className="error-message">{error}</p>} {/* Muestra el mensaje de error si hay */}

      {/* Tarjetas normales */}
      <div className="card-row">
        {pokemonEvolutions.map(pokemon => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            img={pokemon.img}
          />
        ))}
      </div>

      {/* Tarjetas shiny */}
      <div className="card-row">
        {pokemonEvolutions.map(pokemon => (
          <Card
            key={`${pokemon.name}-shiny`}
            name={pokemon.name}
            img={pokemon.shinyImg}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <div className="buttons-container">
        <Button icon={<TiArrowLeftOutline />} handleClick={prevClick} />
        <Button icon={<TiArrowRightOutline />} handleClick={nextClick} />
      </div>
    </div>
  );
};

export { App };

//service woker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, (err) => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}




