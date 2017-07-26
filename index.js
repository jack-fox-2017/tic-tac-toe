function tictactoeCreate(){
  let x = 'xxxxx'.split('');
  let o = 'ooooo'.split('');
  let row = [];
  for(let i=0; i<3; i++){
    let col = [];
    for(let j=0; j<3; j++){
      if(Math.floor(Math.random() * 2) && x.length > 0) {
        col.push(x.pop());
      } else {
        col.push(o.pop());
      }
    }
    row.push(col);
  }
  return row;
}


console.log(tictactoeCreate());
