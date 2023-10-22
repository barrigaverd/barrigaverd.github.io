document.querySelector("#calc").addEventListener("click", calcMedia)

function calcMedia(){
    let val1 = document.querySelector("#v1").value;
    let val2 = document.querySelector("#v2").value;
    let val3 = document.querySelector("#v3").value;
    let val4 = document.querySelector("#v4").value;
    
    let res = document.querySelector("#res");

    res.innerText = (parseFloat(val1) + parseFloat(val2) + parseFloat(val3) + parseFloat(val4)) / 4;
}