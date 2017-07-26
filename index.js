function ticTacToe() {
  var arrXo = []
  var x = 0;
  var o = 0;

  while(arrXo.length < 9) {
    var randomNum = Math.floor(Math.random() * 2)
    if (randomNum === 0 && o<5) {
      arrXo.push('o')
      o++
    } else if (randomNum === 1 && x<5){
      arrXo.push('x')
      x++
    }
  }
  console.log('x = ',x);
  console.log('o = ',o);
  return board(arrXo);
}

function board (arr) {
  var index = 0
  var boardArr = []
  for (let i = 0; i < 3; i++) {
    boardArr.push([])
    for (let j = 0; j < 3; j++) {
      boardArr[i].push(arr[index])
      index++
    }
  }
  return boardArr
}

console.log(ticTacToe());
console.log(ticTacToe());
console.log(ticTacToe());
console.log(ticTacToe());
console.log(ticTacToe());
console.log(ticTacToe());
console.log(ticTacToe());
console.log(ticTacToe());
