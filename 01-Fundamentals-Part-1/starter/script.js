let foo = "fun";
var b = 9;

if (true)
    //console.log(b);

    //console.log(true)
    var Mark = {


        "firstName": "Chandan",
        "lastName": "Sharma",
        "isMale": true,
        "age": 34
    }

b = "chandan1"

//chandan = person()
//chandan.firstname = "cyan"
//console.log(typeof b);

// Coding challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
//solution:

Mark = {
    "weight": 78,
    "height": 1.69
}
John = {
    "weight": 92,
    "height": 1.95
}
//const markBMI = Mark.weight / Mark.height ** 2
////const johnBMI = John.weight / John.height ** 2
//const markHigherBMI = markBMI > johnBMI
//console.log(markHigherBMI)
//const addtogether = `I'm ${Mark.weight}`
//console.log(addtogether)

//if (markBMI > johnBMI) {
//console.log("mark has got a higher BMI and his BMI is ", + markBMI.toFixed(2))
////} //else {
/// console.log("John has got a higher BMI and his BMI is ", + johnBMI.toFixed(2))
//}
//const myNumber = Number(prompt("Enter a number"));

//console.log(myNumber)

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

//Solution:
const dolphinAverage = (96 + 200 + 69) / 3
const koalasAverage = (88 + 91 + 110) / 3
console.log(`Average of Dolphin = ${dolphinAverage.toFixed(2)} and 
Average of Koala =${koalasAverage.toFixed(2)}`)
const minimumScore = 100

/*if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
    console.log("Dolphin average is higher")
} else if (dolphinAverage == koalasAverage) {
    console.log("both have same average")
} else if {
    console.log("koala is the winner")
} 
*/
const age = 23
age >= 18 ? console.log("i can drink wine!") :
    console.log("I'm under age!")
let age1 = 36
const age2 = age1 >= 24 ? "wine" : "water"
console.log(age2)

//solution coding challenge 4
//using switch

const bill = 100
//let tip

switch (true) {
    case (bill > 50 && bill < 200):
        //&& bill < 200:
        console.log(`your total tip is ${bill + (0.15 * bill)}`)

        break
    case (bill > 200):
        console.log(`your total bill is ${bill + (0.20 * bill)}`)
        break

}


//functions
function calculator(bill1) {
    var tip = bill1 > 50 && bill1 < 200 ? (bill1 + (0.15 * bill1)) : (bill1 + (0.20 * bill1))
    return tip
}
console.log(calculator(bill))
// expression with arrow function
var tipTop = bill1 => bill1 > 50 && bill1 < 200 ? (bill1 + (0.15 * bill1)) : (bill1 + (0.20 * bill))
console.log(tipTop(bill))
//calculate years left for retirement

const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3)

var yearsUntilRetirement = birthYear1 => 65 - calcAge3(birthYear1)
console.log(yearsUntilRetirement(1992))