function tictactoe(n){
  var arr = [];
  var jumX = 0;
  var jumO = 0;
  var x = 'X';
  var o = 'O';


  for(i=0;i<n;i++){
    arr.push([])

    for(j=0;j<n;j++){
      var xo = ['X','O'];
      var acak = Math.floor(Math.random()*2);

      if(acak==0){
        if(jumX<5){
          arr[i].push(x)
          jumX+=1
        }else{
          arr[i].push(o)
          jumO+=1
        }
      }
      else{
        if(jumO<5){
          arr[i].push(o)
          jumO+=1
        }else{
          arr[i].push(x)
          jumX+=1
        }
      }
    }
  }

return arr
}

console.log(tictactoe(3))
//disini dapet X / O

// km harus ada variabel, untuk simpan jumlah X
// km harus ada variabel, untuk simpan jumlah O
// dapet acak..sebelum push, cek jumlah X / 0 nya
// kalo memenuhi syarat, boleh di push..kalo ga, push kebalikannya
// cek apa yang di push, apabila X, jumlah X +1, selain itu jumlah O +1
