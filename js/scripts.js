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

  this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
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


TicTacBoard.prototype.gameTied = function() {
  for(var i = 0; i < 9; i++) {
    if (this.boardArray[i] === 0) {
      return "keep playing";
    }
  }
  return "game is tied";
};

//Begin the ugliness... Below follows 18 prototypes (9 for each player) to affect each square on click. Obviously this should be refactored to test for whose turn it is (18 becomes 9) and what square is being clicked (9 becomes 1)

TicTacBoard.prototype.marka1x = function() {
  if (this.a1 === 0) {
    this.a1 = 1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 1 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.marka2x = function() {
  if (this.a2 === 0) {
    this.a2 = 1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 1 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.marka3x = function() {
  if (this.a3 === 0) {
    this.a3 = 1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 1 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.markb1x = function() {
  if (this.b1 === 0) {
    this.b1 = 1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 1 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.markb2x = function() {
  if (this.b2 === 0) {
    this.b2 = 1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 1 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.markb3x = function() {
  if (this.b3 === 0) {
    this.b3 = 1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 1 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.markc1x = function() {
  if (this.c1 === 0) {
    this.c1 = 1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 1 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.markc2x = function() {
  if (this.c2 === 0) {
    this.c2 = 1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 1 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.markc3x = function() {
  if (this.c3 === 0) {
    this.c3 = 1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 1 has marked a square'
  } else {
    return "square not empty"
  }
}

// End of Player 1 marking prototypes
// End of Player 1 marking prototypes
// End of Player 1 marking prototypes
// End of Player 1 marking prototypes
// End of Player 1 marking prototypes
// End of Player 1 marking prototypes


TicTacBoard.prototype.marka1o = function() {
  if (this.a1 === 0) {
    this.a1 = -1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 2 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.marka2o = function() {
  if (this.a2 === 0) {
    this.a2 = -1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 2 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.marka3o = function() {
  if (this.a3 === 0) {
    this.a3 = -1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 2 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.markb1o = function() {
  if (this.b1 === 0) {
    this.b1 = -1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 2 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.markb2o = function() {
  if (this.b2 === 0) {
    this.b2 = -1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 2 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.markb3o = function() {
  if (this.b3 === 0) {
    this.b3 = -1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 2 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.markc1o = function() {
  if (this.c1 === 0) {
    this.c1 = -1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 2 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.markc2o = function() {
  if (this.c2 === 0) {
    this.c2 = -1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 2 has marked a square'
  } else {
    return "square not empty"
  }
}

TicTacBoard.prototype.markc3o = function() {
  if (this.c3 === 0) {
    this.c3 = -1
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return 'Player 2 has marked a square'
  } else {
    return "square not empty"
  }
}
