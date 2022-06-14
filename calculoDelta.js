const  numA  =  document.querySelector("#numA"); 
const  numB  =  document.querySelector("#numB"); 
const  numC  =  document.querySelector("#numC"); 
const  botao  =  document.querySelector("#botao"); 
const  botaoBascara  = document.querySelector("#botaoBascara"); 
const  botaomult = document.querySelector("#botaomult");
const  botaodiv = document.querySelector("#botaodiv");

function fdiv(){
    let divisao = numA.value / numB.value;
    return divisao
}

function div(){
    let divisao = fdiv();
    alert(`Dividindo os dois números (A:B) obtemos: ${divisao}`)
}

function fmult(){
    let multiplicaçao = numB.value  *  numA.value
    return multiplicaçao;
}

function multiplo(){
    let multiplicaçao = fmult();
    alert(`Multiplicando os dois números obtemos: ${multiplicaçao}`)
}

function  fDelta() {
    let  delta  =  numB.value  **  numB.value  -  4  *  numA.value  *  numC.value;
    return delta; 
} 

function calculaDelta(){
    let delta = fDelta();   
    alert(`Delta:  ${delta}`); 
} 

function  calculaBascara() {
    let  delta  =  fDelta();

    if(numA.value  ==  0){
        alert("A  não  pode  ser  0!");
        return  0;
    }

    if(delta  <  0){
        alert("Possui  raízes  complexas");
    }
    else {
       let  x1,  x2;
       x1  =  (-numB.value  +  delta  **  (1/2))/(2*numA.value);
       x2  =  (-numB.value  -  delta  **  (1/2))/(2*numA.value);  
       alert(`x1: ${x1},  x2:  ${x2}`);
    } 
} 

botao.onclick  =  calculaDelta;
botaoBascara.onclick  =  calculaBascara; 
botaomult.onclick = multiplo;
botaodiv.onclick = div;