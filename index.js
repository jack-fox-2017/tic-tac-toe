function tic_tac_toe_board () {
  var result = makeXO()
  var board = boardForm(result)
  return board;
}

function makeXO () {
  var input = []
  var countX=0;
  var countO=0;
  while (countX <5 && countO<5) {
    var random = Math.floor(Math.random()*2)
    if (random ==1) {
      input.push('x');
      countX ++;
      // console.log('xxxx');
      } else {
      input.push('o');
      countO ++;
      // console.log('ooooo');
      }
  }

  if (countO == 5){
    // console.log('--count o : '+countO);
    // console.log('--count x : '+countX);
    while (input.length<9) {
      input.push('x');
      countX++;
    }
  }

    if (countX == 5){
      // console.log('--count o : '+countO);
      // console.log('--count x : '+countX);
      while (input.length<9) {
        input.push('o');
        countO++;
      }
    }
                        // console.log('--count o : after '+countO);
                        // console.log('--count x : after'+countX);
  return input;
}

function boardForm(prefinal) {
  var final = []
  var str =[];
  for (i=0; i<prefinal.length; i++) {
    str.push(prefinal[i]);
    if (str.length == 3) {
      final.push(str);
      str=[];
    }
  }
  return final;
}

console.log(tic_tac_toe_board());

// function shuffleXO(ori) {
//   for(i=0; i<ori.length; i++) {
//     var temp =0;
//     var j = Math.floor(Math.random()*(i+1))
//     temp = ori[i]
//     ori[i] = ori[j]
//     ori[j] = temp;
//   }
//   return ori;
// }
