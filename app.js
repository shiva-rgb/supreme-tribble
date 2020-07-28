const game = () => {
    let pScore = 0;
    let cScore = 0;
    let winner = document.querySelector(".winner");
    document.getElementById("resetbtn").disabled = true;
    const introHand = document.querySelector(".intro img");
    introHand.style.animation = "bounceInDown 3s ease";
    

    //starting game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        const option = document.querySelector(".options");
        const resetButton = document.querySelector(".resetBtn");
        
        
        
        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            option.classList.add("fadeIn");
            resetButton.classList.add("fadeIn");
            
        });
       
    };

    const disableEnableButton = (isDisabled) => {
        const optionBtns = document.querySelectorAll(".options button");
        
        optionBtns.forEach(optionBtn => {
            optionBtn.disabled = isDisabled;
        });
    }

    //play the match

    const playMatch = () => {
        const optionBtn = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        //computer options
        const computerOptions = ["zero", "one", "two", "three", "four", "five", "six"];
        optionBtn.forEach(optionClick => {
            optionClick.addEventListener("click", function () {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 7);
                const computerChoice = computerOptions[computerNumber];
                //update the image
                
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);

                    playerHand.src = `./hands/${this.textContent}.png`;
                    computerHand.src = `./hands/${computerChoice}.png`;
                }, 1000);
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";                
            });
        });
    };

    const updateScore = (playerChoice) => {
        let playerScore = document.getElementById("playerScore").innerHTML;
        let scores = getScoreInDigits(playerChoice)
        playerScore = parseInt(playerScore) + scores.pScore;
        document.getElementById("playerScore").innerHTML = playerScore;
    }

    getScoreInDigits = (playerScore) => {
        let scoreObject = {};
        scoreObject.pScore = formatScore(playerScore);
        return scoreObject;
    }

    formatScore = (score) => {
        switch (score) {
            case "zero": return 0;
            case "one": return 1;
            case "two": return 2;
            case "three": return 3;
            case "four": return 4;
            case "five": return 5;
            case "six": return 6;
            default: return 0
        }
    }

    //comparing hands
    const compareHands = (playerChoice, computerChoice) => {
        //updating text
       
        
        //chceking out

        if (playerChoice === computerChoice) {
            
            gotOut(playerChoice); 
            document.getElementById("resetbtn").disabled = false;
            return;
        }
        else {
            updateScore(playerChoice);
        }
    };

    newGame = () => {
        disableEnableButton(false);
        winner.textContent = "You can Bat"
        document.getElementById("playerScore").innerHTML = "0";
        document.getElementById("resetbtn").disabled = true;
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        playerHand.src = `./hands/zero.png`;
        computerHand.src = `./hands/zero.png`; 
    };

    function  gotOut(playerChoice){
         
        winner.textContent = "You are out!!"
        disableEnableButton(true);
                        
    }

    startGame();
    playMatch();
    


};

game();