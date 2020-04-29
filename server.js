const express = require('express');
const app = express();
const _ = require('underscore')

const fetch = require('node-fetch')

//settings
app.set('port', process.env.PORT || 3000)

app.use(express.static(__dirname + '/public'));

app.get('/api/search/:text', async (req, res) => {
  const { text } = req.params;
  const result = [];

  //TV MAZE API
  const response = await fetch(`http://api.tvmaze.com/search/shows?q=${text}`);
  const items = await response.json();
  _.each(items, (item, i) => {
    let img = ""
    if( item.show.image != null){
      img = item.show.image.medium
    }
    const data = {
      id: item.show.id,
      name: item.show.name,
      type: 'https://cdn3.iconfinder.com/data/icons/computer-and-gadgets-icon-set/50/tv-512.png',
      img: img
    }
    result.push(data)
  });

  //Itunes API
  const respItunes = await fetch(`https://itunes.apple.com/search?term=${text}&limit=15`);
  const itemsItunes = await respItunes.json();
  _.each(itemsItunes.results, (item, i) => {
    let img = ""
    if( item.artworkUrl100 != null){
      img = item.artworkUrl100
    }
    const data = {
      id: item.trackId,
      name: item.trackName + ' - ' + item.artistName,
      type: 'https://image.flaticon.com/icons/svg/1384/1384029.svg',
      img: img
    }
    result.push(data) 
  });

  //Github API
  const respGit = await fetch(`https://api.github.com/search/users?q=${text}+repos:%3E42+followers:%3E1000`);
  const itemsGit = await respGit.json();
  _.each(itemsGit.items, (item, i) => {
    let img = ""
    if( item.avatar_url != null){
      img = item.avatar_url
    }
    const data = {
      id: item.id,
      name: item.login,
      type: 'https://image.flaticon.com/icons/png/512/25/25231.png',
      img: img
    }
    result.push(data) 
  });

  //return all results
  res.json(result)
});

//starting the server 
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});