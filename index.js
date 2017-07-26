function ticTacToe(jumlahRow, jumlahCol) {
  var arr = [];
  // var x = ['x','x','x','x','x'];
  // var o = ['o','o','o','o','o'];
  var totalX = 0;
  var totalO = 0;

  for (var i = 0; i < jumlahRow; i++) {
    let row = [];
    for (var j = 0; j < jumlahCol; j++) {
      let random = Math.floor(Math.random()*2)
      console.log(random);
      if(random === 1) {
        if (totalX < 4) {
          row.push("X")
          totalX += 1;
        }else {
          row.push("O")
        }
      }else {
        if (totalO < 4) {
          row.push("O");
          totalO += 1;
        }else {
          row.push("X");
        }
      }
      // arr[i].push()
    }
    arr.push(row);
  }
  return arr;
}
console.log(ticTacToe(3,3));
