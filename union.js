/*
    Underscorejs union 구현

    union_.union(*arrays)

    Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.

    _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
    => [1, 2, 3, 101, 10]
*/

function ArgumentsCountException(message) { // Arguments 개수 
    this.message = message;
}

const union = (...array) => {

    let result = [];
    let arrOnly = [];
    let check = true;

    try {
        if (!array.length) throw new ArgumentsCountException("The argument does not exist.");
    } catch (e) {
        return [];
    }

    for (let arrVal of array) {
        if (Array.isArray(arrVal)) {
            arrOnly.push(arrVal);
        } else
            continue;
    }

    arrOnly.forEach(item => {
        for (let iVal of item) {
            for (let reVal of result) {
                if (iVal === reVal) {
                    check = false;
                    break;
                } else
                    check = true;
            }

            if (check) {
                result.push(iVal);
            }
        }
    });

    return result;
}

//Test
let result = union([1, 2, 3], ['123'], '12312312', [10, 2, 1, 10], [2, 1], [5, 4, 1], [0]);

console.log(result);



// var _ = require('underscore');
// var union = _.union([1, 2, 3], ['123'], '12312312', [10, 2, 1, 10], [2, 1], [5, 4, 1], [0]);
// console.log(union);
