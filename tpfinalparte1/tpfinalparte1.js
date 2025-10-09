let escena = -1; // Comienza en -1 para la pantalla de inicio
let imagenes = [];
let sonido;
let inicio;

// --- No hay cambios en esta sección ---
function preload() {
 inicio = loadImage(`data/inicio.png`); 
  for (let i = 0; i < nombresImagenes.length; i++) {
    imagenes[i] = loadImage(nombresImagenes[i]);
  }
 sonido = loadSound('data/pulgarcin.mp3');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  clear();

  if (escena === -1) {
    pantallaInicio();
    return; // Dibuja la UI de Inicio y sale
  }
  
  if (escena === -2) {
    pantallaCreditos();
    return; // Dibuja la UI de Créditos y sale
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
  text(escenas[escena][0], 20, 20, width - 40, height - 80); 

  // Dibuja los botones de la escena de juego
  dibujarBotones();
}
