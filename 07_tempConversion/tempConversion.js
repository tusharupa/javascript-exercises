const ftoc = function(temp) {
let result=(temp-32)*5/9;
return Math.round(result*10) / 10 ;

};

const ctof = function(temp) {
let result = 9*temp/5 + 32;
return Math.round(result*10) / 10 ;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
