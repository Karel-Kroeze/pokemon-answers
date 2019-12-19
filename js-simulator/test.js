const battle = require("./index")

const n_pokemon = 721               // there appear to be 721 'normal' pokemon in this generation
const n_iterations = 10             // 10 battles between each pair of pokemon

// set up results
const results = [];
for ( let i = 0; i < n_pokemon; i++ ){
    results[i] = []
    for ( let j = 0; j < n_pokemon; j++ ){
        results[i][j] = 0;
    }
}

// start that sim!
for ( let friend = 0; friend < n_pokemon; friend++ ){
    results[friend][friend] = 1
    for ( let foe = 1; foe < n_pokemon; foe++ ){
        if ( friend == foe ) continue;
        let wins = 0;
        try {
            for ( let i = 0; i < n_iterations; i++ ){
                result = battle( friend + 1, foe + 1 ) // offset for zero based indexing
                if ( result.won ) wins++
            }
            
            let winrate = wins / n_iterations
            results[friend][foe] = winrate
            results[foe][friend] = 1 - winrate
        } catch (err) {
            console.error(`Error in battle(${friend},${foe}): ${err}`)
            results[friend][foe] = 'x'
            results[foe][friend] = 'x'
        }
    }
}

// create csv string
let string = '';
for( let i = 0; i < n_pokemon; i++ ){
    string += results[i].join(",") + "\r\n";
}

// write it out
const fs = require("fs")
fs.writeFileSync( "./results.csv", string, "utf8" )
