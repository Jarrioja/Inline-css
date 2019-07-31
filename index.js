var fs = require('fs');
var juice = require('juice'); 

var source = fs.readFileSync('./html/one_column.html', 'utf-8');
var sourceCss = fs.readFileSync('./css/style.css', 'utf-8');


var inlinecss = juice("<style>"+sourceCss+"</style>"+source, {removeStyleTags: true, preserveMediaQueries: true});

fs.appendFile('./build/one_column.html',inlinecss, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  }); 