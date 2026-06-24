function login() {
    const usuario = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (usuario === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }
    alert("Login realizado com sucesso!");
    window.location.href = "indexp.html";
}