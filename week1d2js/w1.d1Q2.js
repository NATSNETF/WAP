//2 defining table and function

function calulateBalance(p,r,t){
    let cInter=0;
 
    let m=12*t

    for(let i=1; i<=m;i++){
        cInter = (p*(1 + ((r/100)/12))**m);
    }
    return cInter;


}
console.log(calulateBalance(100,10,1));
