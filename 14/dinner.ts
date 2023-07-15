let invitees: string[] = ['rabail', 'sana', 'hamza', 'ghana'];
console.log(`${invitees[0]} you are invited to the dinner`);
console.log(`${invitees[1]} you are invited to the dinner`);
console.log(`${invitees[2]} you are invited to the dinner`);
console.log(`${invitees[3]} you are invited to the dinner`);
console.log(`${invitees[0]} flight was cancelled so she won't be able to make it`);

let sub: string = 'mustafa';
invitees[0] = sub; // Replacing the entry at index 0 with 'mustafa'

console.log(`${invitees[0]} you are invited to the dinner`);
console.log(`${invitees[1]} you are invited to the dinner`);
console.log(`${invitees[2]} you are invited to the dinner`);
console.log(`${invitees[3]} you are invited to the dinner`);

console.log("ladies and gentlemen, we are inviting three more guests");
invitees.push('rahema');
invitees.push('sheeba');
invitees.push('saad');


console.log(`${invitees[0]} you are invited to the dinner`);
console.log(`${invitees[1]} you are invited to the dinner`);
console.log(`${invitees[2]} you are invited to the dinner`);
console.log(`${invitees[3]} you are invited to the dinner`);
console.log(`${invitees[4]} you are invited to the dinner`);
console.log(`${invitees[5]} you are invited to the dinner`);
console.log(`${invitees[6]} you are invited to the dinner`);

console.log("We have found a bigger table");
console.log(invitees);

invitees.unshift('fatima');
let newEntry: string = 'momo';
invitees.splice(3,0,newEntry);
console.log(invitees);

// Now inviting them again 

console.log(`${invitees[0]},${invitees[1]},${invitees[2]},${invitees[3]},${invitees[4]},${invitees[5]},${invitees[6]},${invitees[7]} you are invited to the dinner`);

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

/* #scenario 1  Start with your program from Exercise 16. 
Add a new line that prints a message saying that you can invite only two people for dinner
*/
console.log('Due to the table issue,i can only invite two guests');
/*
#scenario 2
Start with your program from Exercise 16. Add a new line that prints a message saying 
that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print a message to that person letting them 
 know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to 
make sure you actually have an empty list at the end of your program.
*/

while (invitees.length > 2) {
    let popOut = invitees.pop();
    console.log(`${popOut}, Sorry mate you are not welcome.`);
}

console.log(`You are still invited to dinner: ${invitees[0]} , ${invitees[1]}`);
while (invitees.length > 0) {
    invitees.pop();
}
console.log(invitees);


