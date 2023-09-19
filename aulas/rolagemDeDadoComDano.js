let running = true;

const player = {
    name: 'Sugma',
    life: 10,
    tesouro: 0,
}

while (running === true) {
    //ação de rolar dado
    const dice = Math.floor(Math.random() * 10)

    console.log(`O valor rolado foi: ${dice}!`)
    if (dice >= 6) {
        player.life--;
    } else {
        player.tesouro++
    }

    console.log(`Vida do ${player.name}: ${player.life}`);

    if (player.tesouro >= 5) {
        running = false;
        console.log('Voce mamou!!!!Parabains1!!!!')
    } else if (player.life < 1) {
        running = false;
        console.log(`O ${player.name} morreu`);

    }
}

console.log('game over');