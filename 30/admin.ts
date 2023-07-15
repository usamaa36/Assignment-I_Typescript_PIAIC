let employees: string[] = ["admin", "IT", "co", "2ic"];

for (let i = 0; i < employees.length; i++) {
    // i is visible here
    if (employees[i] === "admin") {
        console.log("dear admin happy new year and may you remain satisfied with your life");
    } else {
      console.log(`dear ${employees[i]} happy new year`);
    }
  }