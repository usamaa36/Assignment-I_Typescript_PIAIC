/*
City Names: Write a function called city_country() that 
takes in the name of a city and its country. The function
should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, 
and print the value that’s returned.
*/
function describe_city(city: string , country : string )
{
    console.log(`'${city} , ${country}'`);
}

describe_city("NY","USA");
describe_city("LA","USA");
describe_city("Lahore","Pakistan");