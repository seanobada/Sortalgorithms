var fs = require( 'fs' )
function writeToFile(value1) {
fs.appendFileSync( './array500000b.csv' ,value1+ "," + "\n" )
}

let i = Array.from({length: 500000}, ()=> Math.floor(Math.random() * 500000))
console.log(i)

writeToFile(i)