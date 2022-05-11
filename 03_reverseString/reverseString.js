const reverseString = function(word) {
    const len=word.length;
    let result='';
for(let i=0;i<len;i++)
{
result=result+word.charAt(len-i-1);
}
return result;
};

// Do not edit below this line
module.exports = reverseString;
