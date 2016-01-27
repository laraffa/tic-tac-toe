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
    var testBoard = new TicTacBoard(1,1,1);
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
  })
  
});
