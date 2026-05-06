//player1&2-player obj
function createPlayer(name){
    let playerTag='@'+name;

    return {name, playerTag}
}
//gameboard obj
let gameBoard=[];
for (let i=0;i<3;i++){
    gameBoard[i]=[];
    for (let j=0;j<3;j++){
        gameBoard[i][j]='i';
    }
}
console.log(gameBoard);
//gameflow obj?
let justconsole=document.getElementById("justconsole");
justconsole.innerHTML=gameBoard;

let player1=createPlayer(11);
let player2=createPlayer(22);


function checkWinOrTie(board){
    let winningCondition=[
        //row
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        //col
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        //diag
        [[0,0],[1,1],[2,2]],
        [[2,0],[1,1],[0,2]],
    ]

    for (let w of winningCondition){
        //let [a,b,c]=w
        if (board[w[0][0]][w[0][1]]!=='i' && board[w[0][0]][w[0][1]]==board[w[1][0]][w[1][1]] && board[w[0][0]][w[0][1]]==board[w[2][0]][w[2][1]]){
            return board[w[0][0]][w[0][1]];
        }
    }

    if (board.every(r => !(r.includes('i')))){
        return "Tie";
    }
}