function createCar(manufacturer, model) {
    var kwargs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        kwargs[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, kwargs_1 = kwargs; _a < kwargs_1.length; _a++) {
        var _b = kwargs_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var car = createCar("Tesla", "Model S", color = "red", optional_feature = "Autopilot");
console.log(car);
