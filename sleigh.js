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