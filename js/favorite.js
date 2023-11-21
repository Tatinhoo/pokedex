var pokemonFavorito;

function favorito() {
    var numeroPokemon = prompt("Digite o número do Pokémon:");
    pokemonFavorito = parseInt(numeroPokemon, 10); // Converte a entrada para um número inteiro
    var imagemAtualPokemon = document.getElementById("pokemonimg");
    var pokemonName;

    switch (pokemonFavorito) {
        case 1:
            pokemonName = "Bulbasaur";
            break;
        case 2:
            pokemonName = "Ivysaur";
            break;
        case 3:
            pokemonName = "Venusaur";
            break;
        // Resto do código de switch ...

        default:
            break;
    }

    // Formate o número do Pokémon com dois dígitos
    var numeroPokemonFormatado = pokemonFavorito.toString().padStart(2, '0');

    // Construa o caminho da imagem com base no número formatado
    var caminhoImagem = "img/pokemon/" + numeroPokemonFormatado + ".png";

    // Defina o novo valor para o atributo src
    imagemAtualPokemon.src = caminhoImagem;
    console.log(imagemAtualPokemon.src);
    alert("O Pokémon " + pokemonName + " foi favoritado");
}
