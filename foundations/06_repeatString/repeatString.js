const repeatString = function(str,num) {
    let finalString = ""
    if (num>= 0){
        for (let i=0;i<num;i++){
            finalString = finalString + str
        }
        return finalString
    }
    else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
