
let round = 0;
let playerScore = 0;
let computerScore = 0;

function playGame(playerInput) {

    /* PROCES GŁÓWNY */

    //zwiekszamy licznik rundy
    round++;

    // ustalany wybór gracza
    const argPlayerMove = getMoveName(playerInput);

    // ustalamy wybór komputera
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const argComputerMove = getMoveName(randomNumber);

    // pokazujemy wybory w html-u
    printMessage('Mój ruch to: ' + argComputerMove);
    printMessage('Twój ruch to: ' + argPlayerMove);

    // ustalamy zwycięzce
    displayResult();

    // sprawdz, czy gra powinna sie skonczyc
    checkEndGame();

    /* FUNKCJE */

    function checkEndGame() {
        if (round === 10) {
            if (playerScore > computerScore) alert('Wyrgał gracz!');
            else if (playerScore < computerScore) alert('Wygrał komputer');
            else alert('Remis!');
        }
    }

    function getMoveName(argMoveId) {
        if (argMoveId == '1') {
            return 'kamień';
        }
        else if (argMoveId == '2') {
            return 'papier';
        }
        else if (argMoveId == '3') {
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove) {

        if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
            printMessage('Ty wygrywasz!');
            playerScore++;
        } else if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')) {
            printMessage('Ty przegrywasz');
            computerScore++;
        } else if ((argComputerMove == 'kamień' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')) {
            printMessage('Remis, gramy jeszcze raz')
        }

    }

}

document.querySelector('#pickRock').addEventListener('click', function () { playGame(1) });
document.querySelector('#pickPaper').addEventListener('click', function () { playGame(2) });
document.querySelector('#pickScissors').addEventListener('click', function () { playGame(3) });

