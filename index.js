'use strict'

function tic_tac() {
  let board = [];
  let totalX = 0;
  let totalO = 0;
  for (var i = 0; i < 3; i++) {
    let baris = [];
    board.push(baris);
    for (var j = 0; j < 3; j++) {
      let random = Math.floor(Math.random() * 2);
      if (random == 1) {
        if (totalX < 5) {
          baris.push('X');
          totalX++;
        } else {
          baris.push('O')
          totalO++
        }
      }
      else if (random == 0) {
        if (totalO < 5) {
          baris.push('O')
          totalO++;
        } else {
          baris.push('X')
          totalX++
        }
      }
    }
  }
  return board;
}

console.log(tic_tac());
