/* Instructions Output

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true XO("xooxx") => false XO("ooxXm") => true XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true XO("zzoo") => false */

let newXOArray = [];

let detectXO = (str) => {
  let xCounter = 0;
  let oCounter = 0;

  newXOArray = str.split(" ");

  newXOArray.forEach = (XOelement => {

     if(XOelement === 'x' || XOelement === 'x')
     {
        xCounter++;  
     }
    else if(XOelement === 'o' || XOelement === '0')
    {
        oCounter++;
    }
    else 
    {
       console.log('not x or o.');
    }

  });

  if(xCounter > oCounter)
  {
    console.log(xCounter);
  }
  else if(oCounter > xCounter)
  {
    console.log(oCounter);
  }
  else{
    console.log(xCounter);
  }

}

detectXO('x0oxoxox');

// This solution will solve the problem, but it solves the problem in a way that doesn't suit the language
// This feels like a very C/C++ way to solve this problem does anyone have any tips for refactoring this?