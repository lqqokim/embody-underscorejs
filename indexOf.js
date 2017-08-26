/*
    Underscorejs indexOf 구현

    indexOf_.indexOf(array, value, [isSorted]) 
    
    Returns the index at which value can be found in the array, or -1 if value is not present in the array. 
    If you're working with a large array, and you know that the array is already sorted, pass true for 
    isSorted to use a faster binary search ... or, pass a number as the third argument in order to look 
    for the first matching value in the array after the given index.

    _.indexOf([1, 2, 3], 2);
    => 1

*/

function ArgumentCountException(message) {
    this.message = message;
}

function ArgumentTypeException(message) {
    this.message = message;
}

function arrayInValueCheck(list, value) {

    for (var checkVal of list) {
        if (checkVal === value) {
            return true;
        }
    }
}

var indexOf = function (list, value) {

    try {
        if (!arguments) throw new ArgumentCountException("arguments가 존재하지 않습니다.");
        else if (arguments.length === 1) throw new ArgumentCountException("arguments의 개수가 맞지 않습니다.");
        else
            if (!Array.isArray(list)) throw new ArgumentTypeException("list가 array가 아닙니다.");
            else if (!arrayInValueCheck(list, value)) throw new ArgumentTypeException("value가 list안에 존재하지 않습니다.")
    } catch (exception) {
        console.log(exception.message);
        return -1;
    }

    var index = 0;
    for (var listVal of list) {
        if (listVal === value) {
            break;
        }
        index++;
    }
    return index;
}


//Test
const array = [7, '2', 3, 4, 5, 1];
var result = indexOf(array, 1);
console.log(result);