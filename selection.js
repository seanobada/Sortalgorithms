var a = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));

function swap(a, i ,min){
    var temp = a[i];
    a[i] = a[i+1];
    a[i+1] = temp;
}



function selectionSort(list) {
    var swapped;
    do{
        swapped = false;
    for (var i = 0; i < list.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < list.length; j++) {
    if (list[j] < list[min]) {
    min = j;
    swapped = true;
    }
    }
    if (min !== i) {
    swap(list, i, min);
    }
    }
    }while (swapped);
    }
    var start = new Date().getTime()
    selectionSort(a);
    console.log(a);
    var end = new Date().getTime()
    var time = end - start
    console.log("hey this took " + time + " milliseconds")