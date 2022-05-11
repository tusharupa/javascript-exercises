const sumAll = function(initialValue,finalValue) {
let sum=0;
if(initialValue < 0 || finalValue < 0 )
return 'ERROR';
else{
if(Number.isInteger(initialValue) && Number.isInteger(finalValue))
{
    if(initialValue>finalValue)
    {
        let temp=initialValue;
        initialValue=finalValue;
        finalValue=temp;
    }
while(initialValue<=finalValue)
{
    sum+=initialValue;
    initialValue++;
}
return sum;
}
else
return 'ERROR';
};
};

// Do not edit below this line
module.exports = sumAll;
