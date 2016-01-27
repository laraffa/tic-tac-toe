describe('Player', function() {
  it("returns the player's name and mark", function() {
    var testPlayer = new Player("Lindsey",'x',true);
    expect(testPlayer.playerName).to.equal("Lindsey");
    expect(testPlayer.mark).to.equal('x');
    expect(testPlayer.isTurn).to.equal(true);
  });
});


describe('TicTacBoard', function() {
  it("is true that Player 1 has won in the left column", function() {
    var testBoard = new TicTacBoard(1,1,1,0,0,0,0,0,0);
    expect(testBoard.a1).to.equal(1);
    expect(testBoard.a2).to.equal(1);
    expect(testBoard.a3).to.equal(1);
    expect(testBoard.a1 + testBoard.a2 + testBoard.a3).to.equal(3);
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

// describe('GameTied', function() {
//   it("is true that there are still empty squares", function() {
//     var testBoard = new TicTacBoard(1,1,-1,1,-1,-1,0,1,-1);
//     expect(GameLogic).to.equal("game continues")
//   });
// });
