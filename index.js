'use strict'

var ticTacToe = () => {
  var arr = []
  var x = 0
  var o = 0

  for (let i=0; i<3; i++) {
    let row = []
    for (let j=0; j<3; j++) {
      if ((Math.floor(Math.random()*2)==1 && x<5) || o==5) {
        row.push('X')
        x++
      }
      else {
        row.push('O')
        o++
      }
    }
    arr.push(row)
  }

  console.log('x:',x);
  console.log('o:',o);

  return arr
}

console.log(ticTacToe());
