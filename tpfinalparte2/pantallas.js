// ================================================================
// === FUNCIONES DE DIBUJO DE PANTALLAS (Ahora externas a la clase Juego) ===
// ================================================================

function dibujarBatalla(juego) {
    let estado = juego.controladorBatalla.estadoBatalla;
    
    if (estado === 'ataque_golpe1') {
      image(juego.imgGolpe1, 0, 0, width, height);
    } else if (estado === 'ataque_golpe2') {
      image(juego.imgGolpe2, 0, 0, width, height);
    } else if (estado === 'ataque_golpe3') {
      image(juego.imgGolpe3, 0, 0, width, height);
    } else if (estado === 'ataque_enemigo') {
      image(juego.imgOgroGolpe, 0, 0, width, height);
    } else {
      image(juego.imgNormal, 0, 0, width, height);
    }
    
    juego.controladorBatalla.dibujarInterfaz();
    
    const PADDING = 10;
    const CAJA_H = 150;
    juego.vidas.dibujarBarraEnemigo(PADDING + 20, 40, 200, 30);
    juego.vidas.dibujarBarraJugador(width - 200 - PADDING - 20, height - CAJA_H - 80, 200, 30);
}

function pantallaInicio(juego) {
    image(juego.imgInicio, 0, 0, width, height);
    juego.botonesMenuUI['inicio_start'].dibujar();
    juego.botonesMenuUI['inicio_instrucciones'].dibujar(); 
    juego.botonesMenuUI['inicio_credits'].dibujar();
}

function pantallaCreditos(juego) {
    image(juego.imgInicio, 0, 0, width, height); 
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);
    
    push();
    textAlign(CENTER, CENTER);
    fill(255);
    noStroke();
    textSize(28);
    text("CRÉDITOS", width / 2, height / 4);
    textSize(16);
    textAlign(LEFT, TOP);
    let creditText = "MANUEL CANSECO \n COMISION 5 \n LEGAJO: 118984/0";
    text(creditText, width / 2 - 150, height / 3 + 20, 300, 200);
    pop();
    juego.botonesMenuUI['credits_back'].dibujar();
}

function pantallaInstrucciones(juego) {
    image(juego.imgInicio, 0, 0, width, height); 
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);
    
    push();
    textAlign(CENTER, CENTER);
    fill(255);
    noStroke();
    textSize(28);
    text("INSTRUCCIONES", width / 2, height / 4);
    textSize(16);
    textAlign(LEFT, TOP);
    let instText = "1. Objetivo: Derrotar al OGRO antes de que te derrote a ti.\n\n2. Turnos: La batalla es por turnos. Primero atacas tú, luego ataca el OGRO.\n\n3. Ataques: Elige entre los 3 ataques disponibles, cada uno con diferente daño.\n\n4. Huir: Puedes huir en cualquier momento (volverás al menú principal).";
    text(instText, width / 2 - 150, height / 3 + 20, 300, 200);
    pop();
    juego.botonesMenuUI['inst_back'].dibujar(); 
}

function pantallaVictoria(juego) {
    image(juego.imgInicio, 0, 0, width, height); 
    fill(0, 0, 0, 180);
    rect(0, 0, width, height);
    
    push();
    textAlign(CENTER, CENTER);
    fill(100, 255, 100); 
    noStroke();
    textSize(48);
    text("¡VICTORIA!", width / 2, height / 2 - 40);
    textSize(18);
    fill(255);
    text("Has derrotado al OGRO. ¡Felicidades!", width / 2, height / 2 + 20);
    pop();
    
    juego.botonesMenuUI['inst_back'].dibujar();
}

function pantallaDerrota(juego) {
    image(juego.imgInicio, 0, 0, width, height); 
    fill(0, 0, 0, 180);
    rect(0, 0, width, height);
    
    push();
    textAlign(CENTER, CENTER);
    fill(255, 100, 100); 
    noStroke();
    textSize(48);
    text("DERROTA", width / 2, height / 2 - 40);
    textSize(18);
    fill(255);
    text("El OGRO te ha vencido. Inténtalo de nuevo.", width / 2, height / 2 + 20);
    pop();
    
    juego.botonesMenuUI['inst_back'].dibujar();
}
