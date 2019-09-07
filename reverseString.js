/*Given a string, reverse all the words which have odd length. The even length words are not changed.

Examples


Notes

There is exactly one space between each word and no punctuation is used*/

//need array.length variable
//need to use the split function on the whitespace.
//need to use a join function to create result

// Think of join and split as yin and yang to remember how to deal with them

//Complete the solution so that it reverses all of the words within the string passed in.

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

function reverseWords(str)
{
  newArray = [];

  newArray = str.split(" ");
  newArray.reverse();
  str = newArray.join(" ");

  console.log(str);
}

// Much simpler reverse word code posted above ^ 


let reverseOdd = (str) => {

  let newStr = str.split(' ');

  let newArray = newStr.map(word => {

   if(word.length%2 === 0)
   {
      return word;
   }
   else 
   {
      return word.split('').reverse().join('');
   }

});
 return newArray.join(' ');
}

console.log(reverseOdd("Bananas")); // "sananaB"

console.log(reverseOdd("One two three four")); // "enO owt eerht four"

console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
//➞ "Make sure you only reverse words of odd length"