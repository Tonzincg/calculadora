function insert(num) {
    var numResult = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numResult + num;

}
function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function calcular(){
    var calcResultado = document.getElementById('resultado').innerHTML;
    if(calcResultado)
    {
        document.getElementById('resultado').innerHTML = eval(calcResultado)
    }
    else
    {   
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
