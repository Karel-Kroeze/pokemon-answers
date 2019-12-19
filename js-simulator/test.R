require(tidyverse)

pokemon <- readr::read_csv("./node_modules/pokemon-battle/data/pokedex/pokedex/data/csv/pokemon.csv") %>%
  filter( id < 1000 )

results <- readr::read_csv("results.csv", col_names = pokemon$identifier,  na = "x" )
pokemon$avg_winrate <- rowMeans( results, na.rm = TRUE )
pokemon$missings <- rowSums( is.na( results ) )

pokemon %>% filter( identifier %in% c("bulbasaur", "charmander", "squirtle" ) )
pokemon %>% filter( missings < 100 ) %>% arrange( -avg_winrate )
