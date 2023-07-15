/*
Pizzas: Think of at least three kinds of your favorite pizza.
Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
 For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
the output should consist of three or more lines about the kinds of pizza you like
and then an additional sentence, such as I really love pizza!
*/
var pizzaTypes = ['tikka', 'cheese', 'mexican'];
for (var i = 0; i < pizzaTypes.length; i++) {
    if (pizzaTypes[i] === 'tikka') {
        console.log('It\'s the tikka flavor, mate!');
    }
    else if (pizzaTypes[i] === 'cheese') {
        console.log('It\'s the cheese flavor, mate!');
    }
    else if (pizzaTypes[i] === 'mexican') {
        console.log('It\'s the mexican flavor, mate!');
    }
}
console.log('Pizza is good!\n its very good\n tasty stuff \n love it');
