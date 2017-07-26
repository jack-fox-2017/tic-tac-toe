function tic_tac_toe_board () {
  var original = makeXO()
  var result = shuffleXO(original);
  var board = boardForm(result)
  return board;
}

function makeXO () {
  var input = ['x','x','x','x','o','o','o','o']
  var random = Math.floor(Math.random()*2)
  if (random ==1) {
    input.push('x');
  } else {
    input.push('o');
  }
  return input;
}

function shuffleXO(ori) {
  for(i=0; i<ori.length; i++) {
    var temp =0;
    var j = Math.floor(Math.random()*(i+1))
    temp = ori[i]
    ori[i] = ori[j]
    ori[j] = temp;
  }
  return ori;
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

console.log(tic_tac_toe_board())
