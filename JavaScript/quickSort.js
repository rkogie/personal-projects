function quickSort(list) {
    if (list.length <= 1) {
        return list
    }
    var lessThanPivot = [];
    var greaterThanPivot = [];
    var pivot = list[0];

    for (var i = 1; i < list.length; i++) {
        if (list[i] <= pivot) {
            lessThanPivot.push(list[i]);
        } else {
            greaterThanPivot.push(list[i]);
        }
    }
    return quickSort(lessThanPivot).concat(pivot, quickSort(greaterThanPivot));
}

const testValues = [32, 100, 1, 2, 29, 28, 88, 3, 50, 67, 37, 1, 57, 20];

var sorted = quickSort(testValues);
console.log(sorted);


