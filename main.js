//Variables

// Variable holds the age of the Human who wants to learn how old they are in "Dog Years"
let myAge = 29

//Variable accounts for the early years of a dog's life. The first two years of life count as 10.5 dog years each.
let earlyYears = 2
earlyYears *= 10.5

//Variable accunts for the later years of  life when the aging rate slows from 10.5 to 4 dog years each.
let laterYears = myAge - 2
laterYears *= 4

//Final Conversion of Human to Dog Years
let myAgeInDogYears = earlyYears + laterYears

//Name of the Huaman user
let myName = "Jane".toLowerCase()

//Presentation of age conversion
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
