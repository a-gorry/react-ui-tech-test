const express = require('express');
const bodyParser = require('body-parser');
const buildings = require('./buildingData');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/buildings', (req, res) => {
  res.send(buildings);
});
app.post('/api/contact', (req, res) => {
  //do something
});

app.listen(port, () => console.log(`Listening on port ${port}`));