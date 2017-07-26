
function ticToc (row,col) {
  var arr = []
  var a = 'X';
  var b = 'o';
  var jumlahX = 0
  var jumlahO = 0

  for (var i = 0; i<3 ;i++) {
    var tampung = []

    for (var j = 0 ; j<3 ; j++){
      var random = Math.floor(Math.random()*2 )

      if (random == 0 ) {
        if (jumlahX < 5 ) {
            tampung.push(a);
            jumlahX += 1
        } else {
          tampung.push(b);
          jumlahO += 1
        }
      }else {
        if (jumlahO < 5){
          tampung.push(b);
          jumlahO += 1
        } else {
          tampung.push(a)
          jumlahX += 1
        }
      }
    }
    arr.push (tampung);
  }

  return arr
}

console.log(ticToc());
