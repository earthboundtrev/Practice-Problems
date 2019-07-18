
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
          else(xCounter = oCounter)
          {
             return true;
          }
            //code here
    }
    
    // This solution will solve the problem, but it solves the problem in a way that doesn't suit the language
    // This feels like a very C/C++ way to solve this problem does anyone have any tips for refactoring this?

// This solution will solve the problem, but it solves the problem in a way that doesn't suit the language
// This feels like a very C/C++ way to solve this problem does anyone have any tips for refactoring this?