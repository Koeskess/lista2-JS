function carro(){
    var custoF=parseFloat(prompt("Informe o custo de fábrica do seu carro: "));
    var percentualD=custoF*0.28;
    var percentualI=custoF*0.45;
    var custoFinal=custoF+ percentualD+ percentualI;

    alert("O custo final do carro é: R$" + custoFinal);
} 