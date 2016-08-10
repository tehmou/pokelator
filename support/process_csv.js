const fs = require('fs');
const csv = require('csv');

var file = fs.readFile('pokemon.csv', (err, data) => {
  csv.parse(data, function (err, data) {
    var list = [];
    for (var i = 1; i < data.length; i++) {
      var item = data[i];
      var id = item[0];
      var name = item[1];
      list.push({
        id: id,
        name: name,
        evolution: {
          avg: item[2],
          min: item[3],
          max: item[4],
          median: item[5],
          deviation: item[6],
        }});
    }
    console.log(list);
  });
});
