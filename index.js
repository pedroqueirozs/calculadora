const teclasNum =[...document.querySelectorAll(".num")];
const teclasOp =[...document.querySelectorAll(".op")];
const teclaRes =[...document.querySelectorAll(".res")];
const display = document.getElementById("display");

function numeroNtela() {
    alert("funcionando")
 }
// teclasNum.forEach((el) => {
//     el.addEventListener("click",(evt)=>{
// alert("ola")
//     })
// })
teclasNum.addEventListener("click",numeroNtela);