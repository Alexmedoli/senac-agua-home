const postReport = require('../src/controllers/report.controller')

document.getElementById('fileUplpader').addEventListener('change', function (event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {

    document.getElementById('imagePreview').src = e.target.result;

    document.getElementById('imagePreview').style.display = 'block';

    document.getElementById('cameraIcon').style.display = 'none';
  };
  reader.readAsDataURL(file);
});

function openTab(tabIndex) {
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
  });

  var tabToShow = document.getElementById('tab' + tabIndex);
  tabToShow.classList.add('active');
}

function toggleNavbar() {
  var navbarItems = document.getElementById("navbarItems");
  navbarItems.style.display === "none" ? navbarItems.style.display = "flex" : navbarItems.style.display = "none";
}

function loadComponent(componentName) {
  let componentUrl;

  // Determine the URL of the component based on the button clicked
  switch (componentName) {
    case 'NOTIFICAÇÕES':
      componentUrl = 'usuario-notificacao.html';
      break;

    case 'REPORTAR':
      componentUrl = 'usuario-reportar.html';
      break;

    case 'EDITAR':
      componentUrl = 'usuario-editar.html';
      break;

    case 'SUCESSO':
      componentUrl = "usuario-sucesso.html";
      break;

    default:
      console.error('Componente inexistente');
      return;
  }


  // Load component --> caixa-mensagem em usuario.html
  fetch(componentUrl)
    .then(response => response.text())
    .then(data => {
      document.querySelector('.caixa-mensagem').innerHTML = data;
    })
    .catch(error => console.error('Error loading component:', error));


  buttonhandler(componentName);
}

function buttonhandler(componentName) {
  var buttons = document.querySelectorAll('.caixa-escolha-button button');
  buttons.forEach(function (btn) {
    btn.classList.remove('active');
  });

  var clickedButton = event.target;
  clickedButton.classList.add('active');
}

function açaoExecutada (key) {
  switch (key) {
    case 'PERFIL':
      alert('Perfil modificado com sucesso!')
      break;
    
    case 'REPORT':
      alert('Report criado com sucesso!')
      break;
  
    default:
      console.error('Componente inexistente');
      return;
  }
  
}


module.exports = {
  loadComponent,
  buttonhandler,
  açaoExecutada,
}