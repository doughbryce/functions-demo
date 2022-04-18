let anakinHealth = `100`;



// console.log(typeof String(anakinHealth));
// console.log(Boolean(anakinHealth));

// console.log(Number(anakinHealth));
// console.log(+(anakinHealth));
// console.log(parseInt(anakinHealth));

// STRING METHODS
let theWinnerIs =  `anakin is the winner`;
let theNewWinner = theWinnerIs.replace(`n`, `l`);
// console.log(theNewWinner);

let newWinnerAll = theWinnerIs.replaceAll(`n`, `l`);
// console.log(newWinnerAll);

let newWinnerSplit = theWinnerIs.split(``);
// console.log(newWinnerSplit);

let newWinnerJoin = newWinnerSplit.join(`-`).toUpperCase();
// console.log(newWinnerJoin);


// FUNCTIONS
function isAnakinAlive() {
    if (anakinHealth > 0) {
        console.log(`anakin is alive`);
    } else {
        console.log(`anakin is dead`);
    }
}

// isAnakinAlive();

function surpriseAttack(attack) {
    anakinHealth -= attack;
    console.log(anakinHealth);
    isAnakinAlive();
}

// surpriseAttack(26);
// surpriseAttack(26);
// surpriseAttack(26);
// surpriseAttack(26);


function reviveAnakin(health) {
    anakinHealth += health;
    console.log(anakinHealth)
    isAnakinAlive();
}

// reviveAnakin(20);

function greeting(person1, person2) {
    console.log(`${person1} says to ${person2}: hello there`);
}

// greeting(`obiwan kenobi`, `luke skywalker`);

function rollDice() {
    let possibleRolls = [1, 2, 3, 4, 5, 6];
    let randomNumber = Math.floor(Math.random() * possibleRolls.length);
    return possibleRolls[randomNumber];
}

let arrRand = []

for (let i = 0; i < 100; i++) {
    arrRand.push(rollDice());
}

// console.log(arrRand);

function diceMultiplier() {
    let firstRoll = rollDice();
    let secondRoll = rollDice();

    return firstRoll * secondRoll;
}

let multipliedRoll = diceMultiplier();
console.log(multipliedRoll);