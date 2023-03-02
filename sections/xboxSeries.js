async function getListOfGamesXboxSeries() {
    const xboxSeriesCurrentGames = await getGames();

    const xboxSeriesGamesElement = document.querySelector("#xboxSeriesGames");
    const xboxImageElement = document.querySelector("#xboxImage");

    const { results } = xboxSeriesCurrentGames;

    // jocuri xboxSeries
    console.log(results[4]);

    const { games, image_background, games_count } = results[4];

    const xboxCurrentGames = games_count;

    const xboxImage = image_background;

    const platform = results[4].name;

    const xboxGamesMap = [];

    games.forEach(elem => {
        const { name } = elem;
        if (xboxGamesMap[name]) {
            xboxGamesMap[name].push(elem);
        } else {
            xboxGamesMap[name] = elem;
        }

        xboxSeriesGamesElement.innerHTML += `
            <p class="xboxSeries-text-color pb-2">${name}</p>
        `;
    });

    xboxImageElement.innerHTML += `
        <img src=${xboxImage}>
        <h4 class="p-4">Jocuri ${platform}:</h4>
        <p class="paragraph-size">Pe ${platform} au fost scoase circa, ${xboxCurrentGames} de jocuri</p>
    `;
}