/*
Favorite Fruit: Make a array of your favorite fruits, and 
then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

let Fruits:string[]=['apple','mango', 'orange'];
if (Fruits.includes('apple')){
    console.log('I really Like Apples')
}

if (Fruits.includes('mango')){
    console.log('I really Like mangoes')
}

if (Fruits.includes('apple')){
    console.log('I really Like oranges')
}
