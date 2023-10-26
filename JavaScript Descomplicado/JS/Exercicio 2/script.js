document.getElementById("calculate").addEventListener("click", calcVenda);

function calcVenda(){
    let pUnit = document.getElementById("price");
    let qVendida = document.getElementById("quantity");
    let desc = document.getElementById("discount");

    validarPreço(pUnit);
    validarQuantidade(qVendida);
    validarPreço(desc);

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

function validarQuantidade(i){
    let erro = false;
    if (isNaN(i.value) === true){
        erro = true;
    }else{
        let nQtd = parseInt(i.value);
        if(nQtd < 1 || nQtd > 999){
            erro = true;
        }
    }

    if (erro === true){
        i.style.background = "red";
        alert("A Quantidade deve ser um numero entre 1 e 999!")
    }else{
        i.style.background = "white";
    }
    
}

function validarPreço(i){
    let erro = false;
    if (isNaN(i.value) === true){
        erro = true;
    }else{
        let nUnit = parseFloat(i.value);
        if(nUnit <= 0.0){
            erro = true;
        }else{
            debugger
            i.value = nUnit.toFixed(2);
        }
    }

    if (erro === true){
        i.style.background = "red";
        alert("O Preço unitário deve ser um numero maior que zero")
    }else{
        i.style.background = "white";
    }
}