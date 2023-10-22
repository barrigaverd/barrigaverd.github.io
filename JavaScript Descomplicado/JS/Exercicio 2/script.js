document.getElementById("calculate").addEventListener("click", calcVenda);

function calcVenda(){
    let pUnit = document.getElementById("price");
    let qVendida = document.getElementById("quantity");
    let desc = document.getElementById("discount");

    verificarCampos(pUnit);
    verificarCampos(qVendida);
    verificarCampos(desc);

}

function verificarCampos(i){
    if(i.value.trim() === ""){
        i.style.background = "yellow";
        alert("Preencha o campo em destaque!");
        return false;
    }else{
        i.style.background = "white";
        return true;
    }

}