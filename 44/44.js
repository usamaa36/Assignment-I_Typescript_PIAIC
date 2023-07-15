function sandwichOrder() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    console.log("---------------");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
    console.log("---------------");
}
// Example function calls
sandwichOrder("Bread", "Ham", "Cheese", "Lettuce", "Tomato");
sandwichOrder("Bread", "Turkey", "Swiss Cheese");
sandwichOrder("Bread", "Peanut Butter", "Jelly");
