function favorito(pokemon){

    pokemonFavorito = pokemon
    switch (pokemon) {

        case 1:
            pokemonName = "Bulbasaur"
            break;
        case 2:
            pokemonName = "Ivysaur"
            break;
        case 3:
            pokemonName = "Venusaur"
            break;
        case 4:
            pokemonName = "Charmander"
            break;
        case 5:
            pokemonName = "Charmeleon"
            break;
        case 6:
            pokemonName = "Charizard"
            break;
        case 7:
            pokemonName = "Squirtle"
            break;
        case 8:
            pokemonName = "Wartortle"
            break;
        case 9:
            pokemonName = "Blastoise"
            break;
        default:
            break;
        }
        alert("O Pokémon "+ pokemonName+ " foi favoritado")
    }