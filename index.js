class TicTacToe{

  tictac() {
    let printBoard =[]
    let countX = 0;
    let countO = 0;
    for(let i = 0; i < 3; i++){
      let printRow = []
      for(let j = 0; j < 3; j++){
        let take = Math.floor(Math.random()*2)
        if(take === 1){
          if(countO < 4){
            printRow.push('O')
            countO += 1
          } else {
            printRow.push('X')
          }
        } else {
          if(countX < 4){
            printRow.push('X')
            countX += 1
          } else {
            printRow.push('O')
          }
        }
      }
      printBoard.push(printRow)
    }
    return printBoard
  }
}

let play = new TicTacToe()
console.log(play.tictac());
