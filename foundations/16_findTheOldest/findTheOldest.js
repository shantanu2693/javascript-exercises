const findTheOldest = function(people) {
    let minimumAge = 0;
    let obj = {};
    for (pplObject of people){
        if (pplObject.yearOfDeath == undefined){
            pplObject.yearOfDeath = new Date().getFullYear();
        }
        age = pplObject.yearOfDeath - pplObject.yearOfBirth
        if (age > minimumAge){
            minimumAge = age;
            obj = pplObject;
        }
    }
    return obj;
};

// Do not edit below this line
module.exports = findTheOldest;
