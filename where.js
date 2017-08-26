/*
    Underscorejs where 구현

    where_.where(list, properties) 

    Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.

    _.where(listOfPlays, {author: "Shakespeare", year: 1611});
    => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
        {title: "The Tempest", author: "Shakespeare", year: 1611}]  
*/


function ArgumentsCountException(message) { // Arguments 개수 
    this.message = message;
}

function ArgumentsTypeException(message) { // Arguments Type
    this.message = message;
}

var where = function (list, properties) {

    try {
        if (!arguments) // arguments가 존재하지 않을 경우
            throw new ArgumentsCountException("The argument does not exist.");
        else if (arguments.length == 1) { // arguments가 하나만 존재할 경우
            throw new ArgumentsCountException("The number of arguments is not correct.");
        } else { // arguments가 두개다 존재할 경우
            if (!(Array.isArray(list))) { // list가 Array가 아닐경우
                throw new ArgumentsTypeException("List is not an array.");
            } else if (typeof (properties) !== 'object') {// properties가 object가 아닐경우
                throw new ArgumentsTypeException("Properties is not an object.");
            }
        }
    } catch (e) {
        console.log(e);
        if (e instanceof ArgumentsCountException) {
            console.log(e.message);
            return;
        } else if (e instanceof ArgumentsTypeException) {
            console.log(e.message);
            return;
        }
    }

    var result = [];
    for (var [index, value] of list.entries()) { // list의 Object들을 순회한다.
        var arrayVal = [];
        var propCnt = 0;

        for (var key in value) { // 각 object에 대한 key값 추출
            if (value[key] === properties[key]) { // list의 Object value와 properties value가 같은지 비교
                arrayVal.push(properties[key]); // 해당 value를 array에 담는다.
            }
        }

        if (arrayVal.length === Object.keys(properties).length) { // properties의 value 개수와 arrayVal의 사이즈가 같을 경우  
            result.push(list[index]); // 현재 index값에 대한 list의 Object를 array에 담는다.
        }
    }
    return result;
}


//Test
var array = [
    { title: "The Tempest", author: "Shakespeare", year: 1610 },
    { title: "Cymbeline", author: "Shakespeare", year: 1611 },
    { title: "The Tempest", author: "apple", year: 1611 },
    { title: "The Tempest", author: "Shakespeare", year: 1612 },
    { title: "Collections", author: "apple", year: 1611 },
    { title: "Collections", author: "Shakespeare", year: 1612 }
];

var result = where(array, { title: "Collections" });
console.log(result);