/* Instructions Output

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true XO("xooxx") => false XO("ooxXm") => true XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true XO("zzoo") => false */


function XO(str) {
    function XO(str) {

        let xCounter=0;
        let oCounter=0;
        
          for(let i=0; i < str.length; i++)
          {
             if(str[i] === 'x' || str[i] === 'X')
             {
               xCounter=xCounter+1;
             }
             if(str[i] === 'o' || str[i] === 'O')
             {
               oCounter=oCounter+1;
             }
          }
          
          if(xCounter > oCounter)
          {
            return false;
          }
          
          else if(xCounter < oCounter)
          {
            return false;
          }
          else
          {
             return true;
          }
            
    }

// This solution will solve the problem, but it solves the problem in a way that doesn't suit the language
// This feels like a very C/C++ way to solve this problem does anyone have any tips for refactoring this?