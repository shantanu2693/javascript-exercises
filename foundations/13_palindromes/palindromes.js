const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z0-9]/g, "");
  
    for (let i=0;i<(str.length/2);i++){
        if (str[i] == str[str.length - i - 1]){
            continue;
            //alert (i);
        }
        else{
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
