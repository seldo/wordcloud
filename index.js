var csv = require('csv-parser')
var fs = require('fs')
 
fs.createReadStream('keywords.csv')
  .pipe(csv())
  .on('data', function(data) {
	var out = ''
	// scale it down. The ratio stays the same.
	for(var i = 0; i < data.count/1000; i++) {
		out += data.keyword + " "
	}
	console.log(out)
  })