---
title   : ''Gotta compare 'em all!'', emperical data from simulated Pokémon battles
author  : Kroeze, Noort, Steinrücke, & Smink
date    : 12/21/2019
---

# Abstract

Numerous strategy guides and online forums discuss the (partially open) question: which of the Pokémon is the ‘best’? The answer is more difficult than many online attempts to answer it may seem, also because there is a variety of different Pokémon games (and all Pokémon slightly difference between these outlets): Pokémon Go, the Pokémon Card game and the Nintendo, and the Game Freak games published by Nintendo. We only consider the last category. Although arguably the ‘best’ Pokémon in these games is the one with the highest summed ‘base stats’ (traits that determine the Pokémon’s battle performance), the arguments (that we found) are often not supported by actual empirical data from ‘actual’ Pokémon battles. Aside from that, Pokémon trainers should not consider Pokémon for inclusion in their team based on their individual performance, but based on their performance as a team. We did not a Pokémon battle simulator that that specifically addressed these issues, which is exactly what we developed. We present results of several questions here: (discuss some results shortly). We hope that this aids aspiring Pokémon Master from around the world.

# Introduction 

Ever since Ash Ketchum left his home in Pallet Town to become a Pokémon Master, aspiring Pokémon trainers from around the world wondered along side Ash: "_what is the best Pokémon_"? Although Ash’s faithful Pikachu is perhaps the most famous Pokémon (who is even well-known by those less enthusiastic about the Pokémon franchise), it is almost certainly not the _best_. But then which of the 807 Pokémon is? 

This is the question that we aim to explore. With the release of the eighth generation of Pokémon in the Pokémon Sword and Shield games, this question has renewed relevance (although that case could be made with each new generation of Pokémon). Perhaps a better telltale that this question is still relevant is the large number of online discussion devoted to the topic. Even tody the first Pokémon games are still discussed online. Given that these games were released in 1996 (1998 in the USA), there is still debate which Pokémon should (and which shouldn't) be on the team of a Pokémon Master.

Yet, we encountered few online discussions that were supported by empirical data from 'actual' Pokémon-battles. In the current article, we present results of our Pokémon battle simulation-study. We organised the remainder of this article as follows. First, we will discuss the available (online) literature, and argue why we feel that our study is better equipped to assess which Pokémon is the best. In the method section, we discuss how we operationalised our research question of _best_ Pokémon and discuss how we simulated Pokémon battles. We then present our results in the results section, and reflect on what we found and shortcomings of our study in the discussion. Of course, we answer the question of which Pokémon can be considered as the _best_ (and no, it is not Pikachu).

## Literature

The (scientific) literature about Pokémon can be organised around three themes: publications on the health effects of Pokémon Go with respect to physical activity (or driving accidents), developmental effects on children (memory, literacy, physical activity, gaming), and studies into cultural phenomena (history of video games, Pokémon and the Japanse culture, make-believe worlds, storyline analysis).

To the best of our knowledge, there is no scientific reporting that is in line with our research goal. There are, however, numerous of discussions online on the topic. Because these web-based discussions (and top ten lists) are more relevant to our specific needs than the available scientific literature, we (shortly) reflect on these. As the Internet has a short lifespan (and some websites could be online), we want to reflect on the fiedl. 

### Online discussions

The frequency by which Pokémon trainers (i.e. players of the Pokémon games) discuss which Pokémon could be considered the best addition to their team gives the impression that it is a simple question. The answer is in fact (and perhaps surprisingly) nuanced.

First, we need to need to define what we are actually hoping to find out. Our question concerns the Pokémon games developed by Game Freak and published by Nintendo. Pokémon itself is a media franchise that is managed by The Pokémon Company, which –according to Wikipedia- shares divided be Nintendo, Game Freak and Creatures. We do not consider the mobile augmented reality game Pokémon Go, or other spinoff games (such as Detective Pikachu). We expect that results differ for the card game Pokémon and Pokémon Go.

The Pokémon games that we consider consist out the eight generations of Pokémon games, that span the Game Boy, Game Boy Color, Game Boy Advance, Nintendo DS, Nitendo 3DS, and the Nintendo Switch. With the release of each new game, four types of discussions emerge: which _starter_ Pokémon is 'the best', which Pokémon is the best _overall_, which Pokémon are best adapted to the challanges in the game, and 'qualitative analysis' of which Pokémon is the strongest. The last category is often supported by digital animations of the Pokémon battles (which are in line with the Pokémon battles of the anime) and the makers of those videos theorize which Pokémon should be considered stronger. Because these discussions do not consider actual battle performance of Pokémon, we do not consider these.

The _strategy_ discussions are organised around the challanges of the game. Each Pokémon game contains gyms with a gym-leaders commanding an expectionally strong team of Pokémon. These battles acts as the traditional 'boss-battles' in video-games. Because these discussions are often organised around the questions whether _types_ of Pokémon are best up for the challanges, we do not consider these discussions for our research goals.

Two types of discussions remain, but both rely on the same reasoning. In the next section, we discuss their relevance.

## What could be considered under _best_?

The main reason why we introduce our research project through such a broad and loosely defined question, is because this appears to be the main question that is asked online. Variations of the search query span almost every possible combination of variations of '_best_' (i.e. 'strongest', 'overpowered', 'top'). Many top-ten lists limit themselves to an ordering each generation of Pokémon by their (ascending) base stats (the defensive and offensive traits of Pokémon), and many online discussions strategize which starter Pokémon (at the beginning of each game the player can choose between a Pokémon of the _grass_, _fire_, and _water_ type) is best suitable for the upcoming (difficult) Pokémon battles.

We already mentioned our ambition to go beyond these discussions and actually base our claims on empirical data from simulation Pokémon battles. Strategy guides can be extremely helpful to complete a game, but the question of what is considered the _best_ Pokémon is not an isolated question.

#### Pokémon stats

Essentially, almost all Pokémon battles could be considered as a 'rock-paper-scissors' game. Similar to the hand game, the some type of Pokémon has competitive advantages over some types, but can beaten easily by other types. To consider the three starter type Pokémon: fire-types are weak against water-types, but strong against grass-types; water-types are superior to fire-types, but can easily loose from grass-types. An essential part of the Pokémon games is to have a varied team of Pokémon, so that the Pokémon can cover each other’s weaknesses. 

Ultimately, the question of which Pokémon is the best, is the result of simple calculus. Each Pokémon is –essentially- a combination of several statistics (or 'stats'), which determine certain aspects of battles between Pokémon. _Hit points_ (or HP) determine how much damage a Pokémon can receive before fainting (after which the Pokémon cannot be used for battle).

The goal is to knock-out all Pokémon of the opposing team. This can be done through to _physical_ and _special_ (attack) moves. _Attack_ determine how much damage a Pokémon deals when using a physical move, _defence_ determines how much damage a Pokémon receives when it is hit with a physical move. The _special attack_ and _special defence_ partly determines how much damage a Pokémon deals or receives when it is hit or deals a _special_ move. There are three other types of stats: _speed_, which determines which of the Pokémon can deal the first blow, _evasion_ determines its probability of avoiding other Pokémon’s moves, and the _accuracy_ determines its probability of hitting another Pokémon.

## Empirical data

Because Pokémon battles are subjected to these statistics, arguably the sum of all base-stats is not the ideal way to discussion Pokémon’s in terms of their battle capacities, also because Pokémon *always* consist out of a team of (up to) six.

A Pokémon team with the highest base-stats is could be weak to some combination of Pokémon that have better balanced types. We expect to find very similar results to those discussing Pokémon base stats when _individual_ battle performance is considered. However, because Pokémon always battles in teams, the question of what is the _best_ is acutally one of team battles, supported by simply scoring battle performance of that team. 

### Pokémon battle simulators

There are also some Pokémon simulators. However, also to our surprise (and to the best of our knowledge), we found no reporting on how Pokémon compare to each based on the performance on repeated simulated examples (even though it is straightforward based on the considerable efforts it takes to build such a simulator).

## Research question

We therefor organised our results section into several components. We first consider the age-old question: _which starter Pokémon is best_? Each generation has its own set of three, we first discuss which of the three in each generation has the  highest win rate over the two Pokémon. Then, we compare the _best_ of each generation with the best of the other generations. Then, we consider teams of Pokémon.

# Method

In the method section, we discuss how we conducted our simulation study, where we obtained the information for our Pokédex from, and what types of restrictions we imposed to our study.

## Materials
Some resources already exist under an MIT license (https://github.com/fonse/pokemon-battle) for simplified simulation of Pokémon battles, and (https://github.com/pvpoke/pvpoke) for more in depth simulation of Pokémon _GO_ battles, which are somehow different. 

### Pokémon stats
We obtainend the base stats from the Pokémon from ...

## Exclusions

For the first research question, we only considered the starting level of the starter Pokémon, which is level 5 (with 1 as the lowest, and 100 as the highest level).

In general, we do not consider different weather types, or variantions between weather type. 
We do not consider the effects of healing items, or base-stat increasing items. If there is an effect of these items, than it could all Pokémon equally, effectively cancelling their additive value.

The rules of the Pokémon became slightly more complex over the years. We considered the latest set of rules. This is also the case for Pokémon that obtained another type later on (for some early generation of Pokémon, a type was added to later on).

## Operationalisation

We discuss the reliability and validity of our study.

### Reliability: How do our results compare
We feel that a simulation study is an exceptionally reliable way to discuss Pokémon in terms of their battle performance. The main issue is that some of the restrictions that we impose could affect the outcomes, and that some choices are up for debate. To weaken these effects, we discuss all choices that we made. 

### Validity: Definition of 'best'
The Pokémon with the highest percentage of battles won. While pokemon that excel in their particular niche might be preferable in a team composition, for this first study we first consider individual winrates.

### Simulating battles
Pokemon battles will be simulated using, as far as is practical, the rules and mechanics of the official game. Moves are selected based on.....  
- best against type? 
- use defensive/debuff/buff moves?
- use a fixed pattern/rule of thumb for move repetitions?
- develop a self-learning neural network?
- Competative player statistics from online battles?
  
## Some additional notes

There are also some variations between Pokémon that we do not consider extensively. We shortly adress these issues, because these are two differences that vary in our simulation from in-game Pokémon battles.

#### Higher levels mean higher win rates

It’s a very simple concepts: usually the Pokémon with the higher level wins. If we would consider the effect that a level of each Pokémon has, we would introduces bias: we are not interested in knowing which Pokémon -on average- has the highest levels in online player battles, we simply want to let Pokémon compete where there are no level differences, so that differences between Pokémon are the result of their actual capabilities (and not differences in levels).

It is good to note that for competitve online battles, the game developer also imposed these restrictions: all Pokémon compete at the same level (often level 50).

#### First move advantage 

In many games, the player (or the team) that has the first move, is also often the team that wins. For example, in chess the player that plays the _white_ gets to make the first move in chess, which is associated with higher wins rates than the opposing _black_ team. Because we consider Pokémon to be at the same level, the only attribute that determines who gets to make the first move is the _speed_.

#### Evolutions

We do not consider the differences between evolved Pokémon. When reaching a certain level, some Pokémon can evolve into a stronger version. Because these stronger versions have higher base stats, we do not expect that the lower evolutions are able to beat them (assuming equality between Pokémon levels). As a results, effectively, the variantions between different evolutions does not create differences between Pokémon.

# Results

# Discussion

We presented results of a simulation study. Although we believe our study properly emulates actual Pokémon battles, we cannot be certain that we missed some elements. Indeed, some of the restrictions that we introduced to our study will have affected our results. We address these issues and argue for the choices that we made.

## Actual data

Since the release of Pokémon Diamond and Pearl (the generation IV games) in 2006, Pokémon trainers from around the world could battle each other through the new online feature in the game. All other generation of Pokémon games included this online feature. It is very likely that there is some sort of database (probably at Nintendo) that stores the outcomes of these Pokémon battles. We strongly feel that these data are -in fact- better suited to answer all questions concerning win rates of Pokémon games than simulated data.

However, there are also some drawbacks. First of all, to the best of our knowledge, this data is not publicly available, which means we cannot perform data analyses to these battles. We did not contact Nintendo or Game Freak, but we are very interested in seeing analyses based on these data.

Second, because these battle data are the result of the preferences and choices that human players made, it is not unlikely that some Pokémon did not battle each other. As our ambition was to “_compare ‘em all_”, we felt that a simulation study gave us more control and flexibility. Also, as the Pokémon of players could be based on high base stats, this would again introduce some bias: we are not interested in base stats per se, but in actual battle performance.

Third, and in again in line with our ambition to _compare ‘em all_” (which is the last time we reference the theme song of the Pokémon anime series), we are not interested in differences in Pokémon performance that are the result of different choices for battle moves. A simulation study gives more flexibility in this respect.

It is perhaps good to note that online Pokémon battles do not include differences between Pokémon levels. For online battles, all Pokémon have the same level.

# References
