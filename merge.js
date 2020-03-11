var list = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));
function mergeSort(list) {
    if (list.length === 1) {
    return list;
    }
    var listA = mergeSort(list.slice(0, list.length / 2));
    var listB = mergeSort(list.slice(list.length / 2));
    var i = 0;
    var j = 0;
    var newList = [];
    while (i < listA.length || j < listB.length) {
    if (i !== listA.length && (listA[i] < listB[j] || j === listB.length)) {
    newList.push(listA[i]);
    i++;
    } else {
    newList.push(listB[j]);
    j++;
    }
    }
    return newList;
    }
    var sorted = mergeSort(list)
    var start = new Date().getTime()
    console.log(sorted);
    var end = new Date().getTime()
    var time = end - start
    console.log("hey this took " + time + " milliseconds")