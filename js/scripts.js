function Player(playerName,mark,isTurn) {
  this.playerName = playerName;
  this.mark = mark;
  this.isTurn = isTurn;
}


function TicTacBoard(a1,a2,a3) {
  this.a1 = a1;
  this.a2 = a2;
  this.a3 = a3;

}

//
// TicTacBoard.prototype.a1x = function() {
//   if (this.a1 === 0) {
//     this.a1 = 1
//   } else {
//     return "square not empty"
//   }
// }
//
// TicTacBoard.prototype.a1o = function() {
//   this.a1 = -1
//   } else {
//     return "square not empty"
//   }
// }
