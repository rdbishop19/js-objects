console.log('I am NOT an object!');
/* 
Lightning Exercise 1: Given two options of data structures - array or object - 
which should you use? You need to represent a red 2015 Ford Mustang in your code.
 */
const myCar = {
	make: 'Ford',
	model: 'Mustang',
	year: "2015",
	color: 'Red'
};
console.log(myCar);

/* 
Lightning Exercise 2: Given two options of data structures - array or object - 
which should you use? You need to store list of animal names in a shelter. 
The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".
 */
const animalList = [ 'Kippers', 'Jack', 'Gypsy', 'Angus', 'Seymour Bouts', 'Sharky' ];
console.log(animalList);

/* 
Lightning Exercise 3: Define an object for four family members, 
and put each object in an array named familyMembers. 
Each family member object that you create should have the same keys on them, 
but the values will be different.
 */

const familyMember1 = {
	firstName: 'Jim',
    lastName: 'Halpert',
    fullName: function() {
		return this.firstName + ' ' + this.lastName;
	},
	age: 38
};

const familyMember2 = {
	firstName: 'Pam',
	lastName: 'Halpert',
	fullName: function() {
		return this.firstName + ' ' + this.lastName;
	},
	age: 37
};

const familyMember3 = {
	firstName: 'Ceecee',
	lastName: 'Halpert',
	fullName: function() {
		return this.firstName + ' ' + this.lastName;
	},
	age: 5
};

const familyMember4 = {
	firstName: 'Phillip',
	lastName: 'Halpert',
	fullName: function() {
		return this.firstName + ' ' + this.lastName;
	},
	age: 3
};

const familyMembers = [familyMember1, familyMember2, familyMember3, familyMember4];
console.log(familyMembers);

/* 
Lightning Exercise: Given the object below, output each of the values 
to the console using dot notation.
 */
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
console.log(`Wardrobe height is ${wardrobe.height} inches.`);
console.log(`Wardrobe manufacturer is ${wardrobe.manufacturer}.`);
console.log("Wardrobe contents:", wardrobe.contents);
console.log(`Wardrobe depth x width is ${wardrobe.depth} inches x ${wardrobe.width} inches.`);

/* 
Time to practice dot and square-bracket notation. Use the 
following object to complete the lightning exercises below.
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
}

/* 
Lightning Exercises 1: Use dot notation to output all of the dimensions 
of the Empire State Building to the console.
 */


/* 
Lightning Exercises 2: Use square bracket notation to output the remaining 
5 properties to the console. Create 5 variables first with the keys as their values. 
Use those variables to look up the values. 
*/

const addressKey = "address"
const constructionKey = "constructionDate"
const ownerKey = "owner"
const costKey = "cost"
const architectKey = "architect"

const outputStr = `The Empire State Building is at ${empireStateBuilding[addressKey]}. 
It was built in ${empireStateBuilding[constructionKey]} by ${empireStateBuilding[architectKey]}.
It cost ${empireStateBuilding[costKey]} and is owned by ${empireStateBuilding[ownerKey]}.`

console.log(outputStr)