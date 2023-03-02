async function getListOfGamesPs5() {
    const ps5CurrentGames = await getGames();

    const ps5GamesElement = document.querySelector("#ps5Games");
    const imagePs5Element = document.querySelector("#imagePs5");

    const { results } = ps5CurrentGames;

    // jocuri ps5
    console.log(results[1]);

    const { games, image_background, games_count } = results[1];

    const ps5Background = image_background;

    const ps5GamesCount = games_count;

    const platforma = results[1].name;

    const ps5GamesMap = {};

    games.forEach(elem => {
        const { name } = elem;

        if (ps5GamesMap[name]) {
            ps5GamesMap[name].push(elem);
        } else {
            ps5GamesMap[name] = [elem];
        }

        ps5GamesElement.innerHTML += `
        <p>${name}</p>
        `;
    });

    imagePs5Element.innerHTML += `
        <img src=${ps5Background}>
        <h4 class="text-center p-4 ps5-text-color">Jocuri ${platforma}:</h4>
        <p class="paragraph-size ps5-text-color">Fiind la inceput, pe ${platforma} sunt circa ${ps5GamesCount} de jocuri disponibile</p>
    `;
}