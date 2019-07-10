const express = require('express');
const app = express();

const dogs = [
  { name:'spot', age: 5, weight: '20lbs' },
  { name:'spot', age: 5, weight: '20lbs' },
  { name:'spot', age: 5, weight: '20lbs' }
];

app.use(express.static('./public'));
app.get('/api/v1/dogs', (reg, res) => {
  res.send(dogs);
});

module.exports = app;

