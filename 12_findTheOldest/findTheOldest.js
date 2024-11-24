const findTheOldest = function(peopleArray) {
    peopleArray.sort((x,y) => calcAge(y) - calcAge(x));
    let len = peopleArray.length;
    return peopleArray.at(0);
};

function calcAge(person) {
  let yearOfBirth = person.yearOfBirth;
  let yearOfDeath = person.yearOfDeath;
  if (yearOfDeath == null) {
      yearOfDeath = new Date().getFullYear();
  }
  person.age = yearOfDeath - yearOfBirth;
  return person.age;
}
// Do not edit below this line
module.exports = findTheOldest;
