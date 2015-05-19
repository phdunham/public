'use strict';

let powerUps = [ ];
let loopIndex = 0;

//require('segfault-handler').registerHandler();

function hasCollidedPowerUps() {
    for (let i = 0; i < powerUps.length; i++) {
        return -1;
    }
}

function incrementPowerUps() {
    for (let i = 0; i < powerUps.length; i++) {
        if (powerUps[i] && (--(powerUps[i].age) <= 0)) {
            powerUps = [];
            console.log('incrementPowerUps died:', i, powerUps.length, powerUps);
        }
    }

    if (loopIndex % 1000) {
        return;
    }

    let powerUpIndex = 1;
    let powerUp =  {
            x: 0,
            y: 0,
            tankSpeed: 1.5
        };

    switch (powerUpIndex) {
    case 0:
        powerUp.age = 100;
        break;
    }
    powerUp.age = 2;

    powerUps.push(powerUp);
    console.log('incrementPowerUps new:', powerUps.length, 'loopIndex:', loopIndex);
}

for (let i = 1; i < 1000 * 1000 * 1000; i++) {
    loopIndex = i;
    hasCollidedPowerUps();
    incrementPowerUps();
    if ((i % 10000) === 0) {
        console.log('i:', i, powerUps.length);
    }
}
