function AddNum(){
    let num1=document.getElementById('first_num').value
    let num2=document.getElementById('sec_num').value
num1=parseFloat(num1)
num2=parseFloat(num2)
let h2=document.getElementById('result')
res=num1+num2;
h2.innerHTML="Result:" +res

}
function SubNum(){
    let num1=document.getElementById("first_num").value
    let num2=document.getElementById("sec_num").value
    let h2=document.getElementById("result")
    res=num1-num2
    h2.innerHTML="Result :" +res
}
function MultipicationNum(){
    let num1=document.getElementById("first_num").value
    let num2=document.getElementById("sec_num").value
    let h2=document.getElementById("result")
    res=num1*num2
    h2.innerHTML="Result:" +res
}
function DivNum(){
    let num1=document.getElementById("first_num").value
    let num2=document.getElementById("sec_num").value
    let h2=document.getElementById("result")
    res=num1/num2
    h2.innerHTML="Result:" +res
}
function RemNum(){
    let num1=document.getElementById("first_num").value
    let num2=document.getElementById("sec_num").value
    let h2=document.getElementById("result")
    res=num1%num2
    h2.innerHTML="Result:" +res
}
function PowNum(){
    let num1=document.getElementById("first_num").value
    let num2=document.getElementById("sec_num").value
    let h2=document.getElementById("result")
    res=num1**num2
    h2.innerHTML="Result:" +res
}