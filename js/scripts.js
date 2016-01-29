function Player(mark,isTurn) {
//  this.playerName = playerName;
  this.mark = mark;
  this.isTurn = isTurn;
}

// function Player(mark) {
// //  this.playerName = playerName;
//   this.mark = mark;
// }


function TicTacBoard() {
  this.a1 = 0;
  this.a2 = 0;
  this.a3 = 0;
  this.b1 = 0;
  this.b2 = 0;
  this.b3 = 0;
  this.c1 = 0;
  this.c2 = 0;
  this.c3 = 0;

  this.player1 = new Player("x",true)
  this.player2 = new Player("o",false)
  // this.currentPlayer = this.player1;

  this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
}

// Begin the ugliness... Below follows 18 prototypes (9 for each player) to affect each square on click. Obviously this should be refactored to test for whose turn it is (18 becomes 9) and what square is being clicked (9 becomes 1)

TicTacBoard.prototype.marka1 = function() {
  if (this.a1 !== 0) {
    return alert("square not empty")
  }
  if (this.player1.isTurn === true) {
    this.a1 = 1;
    //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    this.player1.isTurn = false;
    this.player2.isTurn = true;
    return "x"
  }
  if (this.currentPlayer === this.player2) {
    this.a1 = -1;
    this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
    this.player1.isTurn = true;
    this.player2.isTurn = false;
    return "o"
  } else {
    return "error"
  }
}

// TicTacBoard.prototype.marka2 = function() {
//   if (this.a2 !== 0) {
//     return alert("square not empty")
//   }
//   if (this.player1.isTurn === true) {
//     this.a2 = 1;
//     //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
//     this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
//     this.player1.isTurn = false;
//     this.player2.isTurn = true;
//     return "x"
//   }
//   if (this.currentPlayer === this.player2) {
//     this.a2 = -1;
//     this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
//     this.player1.isTurn = true;
//     this.player2.isTurn = false;
//     return "o"
//   } else {
//     return "error"
//   }
// }


TicTacBoard.prototype.find = function(square) {
  if(square === 'a1') {
    return 0;
  }
  if(square === 'a2') {
    return 1;
  }
}

TicTacBoard.prototype.switchPlayer = function() {
  if(this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
  // if(this.player1.isTurn === true) {
  //   this.player1.isTurn = false;
  //   this.player2.isTurn = true;
  // }
  // if(this.player2.isTurn === true) {
  //   this.player2.isTurn = false;
  //   this.player1.isTurn = true;
  // }
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




// TicTacBoard.prototype.markSquare = function(square) {
//   if (this.find(square) !== 0) {
//     return "square not empty"
//   }
//   if (this.currentPlayer === this.player1) {
//     this.square = 1;
//     //setting the variable does not update its state in our array which breaks 'gameTied' so it is necessary to manually refresh the array in the next line. this should be refactored.
//     this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
//     return "Player 1 has marked a square"
//   }
//   if (this.currentPlayer === player2) {
//     this.square = -1;
//     this.boardArray = [this.a1,this.a2,this.a3,this.b1,this.b2,this.b3,this.c1,this.c2,this.c3];
//     return "Player 2 has marked a square"
//   } else {
//     return "error"
//   }
// }

  // board = new TicTacBoard();

// TicTacBoard.prototype.refreshBoard = function() {
//   for(i = 0; i < 9; i ++) {
//     if(this.boardArray[i] === 0) {
//       $('.game-square').html("<h2>empty</h2>");
//     }
//   }
// }


TicTacBoard.prototype.refreshBoard = function() {
    for(i=0; i < 9; i++) {
      // if(this.id)
    }
  }


$(document).ready(function() {

  var square;

  $('#begin').click(function() {
    board = new TicTacBoard();
    $('.game-square').empty();
    // $('.game-square').html("<button class='btn'>TestButton</button>")
  });


  $('#a1').click(function() {
    $('#a1').text(board.marka1());
  });

  $('#a2').click(function() {
    $('#a2').text(board.marka2());
  });


  // $('.game-square').click(function() {
  //   board.refreshBoard();
  //   square = this.id;
  //   board.markSquare(square);
  // });
});
