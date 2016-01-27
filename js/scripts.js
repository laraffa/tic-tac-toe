function Player(playerName,mark,isTurn) {
  this.playerName = playerName;
  this.mark = mark;
  this.isTurn = isTurn;
}


function TicTacBoard(a1,a2,a3,b1,b2,b3,c1,c2,c3) {
  this.a1 = a1;
  this.a2 = a2;
  this.a3 = a3;
  this.b1 = b1;
  this.b2 = b2;
  this.b3 = b3;
  this.c1 = c1;
  this.c2 = c2;
  this.c3 = c3;
}

TicTacBoard.prototype.boardArray = function() {
return [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
}

// var myBoard = new TicTacBoard(1,1,1,0,0,0,0,0,0);

TicTacBoard.prototype.gameWon = function() {
  if (this.a1 + this.a2 + this.a3 === 3) {
    return "Player 1 Wins in the left column";
  }
  if (this.b1 + this.b2 + this.b3 === 3) {
    return "Player 1 Wins in the middle column";
  }
  if (this.c1 + this.c2 + this.c3 === 3) {
    return "Player 1 Wins in the right column";
  }
  if (this.a1 + this.b1 + this.c1 === 3) {
    return "Player 1 Wins in the bottom row";
  }
  if (this.a2 + this.b2 + this.c2 === 3) {
    return "Player 1 Wins in the middle row";
  }
  if (this.a3 + this.b3 + this.c3 === 3) {
    return "Player 1 Wins in the top row";
  }
  if (this.a1 + this.b2 + this.c3 === 3) {
    return "Player 1 Wins upward diagonal";
  }
  if (this.a3 + this.b2 + this.c1 === 3) {
    return "Player 1 Wins downward diagonal";
  }
//End of Player One winning search
  if (this.a1 + this.a2 + this.a3 === -3) {
    return "Player 2 Wins in the left column";
  }
  if (this.b1 + this.b2 + this.b3 === -3) {
    return "Player 2 Wins in the middle column";
  }
  if (this.c1 + this.c2 + this.c3 === -3) {
    return "Player 2 Wins in the right column";
  }
  if (this.a1 + this.b1 + this.c1 === -3) {
    return "Player 2 Wins in the bottom row";
  }
  if (this.a2 + this.b2 + this.c2 === -3) {
    return "Player 2 Wins in the middle row";
  }
  if (this.a3 + this.b3 + this.c3 === -3) {
    return "Player 2 Wins in the top row";
  }
  if (this.a1 + this.b2 + this.c3 === -3) {
    return "Player 2 Wins upward diagonal";
  }
  if (this.a3 + this.b2 + this.c1 === -3) {
    return "Player 2 Wins downward diagonal";
  }
}



TicTacBoard.prototype.a1x = function() {
  if (this.a1 === 0) {
    this.a1 = 1
  } else {
    return "square not empty"
  }
}
//
// TicTacBoard.prototype.a1o = function() {
//   this.a1 = -1
//   } else {
//     return "square not empty"
//   }
// }
