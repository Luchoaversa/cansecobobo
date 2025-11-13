// --- CLASE VIDAS (Administrador de Salud) ---
class Vidas {
  constructor(vidaMaxJugador, vidaMaxEnemigo) {
    this.vidaMaxJ = vidaMaxJugador;
    this.vidaMaxE = vidaMaxEnemigo;
    this.vidaJ = this.vidaMaxJ;
    this.vidaE = this.vidaMaxE;
  }

  recibirDanoJugador(dano) {
    this.vidaJ -= dano;
    if (this.vidaJ < 0) this.vidaJ = 0;
  }

  recibirDanoEnemigo(dano) {
    this.vidaE -= dano;
    if (this.vidaE < 0) this.vidaE = 0;
  }

  estaVivoJugador() {
    return this.vidaJ > 0;
  }

  estaVivoEnemigo() {
    return this.vidaE > 0;
  }

  curarTodo() {
    this.vidaJ = this.vidaMaxJ;
    this.vidaE = this.vidaMaxE;
  }

  // --- Métodos de Dibujo de Vidas ---
  dibujarBarraEnemigo(x, y, w, h) {
    this._dibujarBarra(x, y, w, h, this.vidaE, this.vidaMaxE, "OGRO");
  }

  dibujarBarraJugador(x, y, w, h) {
    this._dibujarBarra(x, y, w, h, this.vidaJ, this.vidaMaxJ, "PULGARCITO");
  }

  // Método privado para no repetir código
  _dibujarBarra(x, y, w, h, vidaActual, vidaMax, nombre) {
    push();
    fill(80);
    noStroke();
    rect(x, y, w, h, 4);

    let anchoVida = map(vidaActual, 0, vidaMax, 0, w);
    if (anchoVida < 0) anchoVida = 0;

    if (vidaActual / vidaMax > 0.5) fill(100, 220, 100);
    else if (vidaActual / vidaMax > 0.2) fill(230, 230, 100);
    else fill(220, 80, 80);
    
    rect(x, y, anchoVida, h, 4);

    fill(255);
    stroke(0);
    strokeWeight(2);
    textSize(18);
    textAlign(LEFT, BOTTOM);
    text(nombre, x, y - 5);
    
    textAlign(RIGHT, CENTER);
    text(`${int(vidaActual)}/${vidaMax}`, x + w - 10, y + h / 2 + 2);
    pop();
  }
}
