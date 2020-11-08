const FormData = require('form-data');
const fetch = require('node-fetch');
const supportedGames = ['leagueoflegends', 'counterstrike', 'dota2', 'rocketleague', 'smash', 'valorant'];

const getPlayers = (async (game) => {
  const formData = new FormData();
  formData.append('apikey', process.env.LIQUIDDB_API_KEY);
  formData.append('wiki', game);
  formData.append('query', 'id,team,links');
  formData.append('conditions','[[team::Team Liquid]] AND [[links::!]]');
  
  const response = await fetch('https://api.liquipedia.net/api/v1/player', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Encoding': 'gzip'
    },
    body: formData,
  }).then(function(res) {
    return res.json();
  }).then(function(json) {
    console.log(json);
  }).catch(err => {
    console.log('Error: ', err)
  });
});

const getAllPlayers = (async () => {
  return await getPlayers(supportedGames[0]);
});

exports.getPlayers = getPlayers;
exports.getAllPlayers = getAllPlayers;