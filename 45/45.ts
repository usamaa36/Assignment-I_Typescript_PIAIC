function createCar(manufacturer: string, model: string, ...kwargs: any[]): {
    manufacturer: string;
    model: string;
    color?: string;
    optional_feature?: string;
  } {
    const car = {
      manufacturer,
      model,
    };
    for (const [key, value] of kwargs) {
      car[key] = value;
    }
    return car;
  }
  
  const car = createCar("Tesla", "Model S", color="red", optional_feature="Autopilot");
  
  console.log(car);
  