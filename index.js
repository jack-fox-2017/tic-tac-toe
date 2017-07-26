function tictactoe() {
  var arr = [], x = 0, o = 0

  for (var i = 0; i < 3; i++) {
    var row = []
    for (var j = 0; j < 3; j++) {
      if ((Math.floor(Math.random()*2)==1 && x<5) || o==5) {
        row.push('X')
        x++
      } else {
        row.push('O')
        o++
      }
    }
    arr.push(row)
  }

  return arr
}


console.log(tictactoe());
