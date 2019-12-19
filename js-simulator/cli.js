const battle = require('./index');

// docopt interface
const {docopt} = require("docopt")
const docstring = `JavaScript wrapper for pokemon-battle

Usage:
    pokemon-battle <friend> <foe> [--log]

Friend and foe are the National Pokedex numbers of the respective pokemon. Return value is the number of the winning pokemon.

Options:
    --log   return combat log instead of pokedex number`
const opts = docopt( docstring, {} )

// simulate battle
const friend = Number.parseInt( opts['<friend>'] )
const foe = Number.parseInt( opts['<foe>'] )
const result = battle( friend, foe )

if (opts['--log']) {
    console.log( result.log )
    return result.log
}
console.log( result.winner )
return result.winner