// Función auxiliar necesaria para detectar si el mouse está sobre un área
function mouseDentro(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

// Dibuja un botón individual con efecto hover
function dibujarBoton(x, y, w, h, texto) {
  let isHover = mouseDentro(x, y, w, h);
  fill(isHover ? color(180, 150, 100) : color(120, 60, 32)); 
  noStroke();
  rect(x, y, w, h, 8);
  push();
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2);
  pop();
}

// Dibuja los botones de las escenas de JUEGO
function dibujarBotones() {
  let e = escenas[escena];
  const buttonW = BUTTON_W_GAME; // 250px
  const buttonH = BUTTON_H;
  const buttonY = height - 60;

  // Botón 1
  if (e[0] !== "") { // e[0] es el texto del botón
    // Cálculo de posición: 250px de ancho + 20px de espacio al centro
    let x1 = width / 2 - buttonW - 20; 
    dibujarBoton(x1, buttonY, buttonW, buttonH, e[0]);
  }

  // Botón 2
  if (e[2] !== "") { // e[2] es el texto del botón
    let x2 = width / 2 + 20; // 20px a la derecha del centro
    dibujarBoton(x2, buttonY, buttonW, buttonH, e[2]);
  }
}

// Cambia la escena, soporta -1 (Inicio) y -2 (Créditos)
function cambiarEscena(nueva) {
  if (nueva >= -2 && nueva < escenas.length) { 
    escena = nueva;
  }
  if (nueva === -1 && typeof sonido !== 'undefined' && sonido && sonido.isPlaying()) {
      sonido.stop();
  }
}

function pantallaInicio() {
  const buttonW = BUTTON_W_UI; // 150px
  const buttonH = BUTTON_H;
  const x_btn = width / 2 - buttonW / 2; // Centrado: width/2 - 75
  
  fill(30, 40, 50); 
  rect(0, 0, width, height);
  if (inicio) {
    image(inicio, 0, 0, width, height);
  }
  push();
  textAlign(CENTER, CENTER);
  
  textSize(25);
  fill(255, 255, 255);
  stroke(20, 20, 20);
  strokeWeight(3);
  text("LAS AVENTURAS DE PULGARCITO", width / 2, height / 4);

  dibujarBoton(x_btn, height / 2 - 20, buttonW, buttonH, "INICIAR");
  dibujarBoton(x_btn, height / 2 + 40, buttonW, buttonH, "CRÉDITOS");
  pop();
}

function pantallaCreditos() {
    const buttonW = BUTTON_W_UI; // 150px
    const buttonH = BUTTON_H;
    const x_btn = width / 2 - buttonW / 2; // Centrado: width/2 - 75
    
    fill(40, 60, 80); 
    rect(0, 0, width, height);
    if (inicio) {
    image(inicio, 0, 0, width, height);
  }
    push();
    textAlign(CENTER, CENTER);
    fill(255);
    noStroke();

    textSize(28);
    text("CRÉDITOS", width / 2, height / 4);

    textSize(16);
    textAlign(LEFT, TOP);
    let creditText = "MANUEL CANSECO \n COMISION 5"
    text(creditText, width / 2 - 150, height / 3 + 20, 300, 200);

    dibujarBoton(x_btn, height - 80, buttonW, buttonH, "VOLVER");
    pop();
}

function mousePressed() {
  // Usamos las constantes globales para los cálculos de la UI
  const buttonW_UI = BUTTON_W_UI; // 150px
  const buttonH_UI = BUTTON_H; 
  const x_btn_UI = width / 2 - buttonW_UI / 2; // Centrado: width/2 - 75

  // --- LÓGICA DE LA PANTALLA DE INICIO (escena -1) ---
  if (escena === -1) {
    // 1. Botón INICIAR
    if (mouseDentro(x_btn_UI, height / 2 - 20, buttonW_UI, buttonH_UI)) {
      cambiarEscena(0); 
      if (typeof sonido !== 'undefined' && sonido && !sonido.isPlaying()) {
          sonido.loop(); 
      }
    }
    
    // 2. Botón CRÉDITOS
    if (mouseDentro(x_btn_UI, height / 2 + 40, buttonW_UI, buttonH_UI)) {
      cambiarEscena(-2); 
    }
    return;
  }

  // --- LÓGICA DE LA PANTALLA DE CRÉDITOS (escena -2) ---
  if (escena === -2) {
    let y_btn = height - 80;
    // Botón VOLVER
    if (mouseDentro(x_btn_UI, y_btn, buttonW_UI, buttonH_UI)) {
      cambiarEscena(-1); 
    }
    return; 
  }
  
  // --- LÓGICA DE LAS ESCENAS DE JUEGO (escena >= 0) ---
  let e = escenas[escena];
  // Usamos las constantes globales para los cálculos del juego
  const buttonW = BUTTON_W_GAME; // 250px
  const buttonH = BUTTON_H; 
  const buttonY = height - 60;

  // Botón 1 (Juego)
  if (e[0] !== "") { 
    let x1 = width / 2 - buttonW - 20; 
    if (mouseDentro(x1, buttonY, buttonW, buttonH)) {
      cambiarEscena(e[1]); // e[1] es el destino del Botón 1
    }
  }

  // Botón 2 (Juego)
  if (e[2] !== "") {
    let x2 = width / 2 + 20; 
    if (mouseDentro(x2, buttonY, buttonW, buttonH)) {
      cambiarEscena(e[3]); // e[3] es el destino del Botón 2
    }
  }
}
