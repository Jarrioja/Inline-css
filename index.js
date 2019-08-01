var fs = require('fs');
var juice = require('juice');

/*CSS*/
var sourceCss = fs.readFileSync('./css/style.css', 'utf-8');

/*HTML*/
var oneColumn = fs.readFileSync('./html/one_column.html', 'utf-8');
var generalInfo = fs.readFileSync('./html/general_info.html', 'utf-8');
var summary = fs.readFileSync('./html/summary.html', 'utf-8');

/** ADD STYLE TAG & CONCAT TO THE FILE */
var inlineCssOneColumn = juice('<style>' + sourceCss + '</style>' + oneColumn, {
	removeStyleTags: true,
	preserveMediaQueries: true,
});
var inlineCssGeneralInfo = juice(
	'<style>' + sourceCss + '</style>' + generalInfo,
	{ removeStyleTags: true, preserveMediaQueries: true },
);
var inlineCssSummary = juice('<style>' + sourceCss + '</style>' + summary, {
	removeStyleTags: true,
	preserveMediaQueries: true,
});

/** CREATE A INLINE-CSS HTML FILE */
fs.writeFile('./build/one_column.html', inlineCssOneColumn, function(err) {
	if (err) throw err;
	console.log('File is created successfully in ./build/one_column.html');
});

fs.writeFile('./build/general_info.html', inlineCssGeneralInfo, function(err) {
	if (err) throw err;
	console.log('File is created successfully in ./build/general_info.html');
});

fs.writeFile('./build/summary.html', inlineCssSummary, function(err) {
	if (err) throw err;
	console.log('File is created successfully in ./build/summary.html');
});
