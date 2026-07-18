const fibonacci = function(index) {
    let arr = [1,1]
    
    if (parseInt(index) == 0){
        return 0;
    }
    
    else if (parseInt(index) == 1 || parseInt(index) == 2){
        return arr[0];
    }

    else if (parseInt(index) < 0){
        return "OOPS";
    }
    
    else {
        for (let i=2;i<parseInt(index);i++){
        arr.splice(i,0, arr[i-1] + arr[i-2]);
    }
    return arr[index-1]  
    }
};

// Do not edit below this line
module.exports = fibonacci;
