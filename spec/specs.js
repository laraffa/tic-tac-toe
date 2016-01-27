describe('Player', function() {
  it("returns the player's name and mark", function() {
    var testPlayer = new Player("Lindsey",'x',true);
    expect(testPlayer.playerName).to.equal("Lindsey");
    expect(testPlayer.mark).to.equal('x');
    expect(testPlayer.isTurn).to.equal(true);
  });
});





//
// describe('TicTacBoard', function() {
//   it("is true that Player 1 has won", function() {
//     var testBoard = new TicTacBoard(a1,a2,a3,b1,b2,b3,c1,c2,c3);
//     expect(a1 + b1 + c1).to.equal(3);
//   });
// });
