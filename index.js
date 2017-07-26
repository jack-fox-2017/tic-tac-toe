function nestedArrayTictac(row, col){

  let tmp = [];
  let indxX = 0 ;
  let indxO = 0 ;


  for(let i=0; i<row; i++){
    let tmp_i = [];

    for(let j=0; j<col; j++){
        if(Math.floor(Math.random()*2)==1 && indxX < 5 || indxO == 5 ){
          tmp_i.push('X');
          indxX ++;
        }else {
          tmp_i.push('O');
          indxO ++;
        }

    }
    tmp.push(tmp_i);
  }

  return tmp;
}

console.log(nestedArrayTictac(3, 3));
