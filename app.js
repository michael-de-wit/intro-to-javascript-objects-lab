//Cross-exercise
const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

// console.dir(pokemon, {maxArrayLength: null})

//Exercise 1
// Extract the name of Pokemon 59
pokemon59Object = pokemon[58]; // Extract the object for Pokemon 59, i.e. index 58
// console.log(pokemon59Object)
pokemon59Name = pokemon59Object.name // Create var for the name of Pokemon 59
console.log(pokemon59Name) // Log name of Pokemon 59: Arcanine

//Exercise 2
console.log(`initial game state: `, game)

//Exercise 3
/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = `Medium`
console.log(game)

//Exercise 4
/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

bulbasaurObject = pokemon[0] // choose Bulbasar
// console.log(bulbasaurObject)
game.party.push(bulbasaurObject)
// console.log(game)

//Exercise 5
/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

function addPartyMember(pokemonNumber) { // function to add a pokemon to the party; takes the Pokemon's number as param
    pokemonIndex = pokemonNumber - 1
    partyMemberObject = pokemon[pokemonIndex]
    game.party.push(partyMemberObject)
}

addPartyMember(18) // Add Pidgeot to party
addPartyMember(65) // Add Alakazam to party
addPartyMember(149) // Add Dragonite to party
console.log(game)

//Exercise 6
/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

let gymsArray = game.gyms //isolate the gyms array
// console.log(gymsArray)

for(let index = 0; index < gymsArray.length; index++) { //go through the gyms array
    // console.log(gymsArray[index])
    let currentGym = gymsArray[index] //isolate a given gym
    if(currentGym.difficulty <= 3) { //check if the gym difficulty is 3 or lower
        // console.log(gymsArray[index]) 
        currentGym.completed = true // complete the gym
    }
}

console.log(`game state as of exercise 6: `, game)

//Exercise 7
/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

// console.log(game)
let partyArray = game.party //Extract the party array
let evolveToPokemonObject = pokemon[1] // create var with Ivysaur (number 2, index 1), Bulbasaur's evolve-to Pokemon
// console.log(evolveToPokemonObject)
partyArray.splice(0,1,evolveToPokemonObject) // replace Bulbasaur with Ivysaur
console.log('\n\n state as of E7: \n\n',game)

//Exercise 8
/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

// console.log(partyArray)

console.log(`\nE8 party Pokemon list:`)

for(index = 0; index < partyArray.length; index++) { // Go through the partyArray
    // console.log(partyArray[index])
    let partyPokemonObject = partyArray[index] // Isolate each party Pokemon object
    let partyPokemonName = partyPokemonObject.name // Extract the name of the party Pokemon
    console.log(partyPokemonName) // Log the party Pokemon name
}

//Exercise 9
/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

// console.log(pokemon)

console.log(`\n\nE9 start Pokemon list: \n`)

for(index = 0; index < pokemon.length; index++) { // Go through the Pokemon array
    let pokemonObject = pokemon[index] // Isolate each Pokemon object
    pokemonStarterStatus = pokemonObject.starter // Extract the starter status of each Pokemon

    if(pokemonStarterStatus === true) { // Check if the starter status is true; act if true
        let pokemonName = pokemonObject.name // Extract the starter Pokemon name
        console.log(pokemonName) // log the starter Pokemon name
    }

    // console.log(pokemonStarterStatus) 
}

//Exercise 10
/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

// console.log(game)

function extractPokemonObj(pokemonNumber) { // function to extract the Pokemon object given the Pokemon number as the param
    pokemonIndex = pokemonNumber - 1 // convert Pokemon number to its index in the pokemon array
    pokemonObjExtract = pokemon[pokemonIndex] // extract the given Pokemon object
    return pokemonObjExtract // return the given Pokemon object
}

// console.log(extractPokemonObj(150))

game.catchPokemon = function(pokemonObj) { // create the catchPokemon method in the game object
    game.party.push(pokemonObj) // add the pokemon object to the game party array

}

console.log(`\n\nstate as of e10:\n`)

extractedPokemonObjGlobal = extractPokemonObj(150) // get the object for 150 Mewtwo
// console.log(extractedPokemonObjGlobal)
game.catchPokemon(extractedPokemonObjGlobal) // add 150 Mewtwo to the game party array
console.log(game)

// game.catchPokemon(150)

//Exercise 11
/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

function extractPokemonObj(pokemonNumber) { // function to extract the Pokemon object given the Pokemon number as the param
    pokemonIndex = pokemonNumber - 1 // convert Pokemon number to its index in the pokemon array
    pokemonObjExtract = pokemon[pokemonIndex] // extract the given Pokemon object
    return pokemonObjExtract // return the given Pokemon object
}

// console.log(extractPokemonObj(150))

game.catchPokemon = function(pokemonObj) { // create the catchPokemon method in the game object
    game.party.push(pokemonObj) // add the pokemon object to the game party array
    // pokeBallQuantity = game.items[1].quantity // extract the current value for quantity of pokeballs
    // pokeBallQuantity = pokeBallQuantity - 1 // reduce the number of pokeballs by 1
    game.items[1].quantity = game.items[1].quantity - 1

    // console.log('CHECK', pokeBallQuantity)
}

// console.log(`\n\nstate as of e10:\n`)

extractedPokemonObjGlobal = extractPokemonObj(150) // get the object for 150 Mewtwo
// console.log(extractedPokemonObjGlobal)
game.catchPokemon(extractedPokemonObjGlobal) // add 150 Mewtwo to the game party array
console.log(`\n\nState as of e11: `, game)

//Exercise 12
/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

function completeGymsByDifficulty(difficultyLevel) { //funtion to flip the gym difficulty to true for gyms at or below the difficultyLevel param
    let gymsArray = game.gyms //isolate the gyms array
    // console.log(gymsArray)

    for(let index = 0; index < gymsArray.length; index++) { //go through the gyms array
    // console.log(gymsArray[index])
    let currentGym = gymsArray[index] //isolate a given gym
    if(currentGym.difficulty <= difficultyLevel) { //check if the gym difficulty is 3 or lower
        // console.log(gymsArray[index]) 
        currentGym.completed = true // complete the gym
    }
}
}

completeGymsByDifficulty(5) // complete gyms 'with a difficulty below 6'
console.log(`\n\nstate as of e12:\n`, game)

//Exercise 13
/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

const gymTally = { // create the gymTally object which keeps count of game 'gym completes' are true-complete vs. false-incomplete
    completed: 0, // i.e. gym completed: true
    incomplete: 0 // i.e. gym completed: false
}

game.gymStatus = function () { // create gymStatus method in game object
    // console.log(game.gyms)
    for(index = 0; index < game.gyms.length; index++) { // go through the gyms array
        gymObject = game.gyms[index] // Isolate a given gym object
        // console.log(gymObject.completed) 

        if (gymObject.completed === true) { // if the gym HAS been completed
            gymTally.completed = gymTally.completed + 1 // increment the completed value in the gymTally object
        } 
        if (gymObject.completed === false) { // if the gym HAS NOT been completed
            gymTally.incomplete = gymTally.incomplete + 1 // increment the incomplete value in the gymTally object
        }
    }
}

game.gymStatus() // call the gymStatus method to populate the gymTally object
console.log('\n\ne13 gymTally results', gymTally) // View the resultant gymTally object 

//Exercise 14