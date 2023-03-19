const findTheOldest = function(people) {

    // In case yearOfDeath is missing, adding current date as yearOfDeath, so there can be a calculation of current age of a living person
    const calculationList = [];
    people.forEach(person => {
        if (!person.hasOwnProperty("yearOfDeath")) {
            person["yearOfDeath"] = (new Date()).getFullYear();
        }
        calculationList.push(person);        
    });

    const sortedPeople = calculationList.sort(function(personA, personB) {
        if (personA.yearOfDeath - personA.yearOfBirth > personB.yearOfDeath - personB.yearOfBirth) {
            return -1;
        } else {
            return 1;
        };
    });

    return sortedPeople[0];
};



// Do not edit below this line
module.exports = findTheOldest;
