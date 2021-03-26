// JS para o funcionamento da página clientarea.html
// Dependendo da opção escolhida na questão (Já é cliente?) irá ser revelado a form destinada ao registo ou ao login
function showForm() {
  var answerLogin = document.getElementById("login");
  var formRegister = document.getElementById("formRegister");
  var formLogin = document.getElementById("formLogin");
  if (answerLogin.checked == true) {
    formLogin.style.display = "block";
    formRegister.style.display = "none";
  } else {
    formRegister.style.display = "block";
    formLogin.style.display = "none";
  }
}

$(document).ready(function () {
  // JS para o funcionamento do menu de navegação
  // Em dispositivos moveis o menu de navegação será representado por um icon (menu-bars) quando ocorre um click será revelado o conteudo do menu de navegação
  $(".topNavigation > i").on("click", function () {
    if ($(".menuNavigation").css("display") == "none") {
      $(".menuNavigation").css("display", "inherit");
      $(".topNavigation").css("border-bottom", "none");
      $(".topNavigation > i").css("color", "white");
    } else {
      $(".menuNavigation").css("display", "none");
      $(".topNavigation").css("border-bottom", "2px solid var(--primary)");
      $(".topNavigation > i").css("color", "var(--primary)");
    }
  });

  // JS para o funcionamento do dropdown (Categorias) do menu de navegação da página
  // Caso o dropdown (Categorias) esteja fechado quando ocorre um click será revelado o conteudo dentro do dropdown
  $("#btnDropdown").on("click", function () {
    if ($("#contentDropdown").css("display") == "none") {
      $("#menuDropdown").css("background-color", "var(--primary)");
      $("#contentDropdown").css("display", "inherit");
      $("#btnDropdown i").removeClass("fas fa-angle-down");
      $("#btnDropdown i").addClass("fas fa-angle-up");
    } else {
      $("#menuDropdown").css("background-color", "inherit");
      $("#contentDropdown").css("display", "none");
      $("#btnDropdown i").removeClass("fas fa-angle-up");
      $("#btnDropdown i").addClass("fas fa-angle-down");
    }
  });

  // JS para os botões (Perguntas) da página "faq.html" quando ocorre um click será revelado a resposta a essa pergunta
  // Este código repete-se desde do #hiddenQuestion1 até #hiddenQuestion5
  $("#hiddenQuestion1").on("click", function () {
    if ($("#hiddenAnswer1").css("display") == "none") {
      $("#hiddenAnswer1").css("display", "block");
      $("#hiddenQuestion1 i").removeClass("fas fa-angle-down");
      $("#hiddenQuestion1 i").addClass("fas fa-angle-up");
    } else {
      $("#hiddenAnswer1").css("display", "none");
      $("#hiddenQuestion1 i").removeClass("fas fa-angle-up");
      $("#hiddenQuestion1 i").addClass("fas fa-angle-down");
    }
  });

  $("#hiddenQuestion2").on("click", function () {
    if ($("#hiddenAnswer2").css("display") == "none") {
      $("#hiddenAnswer2").css("display", "block");
      $("#hiddenQuestion2 i").removeClass("fas fa-angle-down");
      $("#hiddenQuestion2 i").addClass("fas fa-angle-up");
    } else {
      $("#hiddenAnswer2").css("display", "none");
      $("#hiddenQuestion2 i").removeClass("fas fa-angle-up");
      $("#hiddenQuestion2 i").addClass("fas fa-angle-down");
    }
  });

  $("#hiddenQuestion3").on("click", function () {
    if ($("#hiddenAnswer3").css("display") == "none") {
      $("#hiddenAnswer3").css("display", "block");
      $("#hiddenQuestion3 i").removeClass("fas fa-angle-down");
      $("#hiddenQuestion3 i").addClass("fas fa-angle-up");
    } else {
      $("#hiddenAnswer3").css("display", "none");
      $("#hiddenQuestion3 i").removeClass("fas fa-angle-up");
      $("#hiddenQuestion3 i").addClass("fas fa-angle-down");
    }
  });

  $("#hiddenQuestion4").on("click", function () {
    if ($("#hiddenAnswer4").css("display") == "none") {
      $("#hiddenAnswer4").css("display", "block");
      $("#hiddenQuestion4 i").removeClass("fas fa-angle-down");
      $("#hiddenQuestion4 i").addClass("fas fa-angle-up");
    } else {
      $("#hiddenAnswer4").css("display", "none");
      $("#hiddenQuestion4 i").removeClass("fas fa-angle-up");
      $("#hiddenQuestion4 i").addClass("fas fa-angle-down");
    }
  });

  $("#hiddenQuestion5").on("click", function () {
    if ($("#hiddenAnswer5").css("display") == "none") {
      $("#hiddenAnswer5").css("display", "block");
      $("#hiddenQuestion5 i").removeClass("fas fa-angle-down");
      $("#hiddenQuestion5 i").addClass("fas fa-angle-up");
    } else {
      $("#hiddenAnswer5").css("display", "none");
      $("#hiddenQuestion5 i").removeClass("fas fa-angle-up");
      $("#hiddenQuestion5 i").addClass("fas fa-angle-down");
    }
  });
});
