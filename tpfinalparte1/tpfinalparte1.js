let escena = -1; // Comienza en -1 para la pantalla de inicio
let imagenes = [];
let sonido;
let inicio;
let textos;

// --- CONSTANTES GLOBALES (CORREGIDAS a 250px) ---
const BUTTON_W_GAME = 250; 
const BUTTON_W_UI = 150; 
const BUTTON_H = 40;


// --- Código de Carga (Mantenido) ---
function preload() {
 inicio = loadImage(`data/inicio.png`); 
 textos = loadStrings("data/textos.txt"); 
 sonido = loadSound('data/pulgarcin.mp3');
  for (let i = 0; i < nombresImagenes.length; i++) {
    imagenes[i] = loadImage(nombresImagenes[i]);
  }
 // sonido = loadSound('data/pulgarcin.mp3'); // Descomentar si usas p5.sound
}

function setup() {
  createCanvas(640, 480);
  // print(textos[0]);
}

function draw() {
  clear();

  if (escena === -1) {
    pantallaInicio();
    return;
  }
  
  if (escena === -2) {
    pantallaCreditos();
    return;
  }

  // --- Lógica de Escenas de Juego (escena >= 0) ---

  // Dibuja la imagen de fondo
  if (imagenes[escena]) {
    image(imagenes[escena], 0, 0, width, height);
  } else {
    fill(180);
    rect(0, 0, width, height);
    fill(100);
    textAlign(CENTER, CENTER);
    text("IMAGEN PENDIENTE (escena" + escena + ".png)", width / 2, height / 2);
  }

  // Dibuja el texto de la escena
  fill(255);
  textAlign(LEFT, TOP);
  textSize(18);
  // 🎯 CAMBIO CLAVE: Usamos el texto de textos[escena]
  if (textos && textos[escena]) {
    text(textos[escena], 20, 20, width - 40, height - 100);  
  } else {
     text("Cargando texto de la escena...", 20, 20);
  }

  // Dibuja los botones de la escena de juego
  dibujarBotones();
}
