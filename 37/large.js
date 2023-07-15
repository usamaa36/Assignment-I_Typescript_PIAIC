/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
 and a shirt of any size with a different message.
*/
function makeLargeShirt(size, tshirtMessage) {
    console.log(" The tshirt is ".concat(size, " and the T-shirt message is ").concat(tshirtMessage));
}
makeLargeShirt("small", 'i love typescript');
makeLargeShirt("medium", 'i love typescript');
makeLargeShirt("large", 'i love typescript');
makeLargeShirt("XL", 'i love typescript');
