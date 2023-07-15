var employees = ["admin", "IT", "co", "2ic"];
for (var i = 0; i < employees.length; i++) {
    // i is visible here
    if (employees[i] === "admin") {
        console.log("dear admin happy new year and may you remain satisfied with your life");
    }
    else {
        console.log("dear ".concat(employees[i], " happy new year"));
    }
}
