const newCode = {
    apples: 3,
    oranges: 4,
};

const oldCode = {
    apples: 3,
    grapes: 5,
};

let Object1 = Object.keys(newCode);
let Object2 = Object.keys(oldCode);


similiarKeys = ['+'];
differentKeys = ['-'];

Object1.forEach(fruitKey1 => {

    Object2.forEach(fruitKey2 => {

        if(fruitKey1 === fruitKey2)
        {
            similiarKeys.push(fruitKey1 + " ");
        }

        else
        {
            differentKeys.push(fruitKey1);
        }

    });

});

console.log(similiarKeys);
console.log(differentKeys);