/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//Lista de pokemones y caracteristicas

const totalPokemons = POKEMON.pokemon; //data

const listaPokemons=(data)=>{ // [{},{},{}]
  let arraLista=[];
  for(let i=0; i<data.length;i++){
    arraLista.push({name: data[i].name, img: data[i].img, type: data[i].type, weight: data[i].weight})
  }
  return arraLista; // [{},{},{}]
};


//funcion filtra los tipos de pokemones
const filtrarPokemones = (data, tipo) => {
	let arrayFiltra = []; /*array vacío*/
	arrayFiltra = data.filter((elemento) => { /*filter al array vacío?*/
			for (let i = 0; i < elemento.type.length; i++) { /*for dentro de un filter*/
				if (elemento.type[i] === tipo) {
					return 1; /*por qué retorna 1*/
				}
			}
		});
	return arrayFiltra; /*retorna [vacío]*/
}




//funcion todos los pesos
const pesoPokemones = (arr) => {
  arrPeso = [];
  for(let i = 0; i < arr.length; i++) {
    arrPeso.push(arr[i].weight);
    
  };

return arrPeso
}
console.log(pesoPokemones(POKEMON.pokemon));

  
//Funcion ordenar pokemones asc y desc
const ordenPokemones=(data,orden)=>{
  let pokemones=[];
  for(let i=0; i<data.length;i++){
    pokemones.push({name: data[i].name, img: data[i].img, type: data[i].type, weight: data[i].weight})
  }
  pokemones.sort((a,b)=>{
    if(typeof a === 'string' && typeof b === 'string'){
      a = a.toLowerCase();
      b = b.toLowerCase();  
    }  
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else if (a.name === b.name) {
      return 0;
    }
  } 
   )
   if (orden === 'ordenaz') {
		return pokemones;
  }
  else if(orden==='ordenza')
  return pokemones.reverse();
   }

/* Ordenado ascendente */
//console.log(namePokemon.sort(sortArrs))

const computeStats=(data)=>{

   
}
/* arrMultiplicadores=[];
   for(let i=0; i<POKEMON.pokemon.length;i++){
     arrMultiplicadores.push(POKEMON.pokemon[i].multipliers)
   }console.log(arrMultiplicadores);
   */

window.pokemon = {
  listaPokemons, 
  filtrarPokemones, 
  ordenPokemones,
  pesoPokemones,
};

