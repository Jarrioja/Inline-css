var fs = require('fs');
var juice = require('juice'); 

//var source = fs.readFileSync('./html/external-css.html', 'utf-8');

var inlinecss = juice.juiceFile('./html/external-css.html', {webResources:true, removeStyleTags: true, preserveMediaQueries: true});


fs.appendFile('./html/out-external-css.html',inlinecss, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  }); 
