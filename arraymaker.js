var fs = require( 'fs' )
function writeToFile(value1) {
fs.appendFileSync( './array5000.csv' ,value1+ "," + "\n" )
}

let i = Array.from({length: 5000}, ()=> Math.floor(Math.random() * 5000))
console.log(i)

writeToFile(i)