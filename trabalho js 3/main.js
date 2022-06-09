const user = "vini";
const password = "321";

for (let tentativas = 3; tentativas > 0; tentativas--) {
    var sentry = prompt("Coloque seu usuário");
    var checker = prompt("Coloque sua senha");
    if (sentry == user && checker == password) {
        alert("Concluido!");
        break;
    }
    else {
        alert("Usuário e/ou senha inválido(s)!")
    }
}

if (sentry != user || checker != password) {
    alert("Você foi bloqueado!")
}
