describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player('x');
    expect(testPlayer.mark).to.equal('x');
  });
});



describe('TicTacBoard', function() {

  it("marks square", function() {
    var testBoard = new TicTacBoard();
    testBoard.markSquare("a1");
    expect(testBoard.a1).to.equal(1);
  });

  it("is true that Player 1 has won in the left column", function() {
    var testBoard = new TicTacBoard();
    testBoard.markSquare("a1");
    testBoard.markSquare("a2");
    testBoard.markSquare("a3");
    // expect(testBoard.a1).to.equal(1);
    // expect(testBoard.a2).to.equal(1);
    // expect(testBoard.a3).to.equal(1);
    expect(this.gameWon()).to.equal("Player 1 Wins in the left column");
  });

  it("is true that Player 2 has won in the left column", function() {
    var testBoard = new TicTacBoard(-1,-1,-1);
    expect(testBoard.a1).to.equal(-1);
    expect(testBoard.a2).to.equal(-1);
    expect(testBoard.a3).to.equal(-1);
    expect(testBoard.a1 + testBoard.a2 + testBoard.a3).to.equal(-3);

  });
});

describe('Player 1 Wins', function() {
  it("is true that Player 1 has won in left column", function() {
    var testBoard = new TicTacBoard(1,1,1);
    expect(testBoard.gameWon()).to.equal("Player 1 Wins in the left column");
  });
  it("is true that Player 1 has won in middle column", function() {
    var testBoard = new TicTacBoard(0,0,0,1,1,1,0,0,0);
    expect(testBoard.gameWon()).to.equal("Player 1 Wins in the middle column");
  });
  it("is true that Player 1 has won in right column", function() {
    var testBoard = new TicTacBoard(0,0,0,0,0,0,1,1,1);
    expect(testBoard.gameWon()).to.equal("Player 1 Wins in the right column");
  });
  it("is true that Player 1 has won the downward diagonal", function() {
    var testBoard = new TicTacBoard(0,0,1,0,1,0,1,0,0);
    expect(testBoard.gameWon()).to.equal("Player 1 Wins downward diagonal");
  });
});

describe('Player 2 Wins', function() {
  it("is true that Player 2 has won in left column", function() {
    var testBoard = new TicTacBoard(-1,-1,-1);
    expect(testBoard.gameWon()).to.equal("Player 2 Wins in the left column");
  });
  it("is true that Player 2 has won in middle column", function() {
    var testBoard = new TicTacBoard(0,0,0,-1,-1,-1,0,0,0);
    expect(testBoard.gameWon()).to.equal("Player 2 Wins in the middle column");
  });
  it("is true that Player 2 has won in right column", function() {
    var testBoard = new TicTacBoard(0,0,0,0,0,0,-1,-1,-1);
    expect(testBoard.gameWon()).to.equal("Player 2 Wins in the right column");
  });
  it("is true that Player 2 has won the downward diagonal", function() {
    var testBoard = new TicTacBoard(0,0,-1,0,-1,0,-1,0,0);
    expect(testBoard.gameWon()).to.equal("Player 2 Wins downward diagonal");
  });
});

describe('Game Tied', function() {
  it("is true that there are still empty squares", function() {
    var testBoard = new TicTacBoard(1,1,-1,1,0,-1,-1,1,1);
    expect(testBoard.gameTied()).to.equal("keep playing")
  });
  it("is true that the game is tied", function() {
    var testBoard = new TicTacBoard(1,1,-1,1,-1,-1,-1,1,1);
    expect(testBoard.gameTied()).to.equal("game is tied")
  });
});


describe('Square Marking', function() {
  it("marks the empty square with an x", function() {
    var testBoard = new TicTacBoard(0,0,0,0,0,0,0,0,0);
    var testPlayer = new Player("Lindsey",'x',true);
    expect(testBoard.a1mark()).to.equal("Lindsey has marked a square")
  })
})
