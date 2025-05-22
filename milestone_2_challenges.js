// 1. sum of possitive numbers
function sumOfPositives(num) {
  let sum = 0;
  for (let i = 0; i <= num.length; i++) {
    if (num[i] > 0) {
      sum += i;
    }
  }

  return sum;
}
console.log(sumOfPositives([1, -3, -4, -6, 3]));

//finding the maximam value in an array

function findMax(array){
    let great=[0]
    let i=0;
    while(i< array.length)
    {
        if(array[i]>great)
        {
            great=array[i]
        }
        i++;
    }
    return great;
}
let list=[7,8,9,10];
console.log(findMax(list))

//election winner 
