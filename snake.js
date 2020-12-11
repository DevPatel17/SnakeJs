import { getInputDirection } from './input.js';

//times snake moves per second
export const SNAKE_SPEED = 8;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function update() {
    addSegments();

  const inputDirection =  getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

//grow snake every time snake is on food
export function expandSnake(amount){
    newSegments += amount;
}

//find if spot is located at same coordinate as snake body
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    })
}

//check if snake head is anywhere on the snake body (excluding head)
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}



export function getSnakeHead() {
    return snakeBody[0];
}

export function getSnakeLength(){
//console.log("inside get snake length");
    return snakeBody.length;
}


//function that returns true if any snake segment is on the same spot as the food
function equalPositions(pos1, pos2) {
    return ((pos1.x === pos2.x) && (pos1.y === pos2.y));
    
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSegments = 0;
}

