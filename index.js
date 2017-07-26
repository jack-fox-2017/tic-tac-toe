function NestedArr(row, col) {

  var tampung = [];
  var huruf = "XO";
  var val_X = 0;
  var val_O =  0;
  for (var i = 0; i<row; i ++){
    tampung.push([]);
    for (var j = 0; j<col; j++){
      if (((Math.floor(Math.random()*huruf.length)) == 1 && val_O < 5) || val_X == 5){
        tampung[i].push("O");
        val_O ++;
      } else {
        tampung[i].push("X")
        val_X ++;
      }
    }

  }
  return tampung;
}
console.log(NestedArr(3,3))
