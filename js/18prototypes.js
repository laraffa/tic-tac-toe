// Begin the ugliness... Below follows 18 prototypes (9 for each player) to affect each square on click. Obviously this should be refactored to test for whose turn it is (18 becomes 9) and what square is being clicked (9 becomes 1)

TicTacBoard.prototype.marka1 = function() {
  if (this.a1 !== 0) {
    return "square not empty"
  }
  if (this.player1.isTurn === true) {
    this.a1 = 1;
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 1 has marked a square"
  }
  if (this.player2.isTurn === true) {
    this.a1 = -1;
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 2 has marked a square"
  } else {
    return "error"
  }
}

TicTacBoard.prototype.marka2 = function() {
  if (this.a2!== 0) {
    return "square not empty"
  }
  if (this.player1.isTurn === true) {
    this.a2 = 1;
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 1 has marked a square"
  }
  if (this.player2.isTurn === true) {
    this.a2 = -1;
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 2 has marked a square"
  } else {
    return "error"
  }
}

TicTacBoard.prototype.marka3= function() {
  if (this.a3 !== 0) {
    return "square not empty"
  }
  if (this.player1.isTurn === true) {
    this.a3 = 1;
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 1 has marked a square"
  }
  if (this.player2.isTurn === true) {
    this.a3 = -1;
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 2 has marked a square"
  } else {
    return "error"
  }
}

TicTacBoard.prototype.markb1 = function() {
  if (this.b1 !== 0) {
    return "square not empty"
  }
  if (this.player1.isTurn === true) {
    this.b1 = 1;
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 1 has marked a square"
  }
  if (this.player2.isTurn === true) {
    this.b1 = -1;
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 2 has marked a square"
  } else {
    return "error"
  }
}

TicTacBoard.prototype.markb2 = function() {
  if (this.b2 !== 0) {
    return "square not empty"
  }
  if (this.player1.isTurn === true) {
    this.b2 = 1;
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 1 has marked a square"
  }
  if (this.player2.isTurn === true) {
    this.b2 = -1;
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 2 has marked a square"
  } else {
    return "error"
  }
}

TicTacBoard.prototype.markb3 = function() {
  if (this.b3 !== 0) {
    return "square not empty"
  }
  if (this.player1.isTurn === true) {
    this.b3 = 1;
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 1 has marked a square"
  }
  if (this.player2.isTurn === true) {
    this.b3 = -1;
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 2 has marked a square"
  } else {
    return "error"
  }
}

TicTacBoard.prototype.markc1 = function() {
  if (this.c1 !== 0) {
    return "square not empty"
  }
  if (this.player1.isTurn === true) {
    this.c1 = 1;
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 1 has marked a square"
  }
  if (this.player2.isTurn === true) {
    this.c1 = -1;
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 2 has marked a square"
  } else {
    return "error"
  }
}

TicTacBoard.prototype.markc2 = function() {
  if (this.c2 !== 0) {
    return "square not empty"
  }
  if (this.player1.isTurn === true) {
    this.c2 = 1;
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 1 has marked a square"
  }
  if (this.player2.isTurn === true) {
    this.c2 = -1;
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 2 has marked a square"
  } else {
    return "error"
  }
}

TicTacBoard.prototype.markc3 = function() {
  if (this.c3 !== 0) {
    return "square not empty"
  }
  if (this.player1.isTurn === true) {
    this.c3 = 1;
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 1 has marked a square"
  }
  if (this.player2.isTurn === true) {
    this.c3 = -1;
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    return "Player 2 has marked a square"
  } else {
    return "error"
  }
}
