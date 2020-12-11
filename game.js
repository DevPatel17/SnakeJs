import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, getSnakeLength } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';
import { GRID_SIZE } from './grid.js'; 
let lastRenderTime = 0;
let gameOver = false;
let winGame = false;
let max_size = GRID_SIZE * GRID_SIZE;
const gameBoard = document.getElementById('game-board');


function main(currentTime) {

    if (gameOver) {
        alert('YOU LOST');
        if (confirm('You lost. Press OK to restart')) {
            window.location = '/';
        }
        return;
    }

    if(winGame){
        alert('CONGRATS! YOU WON!');
        if (confirm('Press OK to play again')){
            window.location = '/';
        }

    }
 


    //request a frame to animate screen
    window.requestAnimationFrame(main); 
    const seconds_since_last_render = (currentTime - lastRenderTime) / 1000;

    if (seconds_since_last_render < 1 / SNAKE_SPEED) return


   
    lastRenderTime = currentTime;
    
 
    update();
    draw();

}
window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
    checkWin();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}


function checkDeath() {
    gameOver = (outsideGrid(getSnakeHead()) || snakeIntersection());
}


function checkWin() {

 winGame = ( getSnakeLength() >= max_size);
}
