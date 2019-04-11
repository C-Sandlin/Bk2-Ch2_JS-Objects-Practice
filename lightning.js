/* LIGHTNING EXERCISES
***********************************************
Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.
*/

const mustang = {
    make: "Ford",
    model: "Mustang",
    year: "2015",
    color: "red",
    engine: "V8"
};

const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];


const Colin = {
    age: 27,
    sex: "Male",
    location: "Nashville",
}

const Shelby = {
    age: 26,
    sex: "Female",
    location: "Nashville",
}

const Dee = {
    age: 54,
    sex: "Female",
    location: "Birmingham",
}

const Troy = {
    age: "52",
    sex: "Male",
    location: "Birmingham",
}

const Wes = {
    age: 25,
    sex: "Male",
    location: "Moscow",
}

const Kylie = {
    age: 22,
    sex: "Female",
    location: "Auburn",
}

const familyMembers = ["Colin", "Shelby", "Dee", "Troy", "Wes", "Kylie"];
console.log(familyMembers);

/* Time to practice dot and square-bracket notation. Use the following object to complete the lightning exercises below.

Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.
*/


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
};


console.log("Number of Stories", empireStateBuilding.stories);
console.log("Height", empireStateBuilding.height);
console.log("Number of Ft^2", empireStateBuilding.squareFeet);
console.log("Length from East to West", empireStateBuilding.eastWestLength);
console.log("Length from North to South", empireStateBuilding.northSouthLength);

function Measurements(text, key) {
    console.log(text, key);
}

Measurements("Number of Dogs", empireStateBuilding.cost);

const ESBAddress = empireStateBuilding["address"];
const ESBConstructionDate = empireStateBuilding["constructionDate"];
const ESBCost = empireStateBuilding["cost"];
const ESBOwner = empireStateBuilding["owner"];
const ESBArchitect = empireStateBuilding["architect"];

function ESBInfo(text, key) {
    console.log(text, key);
}

ESBInfo("The address is", ESBAddress);
ESBInfo("It was constructed in", ESBConstructionDate);
ESBInfo("It cost", ESBCost);
ESBInfo("The Owner is", ESBCost);
ESBInfo("The Architect was", ESBArchitect); 

/*  ARRAYS AS VALUES
************************************************
So far, you've been largely accessing string and integer values in an object. However, values can be anything in the JavaScript language - including arrays. Consider this example. 

const kennel = {
    name: "Nashville North Kennels",
    address: "100 Demonbreun Road",
    manager: "Harper Frankstone",
    capacity: 50,
    currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}

/* If you want to display all of the animals that are currently being boarded, you first have to access the array. You can use dot notation to get that value. 

const boardedAnimals = kennel.currentAnimals

for (let i = 0; i < boardedAnimals.length: i++) {
    console.log(boardedAnimals[i])
}

> "Jet"
> "Snickers"
> "Blue"
> "Jacks"
> "Flap"
> "Barnum"

/* If you wanted to pull a single animal form the array, and display it, you can use the index value. To show the fourth animals in that array, you would use the following code. 

console.log(kennel.currentAnimals[3])

> "Jacks"

*/
/*************************************
 Lightning Exercise
************************************/

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

/* Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

Lightning Exercise 2: Output only Andy and Zoe in the console. */

const ptTmInstruct = nashvilleSoftwareSchool.instructors.partTime;
const fllTmInstruct = nashvilleSoftwareSchool.instructors.fullTime;

for (let i = 0; i < ptTmInstruct.length; i++) {
    console.log(ptTmInstruct[i]);
}

for (let i = 0; i < fllTmInstruct.length; i++) {
    console.log(fllTmInstruct[i]);
}

console.log(`${nashvilleSoftwareSchool.instructors.fullTime[4]},`, `${nashvilleSoftwareSchool.instructors.partTime[0]}`);

