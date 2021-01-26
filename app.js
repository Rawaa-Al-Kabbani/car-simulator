const program = require("commander");
const functions = require("./main.js");

program
  .command("run <width> <length> <x> <y> <direction> [stepsOfMovement...]")
  .description(
    "insert width and length for a recangular room, x and y for the car dimentions, the direction of the car"
  )
  .action(functions);

program.parse(process.argv);
