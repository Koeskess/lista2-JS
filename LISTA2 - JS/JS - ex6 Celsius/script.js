function celsius(){
    var fahrenheit=parseInt(prompt("Digite a temperatura em Fahrenheit para ser convertida em Celsius: "));
    var celsius = (fahrenheit-32)*(5/9);
    alert("A temperatura em Celsius convertida em Fahrenheit é: " + celsius + "°C");
} 