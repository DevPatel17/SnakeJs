import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js' 


let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');


function main(currentTime) {
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
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);

}