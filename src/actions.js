const prompt = require('prompt-sync')();

function showAction(playerOne, enemy) {
    const chooseAction = prompt('Escolha sua ação [1]: attack, [2]: itens> ')
    if (Number(chooseAction) === 1){
        attack(playerOne, enemy);
    } 

    if(Number(chooseAction) === 2){
        chooseIten(playerOne)
    }
}

function attack(playerOne, enemy) {
    for (let i = 0; i < enemy.length; i++) {
    console.log(`${i + 1}: ${enemy[i].name}`);
    }
    const chooseIndexEnemy = prompt('Escolha o inimigo: ');
    const dice = Math.floor(Math.random() * 10)
    const indexEnemy = Number(chooseIndexEnemy) - 1;
    
    console.log('Voce rolou: ' + dice)
    if (dice+playerOne.attack >= enemy[indexEnemy].ca) {
        console.log('Voce acertou!')
        enemy[indexEnemy].life -= 1;
        console.log(enemy[indexEnemy])

    }
    if (dice+playerOne.attack < enemy[indexEnemy].ca) {
        console.log('Errou!!!')
    }

}

function chooseIten(playerOne) {
    //playerOne.life = playerOne.life + 4;
    //playerOne.life += 4;
    //console.log('Se curou');
    for (let i = 0; i < playerOne.itens.length; i++) {
        console.log(`[${i + 1}]: ${playerOne.itens[i].name}`);
    }
    const chooseIndex = prompt('Escolha seu item: ');
    const index = Number(chooseIndex) - 1;
    const itenChoosen = playerOne.itens[index];
    console.log(itenChoosen);
    playerOne.life += itenChoosen.heal;
    playerOne.itens.splice(index, 1);
} 

module.exports = {
    showAction: showAction,
}