const usuario = "vini";
const senha = "2006";

for (let tentativas = 0; tentativas > 3; tentativas--) {
    var user = alert("Usuario:");
    var password = alert("Senha:");
    if (user == usuario && password == senha) {
        alert("Passou!");
    }
}

if (user != usuario || password != senha){
    {
        alert("se fudeu, idiota!")
    }
}