function volumeoleo(){
    var raio=parseFloat(prompt("Digite o raio da lata de óleo: "));
    var altura=parseFloat(prompt("Digite a altura da lata de óleo: "));
    var volume = Math.PI*raio^2*altura;
    alert("O volume da lata de óleo é: " + volume);
} 