var fs = require( 'fs' )
function writeToFile(value1,value2) {
fs.appendFileSync( './shellSortTimings.csv' ,value1+ "," +value2+ "\n" )
}
//e.g:
writeToFile( 100 , 0.5 )
writeToFile( 1000 , 1.3 )

var list = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));
function shellSort(arr) {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }
    
            arr[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}
var start = new Date().getTime()
console.log(shellSort(list));
var end = new Date().getTime()
var time = end - start
console.log("hey this took " + time + " milliseconds")
