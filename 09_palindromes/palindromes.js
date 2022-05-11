const palindromes = function (palin) {
    newString=palin.toLowerCase().replace(/[^a-z]/g, "");
    anotherString = newString.split("").reverse().join("");

 if (anotherString==newString)
 {
     return true;
 }
 else
 return false;
};

// Do not edit below this line
module.exports = palindromes;
