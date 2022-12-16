function prestacaoo(){
    var valor=parseFloat(prompt("Informe o valor da prestação: "));
    var tempoG=parseInt(prompt("Informe o tempo de atraso em dias: "));
    var taxa = 11;
    var prestacao=valor+(valor*taxa/100)*tempoG;
    alert("O valor da prestação com juros é de:  " + prestacao);
}