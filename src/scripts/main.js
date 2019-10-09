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