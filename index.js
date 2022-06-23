
        const btn = document.querySelectorAll('.buttons');
        const body = document.querySelector('body');
        btn.forEach (btn => (btn.addEventListener('click',game)));
        //btn.addEventListener('click',game);
        let count = 0;
        let playerWins = 0;
        let computerWins = 0;
        let roundCounter = 0;
        
        function game (e) { // runs a game (best of 5) against the computer
            let selection = e.srcElement.alt;
            console.log(e);
            if (roundCounter == 5){
                roundCounter = 0;
                playerWins = 0;
                computerWins = 0;
                let clear = document.querySelectorAll('.game');
                clear.forEach ((clear) => {clear.innerHTML = ''});
            }
            const content = document.querySelector('.round');
            content.textContent = 'Round ' + (roundCounter+1);
            console.log(selection);
            let winner = playRound(selection);
            if (winner.charAt(4) == 'w') {
                playerWins = playerWins + 1;
            }
            else if (winner.charAt(4) == 'l') {
                computerWins = computerWins + 1;
            }
            else {

            }
            if (playerWins == 1){
                const playerStanding = document.querySelector('.standingPlay');
                playerStanding.textContent = 'Player has ' + playerWins + ' win.';
            }
            else {
                const playerStanding = document.querySelector('.standingPlay');
                playerStanding.textContent = 'Player has ' + playerWins + ' wins.';
            }
            if (computerWins == 1){
                const computerStanding = document.querySelector('.standingComp');
                computerStanding.textContent = 'Computer has ' + computerWins + ' win.';
            }
            else {
                const computerStanding = document.querySelector('.standingComp');
                computerStanding.textContent = 'Computer has ' + computerWins + ' wins.';
            }
            roundCounter ++;
            if (roundCounter == 5){   
                if (playerWins > computerWins) {
                    const checkWinner = document.querySelector('.verdict');
                    checkWinner.textContent = 'You won the whole game!';
                }
                else if (playerWins < computerWins) {
                    const checkWinner = document.querySelector('.verdict');
                    checkWinner.textContent = 'You lost the whole game!';
                }
                else {
                    const checkWinner = document.querySelector('.verdict');
                    checkWinner.textContent = 'The game was a draw!';
                }
            }
            
        }


        
        function playRound (e,computerSelection = computerPlay()) {
            let playerSelection = e;
            
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();              // This section converts the first input to Title case
            computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.substr(1).toLowerCase();        // This section converts the second input to Title case
            
            if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Paper')){       
                const content = document.querySelector('.output');
                content.textContent = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
                return ('You win! ' + playerSelection + ' beats ' + computerSelection + '!');
            }
            else if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock')){
                const content = document.querySelector('.output');
                content.textContent = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
                return ('You lose! ' + computerSelection + ' beats ' + playerSelection + '!');
            }
            else if ((playerSelection == 'Rock' && computerSelection == 'Rock') || (playerSelection == 'Paper' && computerSelection == 'Paper') || (playerSelection == 'Scissors' && computerSelection == 'Scissors')){
                const content = document.querySelector('.output');
                content.textContent = 'You draw! ' + computerSelection + ' is the same as ' + playerSelection + '!';
                return ('You draw! ' + computerSelection + ' is the same as ' + playerSelection + '!');
            }
            else {
                const content = document.querySelector('.output');
                content.textContent = 'Incorrect parameter(s) chosen, please use either rock, paper, or scissors';
                return
            }
        }

        let computerSelection = computerPlay;
        function computerPlay(){
            let randNum = Math.floor(Math.random()*3)+1;
            if (randNum == 1){
                return ('Rock');
            }
            else if (randNum == 2){
                return ('Paper');
            }
            else {
                return ('Scissors');
            }
        }