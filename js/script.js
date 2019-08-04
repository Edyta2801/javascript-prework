{
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    let resetScore = document.querySelector("resetButton");

    const playGame = function (playerInput) {
        // function playGame(playerInput) {
        clearMessages();

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
        // displayResult(argComputerMove, argPlayerMove);



        /* FUNKCJE */

        // sprawdz, czy gra powinna sie skonczyc
        const checkEndGame = function () {
            // function checkEndGame() {
            if (round === 10) {
                if (playerScore > computerScore) alert('Wygrał gracz!');
                else if (playerScore < computerScore) alert('Wygrał komputer');
                else alert('Remis!');
            }
        }
        checkEndGame();


        // const getMoveName = function (argMoveId) {
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
        // getMoveName();

        const displayResult = function (argComputerMove, argPlayerMove) {
            // function displayResult(argComputerMove, argPlayerMove) {


            if ((argComputerMove === 'kamień' && argPlayerMove === 'papier') || (argComputerMove === 'papier' && argPlayerMove === 'nożyce') || (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')) {
                printMessage('WYGRYWASZ !');
                // playerScore++;
                document.getElementById("wins").innerHTML = playerScore++;

            } else if (argComputerMove === argPlayerMove) {
                printMessage('REMIS !')
            } else {
                printMessage('PRZEGRYWASZ !');
                // computerScore++;
                document.getElementById("lost").innerHTML = computerScore++;
            }
        }
        displayResult(argComputerMove, argPlayerMove);
    }

    const resetGame = function () {
        playerScore = computerScore = 0;
        document.getElementById("wins").innerHTML = playerScore;
        document.getElementById("lost").innerHTML = computerScore;
    }


    document.querySelector('#pickRock').addEventListener('click', function () { playGame(1) });
    // document.querySelector('#pickRock').addEventListener('click', playGame(1), false);
    document.querySelector('#pickPaper').addEventListener('click', function () { playGame(2) });
    // document.querySelector('#pickPaper').addEventListener('click', playGame(2));
    document.querySelector('#pickScissors').addEventListener('click', function () { playGame(3) });
    // document.querySelector('#pickPaper').addEventListener('click', playGame(2));
    document.querySelector('#resetButton').addEventListener('click', function () { resetGame() });
    // document.querySelector('#resetButton').addEventListener('click', resetGame);
}





