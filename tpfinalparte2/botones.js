// --- CLASE BOTÓN ---
class Boton {
  constructor(texto, x, y, w, h, callback, estilo = 'pokemon') {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.callback = callback;
    this.estilo = estilo;
  }

  mouseDentro() {
    return mouseX > this.x && mouseX < this.x + this.w &&
           mouseY > this.y && mouseY < this.y + this.h;
  }

  dibujar() {
    if (this.estilo === 'pokemon') this.dibujarBotonPokemon();
    else this.dibujarBotonMenu();
  }

  dibujarBotonPokemon() {
    let isHover = this.mouseDentro();
    // Accede a las constantes globales
    fill(isHover ? color(200, 200, 210) : color(BOTON_COLOR));
    rect(this.x, this.y, this.w, this.h, 6);
    push();
    fill(30);
    textSize(20);
    textAlign(LEFT, CENTER);
    text(this.texto, this.x + 15, this.y + this.h / 2);
    pop();
  }
  
  dibujarBotonMenu() {
    let isHover = this.mouseDentro();
    fill(isHover ? color(180, 150, 100) : color(120, 60, 32));
    noStroke();
    rect(this.x, this.y, this.w, this.h, 8);
    push();
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.w / 2, this.y + this.h / 2);
    pop();
  }

  manejarClic() {
    if (this.mouseDentro()) {
      this.callback();
    }
  }
}
