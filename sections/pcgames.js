async function getListOfGamesPc() {
    const pcGamesElement = document.querySelector("#pcGames");
    const imagePcElement = document.querySelector("#imagePc");

    const currentGames = await getGames();

    const { results } = currentGames;
    console.log(results[0]);
    console.log(results);

    const platform = results[0].name;

    // jocuri pc
    const { games, image_background, games_count } = results[0];

    const imageGamePc = image_background;

    const totalGamesPc = games_count;

    const gamesMap = {};

    games.forEach(element => {
        const { name } = element;
        console.log(name);

        if (gamesMap[name]) {
            gamesMap[name].push(element);
        } else {
            gamesMap[name] = [element];
        }

        pcGamesElement.innerHTML += `
        <p>${name}</p>
    `;
    });

    imagePcElement.innerHTML = `
        <img src=${imageGamePc}>
        <h4 class="text-center pt-4 pc-text-color">Jocuri ${platform}:</h4>
        <p class="pt-4 paragraph-size">In prezent pe ${platform} au fost scoase cel putin ${totalGamesPc} de jocuri iar industria este in continua crestere!</p>
    `;
}