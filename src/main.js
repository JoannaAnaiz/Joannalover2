/* Manejo del DOM */
/* Manejo del DOM 
const selectOrder = document.getElementById('select-order');
const selectFilterType = document.getElementById('select-filter-type');
const containerList = document.getElementById('container-list');
const dataPokemon = POKEMON.pokemon;
    */
/* Manejo del DOM */

// const totalPokemons = POKEMON.pokemon; 
const arrListaPokemones= pokemon.listaPokemons(totalPokemons);
const contenedor=document.getElementById("contenedor");
const mostrarPokemones=document.getElementById("mostrarPokemones");
const pokemonesFiltrados = document.getElementById("tiposPokemon");
const orden=document.getElementById("orden-pokemon");
const pesoPokemon=document.getElementById("peso");

// const limpiar=document.getElementById("limpiar");

//Imprimir lista de pokemones
const listaDePokemones = (data) => {
	let mostrar = '';
	for (let i = 0; i < data.length; i++) {
    box = `
    <div>
	<img  src="${ data[i].img}" />
	<p> Nombre : ${ data[i].name}</p>
    <p> Tipo : ${ data[i].type}</p>
    <p> weight : ${ data[i].weight}</p>
	</div>
`;
	mostrar += box;
	};
	contenedor.innerHTML = mostrar;
}

//Mostrar pokemones
mostrarPokemones.addEventListener("click", function(){
  listaDePokemones(arrListaPokemones)
});

//Mostrar los pokemones por orde
orden.addEventListener("change",()=>{
  const ordenando= pokemon.ordenPokemones(totalPokemons, orden.value);
	listaDePokemones(ordenando);
} );

//Filtrar pokemones por tipo
pokemonesFiltrados.addEventListener("change", () => {
	const filtrandoPokemones = pokemon.filtrarPokemones(totalPokemons, pokemonesFiltrados.value);
  listaDePokemones(filtrandoPokemones);
});

// Mostrar pokemones por peso
pesoPokemon.addEventListener("change", () => {
	const pesandoPokemones = pokemon.pesoPokemones(totalPokemons, pesoPokemon.value);
	listaDePokemones(pesandoPokemones);
});
