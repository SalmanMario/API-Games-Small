async function getListOfGamesXboxOne() {
    const xboxOneCurrentGames = await getGames();

    const xboxOneGamesElement = document.querySelector("#xboxOneGames");
    const xboxImageElement = document.querySelector("#xboxImage");

    const { results } = xboxOneCurrentGames;

    // jocuri xboxOne
    console.log(results[3]);

    const { games, image_background, games_count } = results[3];

    const xboxCurrentGames = games_count;

    const xboxImage = image_background;

    const platform = results[3].name;

    const xboxGamesMap = [];

    games.forEach(elem => {
        const { name } = elem;
        if (xboxGamesMap[name]) {
            xboxGamesMap[name].push(elem);
        } else {
            xboxGamesMap[name] = elem;
        }

        xboxOneGamesElement.innerHTML += `
            <p class="xboxOne-text-color pb-2">${name}</p>
        `;
    });

    xboxImageElement.innerHTML += `
        <img src=${xboxImage}>
        <h4 class="p-4">Jocuri ${platform}:</h4>
        <p class="paragraph-size">Pe xboxOne au fost scoase circa, ${xboxCurrentGames} de jocuri</p>
    `;
}