function createPlayer(name) {
    let playerTag = '@' + name;

    playerArray.push([name, playerTag]);
    return { name, playerTag }
}
function checkWinOrTie(board) {
    let winningCondition = [
        //row
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        //col
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        //diag
        [[0, 0], [1, 1], [2, 2]],
        [[2, 0], [1, 1], [0, 2]],
    ]

    for (let w of winningCondition) {
        //let [a,b,c]=w
        if (board[w[0][0]][w[0][1]] !== '?' && board[w[0][0]][w[0][1]] == board[w[1][0]][w[1][1]] && board[w[0][0]][w[0][1]] == board[w[2][0]][w[2][1]]) {
            return board[w[0][0]][w[0][1]];
        }
    }

    let isBoardFull= !board.flat().includes('?');
    if (isBoardFull){return "Tie";}

    return null;
}

function is2PlayersCreated() {
    return playerArray.length == 2;
}

//player1&2-player obj
let playerArray = [];
let p1="";
let p2="";


//gameboard obj
let gameBoard = [];
/*
for (let i=0;i<3;i++){
    gameBoard[i]=[];
    for (let j=0;j<3;j++){
        gameBoard[i][j]='?';
    }
}
console.log(gameBoard);
*/
//gameflow obj?
let justconsole = document.getElementById("justconsole");
let tictactoeTable = document.getElementById("tictactoe-table");

function createGameBoard() {
    for (let i = 0; i < 3; i++) {
        gameBoard[i] = [];
        let row = document.createElement("tr");

        for (let j = 0; j < 3; j++) {
            gameBoard[i][j] = '?';
            let btn = document.createElement("button");
            btn.className = "tictactoebtn";
            let cell = document.createElement("td");
            btn.textContent = gameBoard[i][j];
            cell.append(btn);
            row.append(cell);
            btn.addEventListener("click", () => selectOption(i, j, btn));
        }
        tictactoeTable.append(row);
        //justconsole.append(tictactoeTable);
        //tictactoeTable.innerHTML="";
    }
}

tictactoeTable.classList.add("disabletable");
//let player1=createPlayer(11);
//let player2=createPlayer(22);

const consoleLog = document.getElementById("consolelog");
const submitPlayersForm = document.getElementById("submitplayersform");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

submitPlayersForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (player1.value && player2.value) {
        p1 = createPlayer(player1.value);
        p2 = createPlayer(player2.value);
        consoleLog.innerHTML = "";
        consoleLog.innerHTML = `Game Starts! ${p1.name} Turn`;
        tictactoeTable.classList.remove("disabletable");
    }
    else {
        consoleLog.innerHTML = "";
        consoleLog.innerHTML = "Please enter 2 player names!";
    }
    submitPlayersForm.reset();

});

//display player turn

function displayConsoleLog(i,j) {
    let winortie = checkWinOrTie(gameBoard);
    if (winortie) {
        if (winortie == 'X') {
            consoleLog.innerHTML = `${p2.name} Won!`;
        }
        else if (winortie == 'O') {
            consoleLog.innerHTML = `${p1.name} Won!`;
        }
        else {
            consoleLog.innerHTML = `Tie!`;
        }
        tictactoeTable.classList.add("disabletable")
        currPlayer=1;
    }
    else{
        if (currPlayer % 2 !== 0) {
            consoleLog.innerHTML = `${p2.name}'s Turn (O)`;
        } else {
            consoleLog.innerHTML = `${p1.name}'s Turn (X)`;
        }
    }

}

let currPlayer = 1;
//only enable gameboard button click once/can only click if value is "?"
function selectOption(i, j, btn) {
    //determine if button can be selected
    if (gameBoard[i][j] !== '?') {
        return;
    }
    
    if (currPlayer % 2 == 0) {
        gameBoard[i][j] = "O";
        btn.textContent = gameBoard[i][j];
        displayConsoleLog(i,j);   
    }
    else {
        gameBoard[i][j] = 'X';
        btn.textContent = gameBoard[i][j];
        displayConsoleLog();
    }
    currPlayer++;
}

//reset gameboard
function resetGameBoard() {
    tictactoeTable.innerHTML = "";
    gameBoard = [];
    createGameBoard();
    consoleLog.innerHTML = `${p1.name} Turn`;
    console.log(gameBoard);
    console.log("GameBoard Reset!");
    tictactoeTable.classList.remove("disabletable");

}

createGameBoard();