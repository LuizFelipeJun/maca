var x = 0;
var y = 0;

var drawApple = "";
var apple = "";

var speakData = "";

var number = 0

var laguraDaTela = 0;
var alturaDaTela = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var canvas;

var dadoDaFala;

var apiTextoPraFala;

var falaConvertida;

function preload() {
  apple = loadImage("apple.png");
}

function start() {
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
  console.log("começou");
} 
 
recognition.onresult = function(event) {
    console.log(event);
    console.log("aa");
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
    number = Number(content);
    if(Number.isInteger(number)) {
      console.log(number);
      document.getElementById("status").innerHTML = "A maça começou a ser desenhada";
      drawApple = "Desenho";
    }else {
      document.getElementById("status").iinerHTML = "O numero não foi reconhecido";
    }

}

function setup() {
  laguraDaTela = window.innerWidth;
  alturaDaTela = window.innerWidth;
  canvas = createCanvas(laguraDaTela, alturaDaTela - 150);
  canvas.position(0, 150);
}

function draw() {
  if(drawApple == "Desenho") {
    for(var m = 1; m <= number; m++) {
      x = Math.floor(Math.random() * 1200);
      y = Math.floor(Math.random() * 800);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = number + " maçãs desenhadas";
    drawApple = "";
    dadoDaFala = number = " maçãs desenhadas";
    speak();
  }
}

function speak() {
    apiTextoPraFala = window.speechSynthesis;
    falaConvertida = new SpeechSynthesisUtterance(dadoDaFala);
    apiTextoPraFala.speak(falaConvertida);
    dadoDaFala = "";
}