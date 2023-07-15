/*
Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a
 sentence such as Any of these animals would make a great pet!
*/
var animalTypes = ['dog', 'cat', 'mouse'];
for (var i = 0; i < animalTypes.length; i++) {
    if (animalTypes[i] === 'dog') {
        console.log('It\'s a dog, mate!');
    }
    else if (animalTypes[i] === 'cheese') {
        console.log('It\'s a cat, mate!');
    }
    else if (animalTypes[i] === 'mouse') {
        console.log('It\'s a mouse, mate!');
    }
}
console.log('animals are good!\n its very good\n good stuff \n love it');
