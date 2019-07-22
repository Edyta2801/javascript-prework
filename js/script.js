
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);




let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove=getMoveName(playerInput);

function getMoveName(argMoveId) {
    if (argMoveId == '1') {
        return 'kamień';
    }
    else if (argMoveId == '2') {
        return 'papier';
    }
    else if (argMoveId == '3') {
        return 'nożyce'
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}


printMessage('Mój ruch to: ' + argComputerMove);
printMessage('Twój ruch to: ' + argPlayerMove);
console.log(getMoveName('2'));




console.log('moves:', argComputerMove, argPlayerMove);


function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
        printMessage('Ty wygrywasz!');
    } else if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')) {
        printMessage('Ja wygrywam');
    } else if ((argComputerMove == 'kamień' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')) {
        printMessage('Remis, gramy jeszcze raz')
    } else {
        printMessage('Błędny ruch, spróbuj ponownie');
    }

    console.log(displayResult());
}



//operator || =>  if ((warunek)||(warunek))

// if ((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
//     printMessage('Ty wygrywasz!');
// } else if ((computerMove == 'kamień' && playerMove == 'nożyce') || (computerMove == 'papier' && playerMove == 'kamień') || (computerMove == 'nożyce' && playerMove == 'papier')) {
//     printMessage('Ja wygrywam');
// } else if ((computerMove == 'kamień' && playerMove == 'kamień') || (computerMove == 'papier' && playerMove == 'papier') || (computerMove == 'nożyce' && playerMove == 'nożyce')) {
//     printMessage('Remis, gramy jeszcze raz');
// } else {
//     printMessage('Błędny ruch, spróbuj ponownie');
// }



