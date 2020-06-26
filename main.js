const Room = require('./classes/room.js');
const Direction = require('./classes/direction.js');
const Dimentions = require('./classes/dimentions.js');
const {isString, isInt} = require('./conditions.js');

module.exports = function (width, length, x, y, direction, stepsOfMovement) {
let valueDirection;
let newValueDirection;
let newStartXcar;
let newStartYcar;
let newEndXcar;
let newEndYcar;
let roomDimentions = new Room(width, length);
let carDimentions = new Dimentions(x, y);
let carDirection;
let directions = new Map();
  directions.set(0, 'N');
  directions.set(90, 'E');
  directions.set(180, 'S');
  directions.set(270, 'W');

function getByKey(map, item) {
  for (let [key, value] of map.entries()) {
    if (key === item)
      return value;
  }
}

function getByValue(map, item) {
  for (let [key, value] of map.entries()) {
    if (value === item)
      return key;
  }
}

function setCorners(directionToCheck){
console.log('currentDirection', carDirection.getDirection());
if (carDirection.getDirection()==='N') {
    newEndXcar = carDimentions.getStartXcar() + 1;
    carDimentions.setEndXcar(newEndXcar);
    newEndYcar = carDimentions.getStartYcar() - 1;
    carDimentions.setEndYcar(newEndYcar);}
  if (carDirection.getDirection()==='E') {
    newEndXcar = carDimentions.getStartXcar() - 1;
    carDimentions.setEndXcar(newEndXcar);
    newEndYcar = carDimentions.getStartYcar() - 1;
    carDimentions.setEndYcar(newEndYcar);
  }
  if (carDirection.getDirection()==='S') {
    newEndXcar = carDimentions.getStartXcar() - 1;
    carDimentions.setEndXcar(newEndXcar);
    newEndYcar = carDimentions.getStartYcar() + 1;
    carDimentions.setEndYcar(newEndYcar);
  }
  if (carDirection.getDirection()==='W') {
    newEndXcar = carDimentions.getStartXcar() + 1;
    carDimentions.setEndXcar(newEndXcar);
    newEndYcar = carDimentions.getStartYcar() + 1;
    carDimentions.setEndYcar(newEndYcar);
}
    console.log('StartXcar' , carDimentions.getStartXcar(), 'StartYcar', carDimentions.getStartYcar());
    console.log('EndXcar  ', carDimentions.getEndXcar(), 'EndYcar  ' , carDimentions.getEndYcar());
}

  if (!isInt(Number(width))) {
      console.log('insert width as an integer value');
      return;
  }
  if (!isInt(Number(length))) {
      console.log('insert length as an integer value');
      return;
  }
  if (isString(direction)) {
     carDirection = new Direction(direction);
  }
  else {
     console.log('insert the direction as a string');
      return;
  }
  if (!isInt(carDimentions.startXcar)) {
   console.log('insert x as an integer value');
   return;
  }
  if (!isInt(carDimentions.startYcar)) {
   console.log('insert y as an integer value');
   return;
  }
  const newStartXroom = roomDimentions.getStartXroom()+2;
  roomDimentions.setStartXroom(newStartXroom)
  const newEndXroom = roomDimentions.getEndXroom()-2;
  roomDimentions.setEndXroom(newEndXroom);
  const newStartYroom = roomDimentions.getStartYroom()+2;
  roomDimentions.setStartYroom(newStartYroom);
  const newEndYroom = roomDimentions.getEndYroom()-2;
  roomDimentions.setEndYroom(newEndYroom);
  console.log('StartXroom', roomDimentions.getStartXroom(), 'StartYroom', roomDimentions.getStartYroom());
  console.log('EndXroom  ', roomDimentions.getEndXroom(), 'EndYroom  ', roomDimentions.getEndYroom());

setCorners(carDirection.getDirection());
if (carDimentions.startXcar<= newStartXroom || carDimentions.startXcar>=newEndXroom) {
  console.log(`insert x where x is between ${roomDimentions.startXroom} and ${roomDimentions.endXroom-1}`);
  return;
  }
if(carDimentions.startYcar<= newStartYroom || carDimentions.startYcar>= newEndYroom) {
  console.log(`insert y where y is between ${roomDimentions.startYroom} and ${roomDimentions.endYroom-1}`);
  return;
}
  else {
    console.log(stepsOfMovement);
    if (stepsOfMovement) {
      stepsOfMovement.forEach(function (step) {
      console.log('step', step);
        switch (step) {
          case 'R':
            valueDirection = getByValue(directions, carDirection.getDirection());
            if (valueDirection ===0 || valueDirection ===90 || valueDirection ===180) {
              newValueDirection = valueDirection + 90;
            }
            else {
              newValueDirection = 0;
            }
            carDirection.setDirection(getByKey(directions, newValueDirection));
            setCorners(carDirection.getDirection());
            break;
            case 'L':
            valueDirection = getByValue(directions, carDirection.getDirection());
            if (valueDirection ===90 || valueDirection ===180 || valueDirection ===270) {
            newValueDirection = valueDirection - 90;
            }
            else {
            newValueDirection = 270;
            }
            carDirection.setDirection(getByKey(directions, newValueDirection));
            setCorners(carDirection.getDirection());
            break;
            case 'F':
            if(carDirection.getDirection()==='N') {
              newStartYcar = carDimentions.getStartYcar() + 1;
              carDimentions.setStartYcar(newStartYcar);
              setCorners(carDirection.getDirection());
             }
            else if(carDirection.getDirection()==='S') {
              newStartYcar = carDimentions.getStartYcar() - 1;
              carDimentions.setStartYcar(newStartYcar);
              setCorners(carDirection.getDirection());
            }
            else if(carDirection.getDirection()==='E') {
              newStartXcar = carDimentions.getStartXcar() + 1;
              carDimentions.setStartXcar(newStartXcar);
              setCorners(carDirection.getDirection());
            }
            else {
              newStartXcar = carDimentions.getStartXcar() - 1;
              carDimentions.setStartXcar(newStartXcar);
              setCorners(carDirection.getDirection());
           }
            break;
            case 'B':
            if(carDirection.getDirection()==='N') {
              newStartYcar = carDimentions.getStartYcar() - 1;
              carDimentions.setStartYcar(newStartYcar);
              setCorners(carDirection.getDirection());
            }
            else if(carDirection.getDirection()==='S') {
              newStartYcar = carDimentions.getStartYcar() + 1;
              carDimentions.setStartYcar(newStartYcar);
              setCorners(carDirection.getDirection());
              }
            else if(carDirection.getDirection()==='E') {
              newStartXcar = carDimentions.getStartXcar() - 1;
              carDimentions.setStartXcar(newStartXcar);
              setCorners(carDirection.getDirection());
            }
            else {
              newStartXcar = carDimentions.getStartXcar() + 1;
              carDimentions.setStartXcar(newStartXcar);
              setCorners(carDirection.getDirection());          }
            break;
          default:
            console.log('You should move by one of these: L R F B');
        }
       
    });
  if(carDimentions.getStartXcar()<roomDimentions.getStartXroom()
        || carDimentions.getStartXcar()>roomDimentions.getEndXroom()
        || carDimentions.getEndXcar()<roomDimentions.getStartXroom()
        || carDimentions.getEndXcar()>roomDimentions.getEndXroom()
        || carDimentions.getStartYcar()<roomDimentions.getStartYroom()
        || carDimentions.getStartYcar()>roomDimentions.getEndYroom()
        || carDimentions.getEndYcar()<roomDimentions.getStartYroom()
        || carDimentions.getEndYcar()>roomDimentions.getEndYroom()) {
          console.log('Your car is crashed. Run again!');
        }
        else {
          console.log('You won');
        }
    }
  else {
    console.log('You should move!');
  }
  }
}