---
title   : In search of the best Pokémon
author  : Kroeze, Noort, Steinrücke, & Smink
date    : today
---

# Pokémon
Ever since Ash Ketchum left his home in Pallet Town to become a Pokémon Master, aspiring Pokémon trainers from around the world wondered: "_what is the best Pokémon_"? Although Ash’s faithful travel companion Pikachu is perhaps the most famous Pokémon (who is even well-known by those less enthusiastic about the Pokémon franchise), it is almost certainly not the _best_ Pokémon. But then which of the 807 Pokémon is? 

This is the question that we explore in our current article. With the recent release of the eighth generation of Pokémon in the game Pokémon Sword and Shield games, the question renewed its relevance. Aside from that, there appear to be numerous fierce discussion about which Pokémon is should be crowned as the _best_. Nevertheless, few online discussions appear to be supported by empirical data from 'actual' Pokémon-battles.

In the current article, we present results of our Pokémon battle simulation-study. We organised the remainder of this article as follows. First, we will discuss the (online) literature, and argue why we feel that our study is equipped to answer this question. In the method section, we discuss how we operationalised our research question of _best_ Pokémon and discuss the battle simulator study. We then present our results in the results section, and reflection on the answers we found in the discussion. As few questions could be as divisive as this question concerning Pokémon we also reflect on several of the shortcomings of our study. And, of course, we answer the question of which Pokémon can be considered as the _best_ (and no, it is not Pikachu).

## Online discussions.
Although it could be considered quite a simple question, the answer is (perhaps surprisingly) nuanced. First, we need to need to define what we are actually hoping to find out. Our question concerns the Pokémon games developed by Game Freak and published by Nintendo. Pokémon itself is a media franchise that is managed by The Pokémon Company, which –according to Wikipedia- shares divided be Nintendo, Game Freak and Creatures. We do not consider the mobile augmented reality game Pokémon Go, or other spinoff games (such as Detective Pikachu). We expect that results differ for the card game Pokémon and Pokémon Go.

The Pokémon games that we consider consist out the eight generations of Pokémon games, that span the Game Boy, Game Boy Color, Game Boy Advance, Nintendo DS, Nitendo 3DS, and the Nintendo Switch. 

### What is considered _best_?

The main reason why we introduce our research project through such a broad and loosely defined question, is because this appears to be the main question that is asked online. Variations of the search query span almost every possible combination of variations of '_best_' (i.e. 'strongest', 'overpowered', 'top'). Many top-ten lists limit themselves to an ordering each generation of Pokémon by their (ascending) base stats (the defensive and offensive traits of Pokémon), and many online discussions strategize which starter Pokémon (at the beginning of each game the player can choose between a Pokémon of the _grass_, _fire_, and _water_ type) is best suitable for the upcoming (difficult) Pokémon battles.

We already mentioned our ambition to go beyond these discussions and actually base our claims on empirical data from simulation Pokémon battles. Strategy guides can be extremely helpful to complete a game, but the question of what is considered the _best_ Pokémon is not an isolated question.

#### Pokémon stats

Essentially, almost all Pokémon battles could be considered as a 'rock-paper-scissors' game. Similar to the hand game, the some type of Pokémon has competitive advantages over some types, but can beaten easily by other types. To consider the three starter type Pokémon: fire-types are weak against water-types, but strong against grass-types; water-types are superior to fire-types, but can easily loose from grass-types. An essential part of the Pokémon games is to have a varied team of Pokémon, so that the Pokémon can cover each other’s weaknesses. 

Ultimately, the question of which Pokémon is the best, is the result of simple calculus. Each Pokémon is –essentially- a combination of several statistics (or 'stats'), which determine certain aspects of battles between Pokémon. _Hit points_ (or HP) determine how much damage a Pokémon can receive before fainting (after which the Pokémon cannot be used for battle).

The goal is to knock-out all Pokémon of the opposing team. This can be done through to _physical_ and _special_ (attack) moves. _Attack_ determine how much damage a Pokémon deals when using a physical move, _defence_ determines how much damage a Pokémon receives when it is hit with a physical move. The _special attack_ and _special defence_ partly determines how much damage a Pokémon deals or receives when it is hit or deals a _special_ move. There are three other types of stats: _speed_, which determines which of the Pokémon can deal the first blow, _evasion_ determines its probability of avoiding other Pokémon’s moves, and the _accuracy_ determines its probability of hitting another Pokémon.

#### Empirical data

Because Pokémon battles are subjected to these statistics, arguably the sum of all base-stats is not the ideal way to discussion Pokémon’s in terms of their battle capacities, also because Pokémon *always* consist out of a team of (up to) six.

A Pokémon team with the highest base-stats is could be weak to some combination of Pokémon that have better balanced types.

## Research question

We present several results. Even though we want to consider which combination of Pokémon is best for a team, we first consider the age-old question: _which starter Pokémon of each generation has the highest win rate over the other Pokémon in its generations_? This results in eight answers, when then determine _which starter Pokémon is superior to the other_?

# Method

We present the results of several simulation-studies.

## Best starter Pokémon

Our first simulation-study aims to answer the question, which starter Pokémon is the superior of the three. With an answer for each of the eight generations of Pokémon, our second simulation-study aims answers the question which of the overall starters is the best choice.

### Exclusions

Only the starting level (5) will be considered.
Weather will not be considered.
Healing and other base stat increasing items will not be considered.
Only first generation rules, pokemon and their stats will be considered.

### Definition of 'best'
The pokemon with the highest average win percentage. While pokemon that excel in their particular niche might be preferable in a team composition, for this first study we only consider individual winrates.

### Simulating battles
Pokemon battles will be simulated using, as far as is practical, the rules and mechanics of the official game. Moves are selected based on.....  
- best against type? 
- use defensive/debuff/buff moves?
- use a fixed pattern/rule of thumb for move repetitions?
- develop a self-learning neural network?
  
## Materials
Some resources already exist under an MIT license: https://github.com/fonse/pokemon-battle for simplified simulation of pokemon battles, and https://github.com/pvpoke/pvpoke for more in depth simulation of pokemon _GO_ battles, which are somehow different. 