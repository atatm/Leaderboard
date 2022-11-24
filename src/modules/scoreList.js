export default class ScoresList {
  addscore = async (names, scorevalue) => {
    this.a = '';
    const apiurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/atatm/scores';
    fetch(apiurl, {
      method: 'POST',
      body: JSON.stringify({
        user: names,
        score: scorevalue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    await ((response) => response.json());
    await ((error) => error('Error:', error));
  }
}
