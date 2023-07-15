function sandwichOrder(...items: string[]) {
  console.log("Sandwich Order:");
  console.log("---------------");
  
  for (let item of items) {
    console.log(item);
  }
  
  console.log("---------------");
}

// Example function calls
sandwichOrder("Bread", "Ham", "Cheese", "Lettuce", "Tomato");
sandwichOrder("Bread", "Turkey", "Swiss Cheese");
sandwichOrder("Bread", "Peanut Butter", "Jelly");
