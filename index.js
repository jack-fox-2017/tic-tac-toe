function tic_tac_toe_board() {

  var xo_random = ["X", "O"];
  var arr = []
  var board = []
  var chunck = 3;

  //ini adalah prosedur pengecekan angka harus 4/5
  var temp = 0
  while(!(temp === 4 || temp === 5)){
    temp = 0
    arr = []
    //ini adalah prosedur generete angak random
    for(let i=0; i<9; i++){
      var random = Math.floor(Math.random()*2);
      arr.push(random)
    }

    for(let i=0;i<arr.length;i++){
      temp = temp + arr[i]
    }
  }

  //ini adalah inisialisasi ke xo_random
  for(let j=0; j<arr.length;j++){
    arr[j] = xo_random[arr[j]]
  }
  //ini adalah prosedur chunck
  for(let k=0; k< arr.length; k+=chunck){
    board.push(arr.slice(k,k+chunck))
  }

  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board



//ANOTHER STEP
// for(let m=0; m<board.length;m++){
//   if (board[m] === 1) {
//     console.log("x")
//   }else{
//     console.log("o")
//   }
// }

//var arr = []; //menampung hasil looping random rand selama 9x angka 0 atau 1
//var mainArr =[]; //isinya array 2D dengan isi arr 0 atau 1
// var result = [];
// var countX = 0;
// var countO = 0;

// for(let i = 0; i < 9; i++){
//   var random = Math.floor(Math.random()*2);
//   arr.push(random);
//   //console.log(arr);
// }
// mainArr.push(arr); //push supaya jadi array 2D
// console.log(mainArr);
// for(let j = 0; j < mainArr.length;j++){
//   console.log(mainArr.length);
//   for(let i = 0; i < mainArr[j].length;i++){
//     result.push(xo_random[mainArr[j][i]])
//     //console.log(result);
//   }
// }

// for(let o = 0; o < result.length;o++){
//   if(result[o] === "X" ){
//     countX += 1;
//   }else {
//     countO += 1;
//   }
// }
//
// if(countX == 4 && countO == 5 || countO == 4 && countX == 5 ){
//   return result;
// }else {
//   return tic_tac_toe_board();
// }
