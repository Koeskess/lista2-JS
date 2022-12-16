function idade(){
    var ano=parseInt(prompt("Digite quantos anos você tem: "));
    var mes=parseInt(prompt("Digite quantos meses se passaram desde o seu último aniversário: "));
    var dia=parseInt(prompt("Digite quantos dias se passaram desde o seu último aniversário: "));
    var total= (ano*365) + (mes*30) + dia;
    alert("A quantidade de dias que você viveu é: " + total);
} 