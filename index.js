function ticToc() {
  let arr = []
  let tamp = 0
  let tampO = 0

//membuat nasted array sebanyak 7
  for (var i = 0; i<3; i++ ){
    arr.push([])
    for (var z = 0; z < 3; z++) {
      let random = Math.floor(Math.random()*2)

      if (random == 1) {
        if (tamp < 5) {
          arr[i].push("X")
          tamp = tamp+1
        }else {
          arr[i].push("O")
        }

      } else if (random == 0) {
        if (tampO < 5) {
          arr[i].push("O")
          tampO = tampO+1
        }else {
          arr[i].push("X")
        }
      }
    }
  }
  return arr
}

console.log(ticToc());


/*
function ticToc() {
  let arr = []
  let random = Math.floor(Math.random() * 2 + 4)
  let tamp;
  let hasil = []
  let result = ""

//untuk membatasi X dan O ==>>[ 'X', 'X', 'X', 'X', 'O', 'O', 'O', 'O', 'O' ] hasil nya bisa xberjumlah 5[ 'X', 'X', 'X', 'X', 'X', 'O', 'O', 'O', 'O' ]
  for (var i = 0; i < 9; i++) {
    if (i < random) {
      arr.push('X')
    } else {
      arr.push('O')
    }
  }
// random X dan 0
  for (let i = 0; i < arr.length - 1; i++) {
    let random2 = Math.floor(Math.random() * ((arr.length - 1) - (i + 1))) + (i + 1)
    tamp = arr[i]
    arr[i] = arr[random2]
    arr[random2] = tamp
    }
// membuat arr menjadi nasted array
  for (let i = 0; i < arr.length; i += 3) {
    hasil.push(arr.slice(i, i + 3))
  }
    console.log(hasil);
// merubah nasted array m
  for (var i = 0; i < hasil.length; i++) {
    result += hasil[i].join("|") + "\n"
  }
  return result
}
console.log(ticToc());
*/
