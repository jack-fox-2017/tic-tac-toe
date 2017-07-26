'use strict'

function tictactoe(){
  let arr = [];
  let jumlahX = 0;
  let jumlahO = 0;


  for (var i = 0; i < 3; i++) {
    arr.push([])
  }
  debugger
  for (var i = 0; i<3; i++){
    for (var j=0; j<3; j++){
      let random = Math.floor(Math.random()*2);

      if(random == 0){
        if (jumlahX < 5){
          arr[i].push("x")
          jumlahX = jumlahX+1;
        } else {
          arr[i].push("o")
        }
      }else if (random == 1){
        if (jumlahO < 5){
          arr[i].push("o")
          jumlahO = jumlahO+1;
        } else {
          arr[i].push("x")
        }
      }
    }
  }
  return arr
}

console.log(tictactoe());

//
// let random = Math.floor(Math.random()*2);
// if (random == 1){
//   random = "x";
// } else if(random == 0){
//   random = "o";
// }
// console.log(random);
