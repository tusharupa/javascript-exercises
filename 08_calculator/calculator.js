const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arraySum) {
  let add=0;
	for(let i=0;i<arraySum.length;i++)
  {
    add+=arraySum[i];
  }
  return add;
};

const multiply = function(multi) {
let result=1;
for(let i=0;i<multi.length;i++)
{
result=result*multi[i];
}
return result;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  let result = 1;
  if(num==0)
  return 1;
  else
  {
  while(num>0)
  {
    result = result * num;
    num--;
  }
  return result;
}
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
