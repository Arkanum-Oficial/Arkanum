const Nome = document.querySelector('#nome');
const Senha = document.querySelector('#senha');
const btn_Login = document.querySelector("#EntraLogin");



document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o recarregamento da página
   
});
btn_Login.addEventListener('click', () => {
    if(Nome.value == 'ayano15k' && Senha.value == 'ayano15k@2025') {
        alert(`Bem Vindo de volta ${Nome.value}`);
        window.location.href = '../../sistema/usuarios/Ayano15k/Ayano15k.html';
    }else{
        alert('Usuario ou senha incorreto')
    }
})
