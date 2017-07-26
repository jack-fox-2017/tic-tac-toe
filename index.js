function ticTacToe(){
  let arr = [];
  let countX = 0;
  let countO = 0;

  for(let i = 0; i < 3; i++){
    arr.push([]);
    for(let j = 0; j < 3; j++){
      let random = Math.floor(Math.random()*2);
      if(random === 0){
        if(countX < 5){
          arr[i].push('x');
          countX++;
        } else{
          arr[i].push('o');
          countO++;
        }
      }
      else if(random === 1){
        if(countO < 5){
          arr[i].push('o');
          countO++;
        }else{
          arr[i].push('x');
          countX++;
        }
      }
    }
  };
  console.log('x =',countX);
  console.log('o =',countO);
  return arr;
}

console.log(ticTacToe());
