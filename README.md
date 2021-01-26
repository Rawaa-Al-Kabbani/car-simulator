# Car simulator

Car simulator is a program that simulates a car driving through an empty room. The car follows the path specified by the user via the command line interface. If the car at any point crashes into one of the walls the simulation is considered a failure. If the car makes it to the end of the path the simulation is considered a success.

The simulator is written in Node.js together with Commander.

## Installing the simulator

To install the car simulator first clone this repostiory, then run `npm install`.

## Running the simulator

The `run` command is used to run a new simulation. The command has six required paramaters:

- width - the width of the room in the car should drive through (integer greater than zero)
- height - the height of th eroom the car should drive through (integer greater than zero)
- x - the initial x position of the car within the room (integer greater than or equal to zero)
- y - the initial y position of the car within the room (integer greater than or equal to zero)
- direction - the intial direction of the car (N, E, S, W)
- stepsOfMovement - the list of commands describing the route of the car (F, B, L, R)

The following example runs a new simulaton with a 10x10 room where the car starts at position (5, 5) heading north and then drives forward, forward, backward, left, right.

`node app.js run 10 10 5 5 N F F B L R`

To get more information about the commnad line interface run `node app.js --help`.
