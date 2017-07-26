function tic(arr){

let result =[];
let countX = 0;
let countO = 0;

for (let i =0; i < 3; i++)
{
  let newArr =[];

  for (let j =0; j < 3 ; j++)
    {
      let rand = Math.floor(Math.random()*2);
      if (countX == 5)
        {
           rand = 1;
        }
      else if (countO ==5)
        {
          rand =0;
        }
      newArr.push(arr[rand]);
      if (arr[rand]==='X'){
        countX++
      }
      if (arr[rand]==='O'){
        countO++
      }
    }
    result.push(newArr);
}
return result;
}

console.log(tic(["X","O"]))
