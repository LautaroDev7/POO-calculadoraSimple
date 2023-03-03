const botones = document.getElementsByTagName('button');
const resultados = document.getElementById('resultados');

class calculadora {
    constructor(){
    }
    sumar (num1 , num2){
        return parseFloat(num1) + parseFloat(num2);
        }
    restar (num1 , num2){
        return parseFloat(num1) - parseFloat(num2);
        }
    multiplicar ( num1 , num2){
        return parseFloat(num1) * parseFloat(num2);
    }
    dividir ( num1 , num2){
        return parseFloat(num1) / parseFloat(num2);
    }
}

for (const boton of botones){
    boton.addEventListener('click', function (e){
        const op = e.target.innerText;
        operacion(op);
    })
}
const calcu = new calculadora;

const operacion = event => {
    if (event == 'Reset'){
        let nHijos =document.getElementById("resultados").children.length;
        for (let i=0;i<nHijos;i++){
            document.getElementById("resultados").children[0].remove();
        }
    return;
    }
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    if(!isNaN(num1) && !isNaN(num2) && num1 != '' && num2 !=''){
        let resultado = 0;
        switch(event){
            case '+' :
                resultado = calcu.sumar (num1,num2);
                break;

            case '-' :
                resultado = calcu.restar (num1,num2);
                break;
                
            case '/' :
                resultado = calcu.dividir (num1,num2);
                break;                                 
                
            case '*' :
                resultado = calcu.multiplicar(num1,num2);
                break;             
        } 
        let divResultado = document.createElement('div');
        divResultado.classList.add('resultado');
        divResultado.textContent = ( ' El resultado de ' + num1 + ' ' + event + ' ' + num2 + ' es igual a : ' + resultado );
        resultados.prepend(divResultado);

    }
}