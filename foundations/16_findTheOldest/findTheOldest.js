const findTheOldest = function(people) {
    return people.reduce((obj,value) => {
        if ((obj.yearOfDeath - obj.yearOfBirth) >= (value.yearOfDeath - value.yearOfBirth)){
            obj.name = value.name
        }
        return obj.name;
    },{name: "Shantanu",yearOfBirth:2000,yearOfDeath:2000})
};

// Do not edit below this line
module.exports = findTheOldest;
