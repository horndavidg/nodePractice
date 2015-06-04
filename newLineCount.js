// readFileSync() VERSION!

// var fs = require('fs');
// // brings in the fs module
// var file = process.argv[2];
// // the file that we want to do a line count on

// var contents = fs.readFileSync(file).toString();
// // pulling the contents of the named file and making them into a string

// // console.log(contents.toString());

// var num = contents.split('\n');
// // splitting string into seperate array elements on the line breaks


// console.log(num.length - 1);

/////////////////////////////////////////////////////////////////////

// readFile() VERSION!


var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, function(err, data){
    var num = data.toString().split('\n');
    console.log(num.length - 1);
    //console.log(data.toString())
});