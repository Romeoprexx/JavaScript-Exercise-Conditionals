
let number = 2;
if (number % 2 === 0) {
   console.log("Even");
}
 else {
   console.log("Odd");
 }



/* * Programming Quiz: Musical Groups */ /* 
* QUIZ REQUIREMENTS * 
1. Your code should have avariable`musicians`,and include`if...elseif...else`conditional statement * 
2. Your code should produce the expected output, as mentioned above. Read each condition carefully.
*/

let musicians = 31;
if ( musicians <=0 ) {
  console.log("not a group");
}
else if ( musicians === 1) {
    console.log("solo");
}
else if ( musicians === 2) {
    console.log("duet");
}
else if ( musicians === 3) {
    console.log("trio");
}
 else if ( musicians === 4) {
    console.log("quartet") ;
 }
 else {
     console.log("this is a large group");
}





/* 3. * Programming Quiz: Murder Mystery
* QUIZ REQUIREMENTS * 
1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved` * 
2. Your code should include a conditional statement * 
3. The variable `suspect` should use one of the provided values * 
4. The variable `weapon` should be based on the `room` * 
5. Your code should produce the expected output: __________ did it in the __________ with the __________! * Example: Mr. Parkes did it in the dining room with the knife! * * 
6. For unmatching combination of the suspect and the room, print nothing on the console 
*/



var room = "dinning room";
var suspect = "Mr. Parkes";
var weapon = "";
var solved = false;

if ( room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison"; solved = true;
}
else if ( room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy"; solved = true;
}
else if ( room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick"; solved = true;
}
else if ( room === "dinning room" && suspect === "Mr. Parkes") {
    weapon = "knife"; solved = true;
}
else {
    console.log("What a mystery !, because no one did it")
}
if ( solved ) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + " !");
}




/* * Programming Quiz - Checking Your Balance */
/* * QUIZ REQUIREMENTS * 
1. Your code should have the variables `balance`, `checkBalance`, `isActive` * 
2. Your code should include an `if...else` conditional statement * 
3. Your code should produce the expected output * 
4. Your code should not be empty * 
5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
*/ 


let balance = 999.679;
let checkBalance = true;
let isActive = false;
balance.toFixed(2);


if (!checkBalance) {
    console.log("Thank you. Have a nice day!");
}
else if (isActive && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + "." );
}
else if (!isActive) {
    console.log("Your account is no longer active");
}
else if (balance === 0) {
    console.log("Your account is empty");
}
else if (balance < 0) {
    console.log("Your account is negative. Please contact bank.")
}






/*
* Programming Quiz: Ice Cream
6
*
* Write a single if statement that logs out the message:
*
* "I'd like two scoops of __________ ice cream in a __________ with __________."
*
* ...only if:
*   - flavor is "vanilla" or "chocolate"
*   - vessel is "cone" or "bowl"
*   - toppings is "sprinkles" or "peanuts"
*
* We're only testing the if statement and your boolean operators.
* It's okay if the output string doesn't match exactly.
*/
/*
* QUIZ REQUIREMENTS
* 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
* 2. Your code should have an `if` statement
* 3. Your code should use logical expressions
* 4. Your code should work with
*  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
*  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
*  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
*  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
*
*  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
7
*  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
*  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
*  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
*
* 5. Your code should NOT log (print) anything when
*  - the flavor is something other than "vanilla" or "chocolate"
*  - the vessel is something other than "cone" or "bowl"
*  - the toppings is something other than "sprinkles" or "peanuts"
*
* 6. Your code should not be empty
*/


let flavor = "chocolate";
let vessel = "bowl";
let toppings = "sprinkles";

if (( flavor === "chocolate"|| flavor === "vannilla") && (vessel === "cone"|| vessel === "bowl") && (toppings === "peanuts"|| toppings === "sprinkles")) {
   console.log("i'd like two scoop of " + flavor + " ice cream in a " + vessel + " with " + toppings);
}





/*
* Programming Quiz: What do I Wear?
*
* Using if/else statements, create a seriesoflogicalexpressionsthatlogsthesizeofat-shirt based on the measurements of:
*   - shirtWidth
*   - shirtLength
*   - shirtSleeve
*
* Use the chart above to print out one of the following correct values:
*   - S, M, L, XL, 2XL, or 3XL
*/
/*
* QUIZ REQUIREMENTS
* 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
* 2. Your code should include an `if...else` conditional statement
* 3. Your code should use logical expressions
10
* 4. Your code should produce the expected output
* 6. Your code should not be empty
* 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
*/



var shirtLength = 30;
var shirtSleeve = 8.71;
var shirtWidth = 23;

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("S");
}
else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    console.log("M");
}
else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    console.log("L");
}
else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    console.log("XL");
}
else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    console.log("2XL");
}
else if ((shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13)) {
    console.log("3XL");
}
else {
    console.log("N/A");
}




/*
* Programming Quiz - Navigating the Food Chain
*
* Use a series of ternary operator to set the category to one of the following:
*   - "herbivore" if an animal eats plants
*   - "carnivore" if an animal eats animals
*   - "omnivore" if an animal eats plants and animals
*   - undefined if an animal doesn't eat plants or animals
*
* Notes
*   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
*   - `if` statements aren't allowed ;-)
12
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have the variables `eatsPlants`, `eatsAnimals`
* - Your code should include ternary statements. Do not use if....else statement.
* - Your code should produce the expected output
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/



var eatsPlants = false;
var eatsAnimals = true;

let category = eatsPlants && eatsAnimals ? "omnivore" :  eatsPlants ? "herbivore" : eatsAnimals ? "carnivore" : undefined
console.log(category);






/*
* Programming Quiz: Back to School
*
* Write a switch statement to set the average salary of a person based on their type of completed education.
*
*/
14
/*
* QUIZ REQUIREMENTS
* - Your code should have the variables `education`, and `salary`
* - Your code should include a switch statement
* - Your code should produce the expected output
* - Your code should not be empty
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/




var education = "no high school diploma";
let salary = 0;

switch (education) {
    case "no high school diploma": salary = 25636;
        
        break;

    case "a high school diploma": salary = 35256;
        break; 
    case "an Associate's degree": salary = 41496;
        break;
    case "a Bachelor's degree": salary = 59124;
        break;
    case "a Master's degree": salary = 69732;
        break;
    case "a Professional degree": salary = 89060;
        break;
    case "a Doctoral degree": salary = 84596;
        break;
}

console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year");

