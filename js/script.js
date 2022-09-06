let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Declaração de variáveis
function dados() {
var result = document.getElementById('result');
// JSON 
var dados = {
    'nome': document.getElementById('nome').value, 
    'email': document.getElementById('email').value,
    'telefone': document.getElementById('telefone').value,
    'sexo': document.getElementById('sexo').value,
    'nascimento': document.getElementById('nascimento').value,
            };
// output
result.innerHTML = 'Nome: ' + dados.nome + '<br/>E-mail: ' + dados.email +'<br/>Telefone: ' + dados.telefone + '<br/>Sexo: ' + dados.sexo + '<br/>Nascimento: ' + dados.nascimento;       
     }


 
  