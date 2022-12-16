function votoss(){
    var eleitor=parseInt(prompt("Informe o total de eleitores: "));
    var vbranco=parseInt(prompt("Informe o total de votos em branco? "));
    var vnulos=parseInt(prompt("Informe o total de votos nulos: "));
    var vvalidos=parseInt(prompt("Informe o total de votos válidos: "));
    var porcbrancos= vbranco/eleitor*100;
    var porcnulos= vnulos/eleitor*100;
    var porcvalidos= vvalidos/eleitor*100;
    alert("Porcentagem de votos em branco: " + porcbrancos + "%");
    alert("Porcentagem de votos nulos: " + porcnulos + "%");
    alert("Porcentagem de votos válidos: " + porcvalidos + "%");
} 