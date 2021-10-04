//4. a) sum Digits 
function num(numbers){
    let sum=0;
    let result=numbers;
    while(result > 0){
        sum+=result%10;
        result=Math.floor(result/10)
    }
    return sum;
}
console.log(num(1234));
////////////////////////////////////////////////////////////////////////////////////
//b) multi Digits
function products(nums){
    let product=1;
    let result1=nums;
    while(result1 > 0){
        product*=result1%10;
        result1=Math.floor(result1/10)
    }
    return product;
}
console.log(products(102));

//////////////////////////////////////////

