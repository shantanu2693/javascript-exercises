const reverseString = function(str) {
    let finalString = []
    for (let i=str.length-1;i>=0;i--){
      finalString.push(str[i])
    }
    return finalString.join("")
};

// Do not edit below this line
module.exports = reverseString;
