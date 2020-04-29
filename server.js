const express = require('express');
const app = express();

const fetch = require('node-fetch')

//settings
app.set('port', process.env.PORT || 3000)

app.use(express.static(__dirname + '/public'));

//routes
app.use('/api/search/', require( './src/routes/search'))

//starting the server 
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});