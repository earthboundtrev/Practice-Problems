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

        else if(fruitKey1 !== fruitKey2)
        {
            console.log(fruitKey1);
            console.log("break between key 1 and 2 ----------------")
            console.log(fruitKey2);
        }

    });

});

// I'm trying to create a for loop that will traverse through each of the nodes, and have
// them remove content that is duplicated. I think the way to do that is to call a function
// and the possibly call another function, and then do the for loop afterward.
// this thing isn't working because logic is completely wrong
// I'm pretty sure the for loop doesn't match up with the output that JavaScript expects


let newDifferentArray = [];

newDifferentArray = differentKeys.filter(element => {

    for(i = 0; i < similiarKeys.length; i++)
    {
        if(similiarKeys[i] !== element)
        {
            continue
        }
        else
        {
            return differentKeys.pop(element);
        }
    }
});

console.log(similiarKeys);
console.log(newDifferentArray);