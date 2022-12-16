function salario(){
    var salario=parseFloat(prompt("Informe seu salário: "));
    var reajuste=parseInt(prompt("Informe quantos porcento você gostaria de receber de reajuste: "));
    var reajustePorc= reajuste/100*salario;
    var novosalario= salario + reajustePorc;
    alert("O salário com reajuste é: R$" + novosalario);
} 