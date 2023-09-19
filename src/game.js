const player = require('./player');
//const player = require('../src/player') > para acessar 
//pasta diferente anterior
const prompt = require('prompt-sync')();
const actions = require('./actions');
const playerOne = require('./player');
const enemy = require('./enemy');


let running = true;
let counting = 0;



while (running === true) {
actions.showAction(playerOne, enemy.enemy);
counting++
if (counting > 5) {
    running = false
}
}


//console.log(playerOne.life);
//console.log(playerOne.itens);