const supportedGames = ['leagueoflegends', 'counterstrike', 'dota2', 'rocketleague', 'smash', 'valorant'];

const getPlayers = async (game) => {
  const formData = new FormData();
  formData.append('wiki', game);
  formData.append('apikey', process.env.LIQUIDDB_API_KEY);
  formData.append('query', 'id,team,links');
  formData.append('conditions','[[team::Team Liquid]] AND [[links::!]]');
  
  const response = await fetch('https://api.liquipedia.net/api/v1/player', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData,
  }).catch(err => console.log('Error: ', err));

  return response;
};

const getAllPlayers = async () => {
  const players = [];
  players = supportedGames.map(game => getPlayers(game));
  return players;
}

module.getPlayers = getPlayers;
module.getAllPlayers = getAllPlayers;