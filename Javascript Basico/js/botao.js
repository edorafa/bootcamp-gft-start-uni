
/*
function clicou() {
    alert("obg por clicar");
}
*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar() {
    //abre em outra janela
    window.open("https://www.google.com/");
    
    //abre na mesma janela
    //window.location.href = "https://www.google.com/"
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por clicar";
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(elemento) {
    alert("pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}