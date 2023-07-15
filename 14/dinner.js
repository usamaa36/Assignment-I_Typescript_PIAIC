var invitees = ['rabail', 'sana', 'hamza', 'ghana'];
console.log("".concat(invitees[0], " you are invited to the dinner"));
console.log("".concat(invitees[1], " you are invited to the dinner"));
console.log("".concat(invitees[2], " you are invited to the dinner"));
console.log("".concat(invitees[3], " you are invited to the dinner"));
console.log("".concat(invitees[0], " flight was cancelled so she won't be able to make it"));
var sub = 'mustafa';
invitees[0] = sub; // Replacing the entry at index 0 with 'mustafa'
console.log("".concat(invitees[0], " you are invited to the dinner"));
console.log("".concat(invitees[1], " you are invited to the dinner"));
console.log("".concat(invitees[2], " you are invited to the dinner"));
console.log("".concat(invitees[3], " you are invited to the dinner"));
console.log("ladies and gentlemen, we are inviting three more guests");
invitees.push('rahema');
invitees.push('sheeba');
invitees.push('saad');
console.log("".concat(invitees[0], " you are invited to the dinner"));
console.log("".concat(invitees[1], " you are invited to the dinner"));
console.log("".concat(invitees[2], " you are invited to the dinner"));
console.log("".concat(invitees[3], " you are invited to the dinner"));
console.log("".concat(invitees[4], " you are invited to the dinner"));
console.log("".concat(invitees[5], " you are invited to the dinner"));
console.log("".concat(invitees[6], " you are invited to the dinner"));
console.log("We have found a bigger table");
console.log(invitees);
invitees.unshift('fatima');
var newEntry = 'momo';
invitees.splice(3, 0, newEntry);
console.log(invitees);
// Now inviting them again 
console.log("".concat(invitees[0], ",").concat(invitees[1], ",").concat(invitees[2], ",").concat(invitees[3], ",").concat(invitees[4], ",").concat(invitees[5], ",").concat(invitees[6], ",").concat(invitees[7], " you are invited to the dinner"));
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
/* #scenario 1  Start with your program from Exercise 16.
Add a new line that prints a message saying that you can invite only two people for dinner
*/
console.log('Due to the table issue,i can only invite two guests');
/*
#scenario 2
Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
*/
while (invitees.length > 2) {
    var popOut = invitees.pop();
    console.log("".concat(popOut, ", Sorry mate you are not welcome."));
}
console.log("You are still invited to dinner: ".concat(invitees[0], " , ").concat(invitees[1]));
while (invitees.length > 0) {
    invitees.pop();
}
console.log(invitees);
