var arr = [];
var jml_x = 0;
var jml_o = 0;

function tictactoe() {
  for (var i = 0; i < 3; i++) {
    arr.push([]);
    for (var j = 0; j < 3; j++) {
      random = Math.floor(Math.random()*2)
      if(jml_x < 5 && random === 1) {
        arr[i].push('X');
        jml_x++;
      }
      else if (jml_o < 5){
        arr[i].push('O');
        jml_o++;
      }
    }
  }
  return arr;
}


console.log(tictactoe());
