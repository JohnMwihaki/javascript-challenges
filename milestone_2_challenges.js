// 1. sum of possitive numbers
function sumOfPositives(num){
    let sum=0;
    for(let i=0;i<=num.length;i++){
        if(num[i]>0)
        {
            sum+=i
        }

    }
    
return sum;
}
console.log(sumOfPositives([1,-3,-4,-6,3]))

