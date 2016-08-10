const fs = require('fs');
const csv = require('csv');

var file = fs.readFile('pokemon.csv', (err, data) => {
  csv.parse(data, function (err, data) {
    var list = [];
    for (var i = 1; i < data.length; i++) {
      var item = data[i];
      var id = parseInt(item[0], 10);
      var name = item[1];
      list.push({
        id: id,
        name: name,
        evolution: {
          avg:  parseFloat(item[2], 10),
          min:  parseFloat(item[3], 10),
          max:  parseFloat(item[4], 10),
          median: parseFloat(item[5], 10),
          deviation:  parseFloat(item[6], 10),
        }});
    }
    console.log(list);
  });
});
