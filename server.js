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
  res.json(result)
});

//starting the server 
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});