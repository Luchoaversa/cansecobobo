// --- CLASE JUGADOR (Controlador de Interfaz y Turnos) ---
class Jugador {
  // Recibe la instancia de Juego (juegoInstance)
  constructor(vidasManager, juegoInstance) { 
    this.vidas = vidasManager; 
    this.juego = juegoInstance; // Referencia a la clase Juego
    
    this.estadoBatalla = 'inicio';
    this.mensajeBatalla = "¡Un OGRO apareció!";

    // --- Definición de botones ---
    const PADDING = 10;
    const CAJA_H = 150;
    const BTN_W = (width - PADDING * 2) / 2 - PADDING * 1.5;
    const BTN_H = (CAJA_H - PADDING * 3) / 2;
    const x1 = PADDING * 2;
    const x2 = width / 2 + PADDING / 2;
    const y1 = height - CAJA_H + PADDING;
    const y2 = height - CAJA_H + PADDING * 2 + BTN_H;

    // Botones del Menú Principal (Atacar, Huir)
    this.botonesMenuPrincipal = [];
    this.botonesMenuPrincipal.push(new Boton("Atacar", x1, y1, BTN_W, BTN_H, () => {
      this.estadoBatalla = 'seleccion_ataque';
    }));
    this.botonesMenuPrincipal.push(new Boton("Huir", x2, y1, BTN_W, BTN_H, () => {
      this.juego.cambiarEscena(-1); 
    }));

    // Botones del Submenú de Ataque
    this.botonesAtaque = [];
    this.botonesAtaque.push(new Boton("Golpe", x1, y1, BTN_W, BTN_H, () => {
      this.realizarAtaque(10, "Golpe", 'ataque_golpe1'); // Daño 10
    }));
    this.botonesAtaque.push(new Boton("Golpe Fuerte", x2, y1, BTN_W, BTN_H, () => {
      this.realizarAtaque(20, "Golpe Fuerte", 'ataque_golpe2'); // Daño 20
    }));
    this.botonesAtaque.push(new Boton("Patada", x1, y2, BTN_W, BTN_H, () => {
      this.realizarAtaque(15, "Patada", 'ataque_golpe3'); // Daño 15
    }));
    this.botonesAtaque.push(new Boton("Volver", x2, y2, BTN_W, BTN_H, () => {
      this.estadoBatalla = 'seleccion';
    }));
  }

  // --- Métodos de Interfaz (Sin cambios) ---
  dibujarInterfaz() {
    const PADDING = 10;
    const CAJA_H = 150;

    fill(UI_COLOR); 
    stroke(255);
    strokeWeight(3);
    rect(PADDING, height - CAJA_H - PADDING, width - PADDING * 2, CAJA_H, 8);

    if (this.estadoBatalla === 'seleccion') {
      for (let btn of this.botonesMenuPrincipal) btn.dibujar();
    } else if (this.estadoBatalla === 'seleccion_ataque') {
      for (let btn of this.botonesAtaque) btn.dibujar();
    } else {
      fill(TEXTO_COLOR); 
      noStroke();
      textSize(22);
      textAlign(LEFT, TOP);
      text(this.mensajeBatalla, PADDING * 3, height - CAJA_H + PADDING * 2, width - PADDING * 6);
      textSize(16);
      textAlign(RIGHT, BOTTOM);
      fill(200);
      text("[Clic para continuar]", width - PADDING * 3, height - PADDING * 2);
    }
  }

  // --- Métodos de Control ---
  manejarClic() {
    if (this.estadoBatalla === 'seleccion') {
      for (let btn of this.botonesMenuPrincipal) btn.manejarClic();
    } else if (this.estadoBatalla === 'seleccion_ataque') {
      for (let btn of this.botonesAtaque) btn.manejarClic();
    } else {
      this.avanzarTurno();
    }
  }

  // --- Métodos de Lógica de Turnos ---
  realizarAtaque(dano, nombreAtaque, estadoSiguiente) {
    this.vidas.recibirDanoEnemigo(dano);
    this.mensajeBatalla = `¡Usas ${nombreAtaque}! Haces ${dano} de daño.`;
    this.estadoBatalla = estadoSiguiente;
  }

  turnoEnemigo() {
    if (this.vidas.estaVivoEnemigo()) {
      let danoEnemigo = int(random(10, 25));
      this.vidas.recibirDanoJugador(danoEnemigo);
      this.mensajeBatalla = `El OGRO te ataca y te hace ${danoEnemigo} de daño.`;
      this.estadoBatalla = 'ataque_enemigo';
    } else {
      // ✅ CAMBIO PARA VICTORIA
      this.mensajeBatalla = "¡Ganaste! El OGRO ha sido derrotado.";
      this.estadoBatalla = 'victoria'; 
    }
  }

  avanzarTurno() {
    if (this.estadoBatalla === 'inicio') {
      this.estadoBatalla = 'seleccion';
      
    } else if (this.estadoBatalla.startsWith('ataque_golpe')) { 
      this.turnoEnemigo();
    
    } else if (this.estadoBatalla === 'ataque_enemigo') {
      if (this.vidas.estaVivoJugador()) {
        this.estadoBatalla = 'seleccion';
      } else {
        // ✅ CAMBIO PARA DERROTA
        this.mensajeBatalla = "¡Oh no! Has sido derrotado. Vuelve a intentarlo.";
        this.estadoBatalla = 'derrota'; 
      }
    } 
    // ✅ CAMBIO: Llama al controlador principal para la transición de pantalla
    else if (this.estadoBatalla === 'victoria' || this.estadoBatalla === 'derrota') {
      this.juego.terminarBatalla(this.estadoBatalla);
    }
  }
  
  reset() {
    this.estadoBatalla = 'inicio';
    this.mensajeBatalla = "¡Un OGRO apareció!";
  }
}
