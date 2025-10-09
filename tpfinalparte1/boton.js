// --- FUNCIONES AUXILIARES ---

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
  const buttonW = 200;
  const buttonH = 40;
  const buttonY = height - 60;

  // Botón 1
  if (e[1] !== "") {
    let x1 = width / 2 - buttonW - 20;
    dibujarBoton(x1, buttonY, buttonW, buttonH, e[1]);
  }

  // Botón 2
  if (e[3] !== "") {
    let x2 = width / 2 + 20;
    dibujarBoton(x2, buttonY, buttonW, buttonH, e[3]);
  }
}

// Cambia la escena, soporta -1 (Inicio) y -2 (Créditos)
function cambiarEscena(nueva) {
  if (nueva >= -2 && nueva < escenas.length) { 
    escena = nueva;
  }
  if (nueva === -1 && sonido && sonido.isPlaying()) {
      sonido.stop();
  }
}

// --- PANTALLAS DE INTERFAZ (UI) ---

function pantallaInicio() {
  const buttonW = 150;
  const buttonH = 40;
  const x_btn = width / 2 - buttonW / 2;
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
    const buttonW = 150;
    const buttonH = 40;
    const x_btn = width / 2 - buttonW / 2; 
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
  const buttonW_UI = 150;
  const buttonH_UI = 40;
  const x_btn_UI = width / 2 - buttonW_UI / 2;

  // --- LÓGICA DE LA PANTALLA DE INICIO (escena -1) ---
  if (escena === -1) {
    // 1. Botón INICIAR
    if (mouseDentro(x_btn_UI, height / 2 - 20, buttonW_UI, buttonH_UI)) {
      cambiarEscena(0); // Inicia el juego en escena 0
      
      // 🎶 INICIA LA MÚSICA AQUÍ, DENTRO DEL CLIC DE INICIAR
      if (sonido && !sonido.isPlaying()) {
          sonido.loop(); 
      }
    }
    
    // 2. Botón CRÉDITOS
    if (mouseDentro(x_btn_UI, height / 2 + 40, buttonW_UI, buttonH_UI)) {
      cambiarEscena(-2); // Va a créditos
    }
    return; // Evita que la lógica de juego se ejecute en el menú
  }

  // --- LÓGICA DE LA PANTALLA DE CRÉDITOS (escena -2) ---
  if (escena === -2) {
    let y_btn = height - 80;
    // Botón VOLVER
    if (mouseDentro(x_btn_UI, y_btn, buttonW_UI, buttonH_UI)) {
      cambiarEscena(-1); // Vuelve al inicio
    }
    return; // Evita que la lógica de juego se ejecute en créditos
  }
  
  // --- LÓGICA DE LAS ESCENAS DE JUEGO (escena >= 0) ---
  let e = escenas[escena];
  const buttonW = 200;
  const buttonH = 40;
  const buttonY = height - 60;

  // Botón 1 (Juego)
  if (e[1] !== "") {
    let x1 = width / 2 - buttonW - 20;
    if (mouseDentro(x1, buttonY, buttonW, buttonH)) {
      cambiarEscena(e[2]);
    }
  }

  // Botón 2 (Juego)
  if (e[3] !== "") {
    let x2 = width / 2 + 20;
    if (mouseDentro(x2, buttonY, buttonW, buttonH)) {
      cambiarEscena(e[4]);
    }
  }
}
