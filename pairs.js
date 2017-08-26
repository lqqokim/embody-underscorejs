/*
    Underscorejs pairs 구현

    pairs_.pairs(object) 

    Convert an object into a list of [key, value] pairs.

    _.pairs({one: 1, two: 2, three: 3});
    => [["one", 1], ["two", 2], ["three", 3]]
*/

let pairs = (obj) => {

    let result = [];

    for (let key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
}

//Test
let test = pairs({
    name: 'moe',
    obj: {
        name: 'shawn',
        arr: [1, 2, 3],
        obj2: {
            obj3: {
                obj4: '1',
                arr2: [2, 1, 3, 4, 5]
            }
        }
    },
    luckyNumbers: [13, 27, 34],
});
console.log(test);

