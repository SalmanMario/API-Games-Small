const API_KEY = "2c39b970c1ea4ec79e8302f83df4f1d5";

function getGames() {
    return fetchAndParse(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
}