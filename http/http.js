'use strict';

let games = [];
let input = null;

window.addEventListener('load', () => {
    search();
})

const search = () => {

    let anotherInput = document.getElementById('input');

    anotherInput.focus();
    anotherInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            input = event.target.value;
            searchGames();
        }
    })
}

const searchGames = async () => {

    const response = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${input}`);
    const json = await response.json();
    const div = document.getElementById('div');
    const price = document.getElementById('price');
    const steamId = document.getElementById('steamId');
    const img = document.getElementById('img');

    const filter = await json.find(res => {
        return res = input;
    })

    if(filter === null || typeof filter === 'undefined') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O Game não foi encontrado!!!'
          });
          return;
    }

    let convertNumber = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD',
    }).format(filter.cheapest);

   if (filter.steamAppID === null) {
        steamId.textContent = "Não há ID na Steam para esse jogo!";
    }
    else {
        steamId.textContent = `Steam Id : ${filter.steamAppID}`;
    }

    div.textContent = filter.external;
    price.textContent = convertNumber;
    img.src = filter.thumb;

    console.log(filter);
}
