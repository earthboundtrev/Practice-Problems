// Silly codewars assignment about checking the parameters of the function

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  
   if(name === "Santa Claus" && password === "Ho Ho Ho!")
   {
      return true;
   }
   else 
   {
     return false;
   }
   
};


// This was praticularly easy to code because they give you exactly what
// the strings are, and they expect you to check for these. Perhaps it can be
// refactored with a filter function?