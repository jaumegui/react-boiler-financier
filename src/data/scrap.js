import $ from 'jquery';

export default function scrap(date) {
  const matchs = [];
  $.ajax({
    url: `http://www.allomatch.com/fr/match/listTv?team=Tapez%20une%20%C3%A9quipe%20ou%20un%20tournoi%20ici&channels=&match-search-from=${date.day}%2F${date.month}%2F${date.year}&match-search-to=${date.day}%2F${date.month}%2F${date.year}&sport_id=&important_dates=${date.year}-${date.month}-${date.day}`,
    type: "get",
    async: false,
    success: function(data) {
      const page = document.createElement('page');
      console.log(data);
      page.innerHTML = data;
      const summary = page.querySelectorAll('.summary');
      const hoursNodes = page.querySelectorAll('.match-tv-time');
      const hours = [];
      hoursNodes.forEach((node) => {
        hours.push(node.innerText.trim());
      });
      const matchsNames = [];
      summary.forEach((match) => {
        matchsNames.push(match.innerText);
      });
      const channelsNode = page.querySelectorAll('.list-match-channels');
      const channels = [];
      channelsNode.forEach((channel) => {
        channels.push(channel.innerText);
      });
      for (let i = 0; i < hours.length; i += 1) {
        matchs.push({
          name: matchsNames[i],
          hour: hours[i],
          channel: channels[i]
        });
      }
      return matchs;
    },
    error: "error"
  });
  return matchs;
}
