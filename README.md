# salary-calculator

## Objectif

Aux Laboratoires GILBERT, le service web se base sur cette calculatrice de salaire pour réaliser les demandes d'augmentation de l'équipe.

Elle a été développée par le service avec pour but d'être à la fois avantageuse pour le salarié (pas d'augmentation à demander, visibilité sur l'avenir, etc.) mais aussi pour notre société, afin de proposer des salaires les plus justes possibles afin que le salaire n'ai plus d'impact sur le turnover.

L'application utilise les salaires moyens de Paris, qui sont ajustés à l'aide d'un coefficient au coût de la vie de Caen. 

Le rôle, l'expérience dans la discipline, ainsi que le niveau de maîtrise viennent jouer sur le salaire final (toujours via des coefficients).

Une fois le salaire "optimal" indiqué par l'application le manager du service web priorise les demandes d'augmentation du service comme suit :

- Pour ceux qui sont en dessous du salaire optimal : ils sont prioritaires sur les augmentations, plus ils sont en dessous et plus le montant de l'augmentation négociée sera importante.
- Pour ceux qui sont en limite de salaire optimal : Une augmentation du montant l'inflation sera négociée.
- Pour ceux au dessus du salaire optimal : Rien ne sera négocié pour eux cette année.

------

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Yarn](https://yarnpkg.com/en/)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd salary-calculator`
* `yarn`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [glimmerjs](http://github.com/tildeio/glimmer/)
* [ember-cli](https://ember-cli.com/)
