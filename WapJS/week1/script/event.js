window.onload=submit;

function submit(){
    document.getElementById("button").onclick=function(){
     document.getElementById("operation").innerHTML=sum

        alert(sum);
    }
}
function add(){
    let firstValue=document.getElementById("firstValue")
    let secoundValue=document.getElementById("secoundValue");
    let sum=parseInt(firstValue.value)+parseInt(secoundValue.value)

    alert(sum);
}
document.getElementById("operation").innerHTML=sum
