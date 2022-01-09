const apiData = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
}
const { url } = apiData
const apiUrl = `${url}`;
console.log(apiUrl)

// Maak eventlistener vast aan de button
const getButton = document.querySelector("#pokemon-button");
getButton.addEventListener("click", () => {

    const fetchData = async function () {
        const id = Math.floor(Math.random() * 350) + 1;
        await fetch(apiUrl + id)
            .then((data) => (data.json())
            .then((pokemon) => generateHtml(pokemon)))
    } 

    const generateHtml = (data) => {
        console.log(data);
        const html = `
            <div class="name">${data.name}</div>
            <img src=${data.sprites.front_default}>
            <div class="details">
                <span>Height: ${data.height}</span>
                <span>Weight: ${data.weight}</span>
            </div>
        `
        const pokemonDiv = document.querySelector('.pokemon')
        pokemonDiv.innerHTML = html
    }
    fetchData();
})
