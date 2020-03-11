let arr = require('./array1000.js');
function swap(a, i, min) {
    var temp = a[i];
    a[i] = a[min];
    a[min] = temp;
}
function insertionSort(a) {
    for (var i = 0; i < a.length; i++) {
        for (var j = i; j > 0; j--) {
            if (a[j] < a[j - 1]) {
                swap(a, j, j - 1);} 
        else 
        {
        break;
        }
        }
        }
        }    
        var start = new Date().getTime()

        console.log(insertionSort(arr))
        var end = new Date().getTime()
        var time = end - start
        console.log("hey this took " + time + " milliseconds")