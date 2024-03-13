

document.getElementById('fileUplpader').addEventListener('change', function(event){
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {

        document.getElementById('imagePreview').src = e.target.result;

        document.getElementById('imagePreview').style.display = 'block';

        document.getElementById('cameraIcon').style.display = 'none';
    };
    reader.readAsDataURL(file);
});

function openTab(tabIndex) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });
  
    var tabToShow = document.getElementById('tab' + tabIndex);
    tabToShow.classList.add('active');
  }

  function toggleNavbar() {
    var navbarItems = document.getElementById("navbarItems");
    navbarItems.style.display === "none" ? navbarItems.style.display = "flex" : navbarItems.style.display = "none";
  }

  function validarSenha(valor1, valor2)
{
    var senha1 = document.getElementById(valor1).value;
    var senha2 = document.getElementById(valor2).value;
    var error = document.getElementById('Erro');
		
    if (senha1 == senha2)
    {
        document.getElementById('formRec').action = '/api/usuarios/recuperar';
    }
    else
    {
      error.innerHTML = 'Senhas diferentes';
    }
}
