function combustivel(){
    var tempoG=parseInt(prompt("Informe o tempo gasto na viagem: "));
    var velocidade=parseFloat(prompt("Informe o tempo gasto na viagem: "));
    var distancia=tempoG*velocidade;
    var litrosUsados=distancia/12;
    alert("A velocidade média durante a viagem foi de:  " + velocidade);
    alert("O tempo gasto na viagem foi de: " + tempoG);
    alert("A distância percorrida foi de: " + distancia);
    alert("E a quantidade de litros usados na viagem foi de: " + litrosUsados);
    
}