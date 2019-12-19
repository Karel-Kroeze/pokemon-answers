// pokemon-battle does not expose a function that returns a sane, computer interpretable result (only a combat log, which we could parse, but screw that).
// // recreate a simple simulator from the building blocks, and return a saner set of results.
// const Battle = require("pokemon-battle/src/battle")
// const Trainer = require("pokemon-battle/src/trainer")
// const Pokemon = require("pokemon-battle/src/pokemon")

// simpler approach: string search!
const pokemon = require("pokemon-battle")

function battle( friend, foe ) {
    let combat_log = pokemon.battle({ trainer:"friend", pokemon: [friend] },
                                    { trainer: "foe", pokemon: [foe] } )
    let won = combat_log.includes( "Friend defeated foe!" ) // yay for simplicity.

    return {
        won,
        winner: won ? friend : foe,
        log: combat_log
    }
}

module.exports = battle;