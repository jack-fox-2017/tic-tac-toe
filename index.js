function tic_tac_toe_board () {
  let result = [];
  let calX = 0
  let calO = 0
  for (var i = 0; i < 3; i++) {
    let random = Math.floor(Math.random()*2)
    result.push([])
    for (var j = 0; j < 3; j++) {
      if(random == 0){
        if(calO == 5){
          result[i].push("X")
          calX++
        }
        else if(calO < 5){
          result[i].push("O")
          calO++
        }
      }
      else{
        if(calX == 5){
          result[i].push("O")
          calO++
        }
        else if(calX < 5){
          result[i].push("X")
          calX++
        }
      }
    }
  }
// return result;

var printBoard = ""
for(var i = 0; i<result.length; i++){
  printBoard += result[i].join(" | ")+ "\n";
}
return printBoard;


  // ...
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
