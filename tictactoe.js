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


function checkWinOrTie(){
    
}