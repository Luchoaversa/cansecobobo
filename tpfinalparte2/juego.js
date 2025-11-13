let UI_COLOR = "rgba(40, 40, 60, 0.8)";
let TEXTO_COLOR = "rgb(255, 255, 255)";
let BOTON_COLOR = "rgb(240, 240, 255)";
let BOTON_BORDE = "rgb(10, 10, 20)";
let BUTTON_W_UI = 150;
let BUTTON_H = 40;

// NOTA: Las constantes globales están ahora en constantes.js

// La clase Juego encapsula toda la lógica.
class Juego {
  
  constructor() {
    this.escena = -1; // -1: inicio, -2: créditos, -3: instrucciones, 0: batalla, 1: victoria, 2: derrota

    this.controladorBatalla; 
    this.vidas;              
    this.botonesMenuUI = []; 

    // Assets
    this.imgInicio;
    this.imgNormal;
    this.imgGolpe1;
    this.imgGolpe2;
    this.imgGolpe3;
    this.imgOgroGolpe;
    this.sonido; 
  }
  
  preload() {
    this.imgInicio = loadImage('data/inicio.png');
    this.imgNormal = loadImage('data/normal.png');
    this.imgGolpe1 = loadImage('data/golpe1.png');
    this.imgGolpe2 = loadImage('data/golpe2.png');
    this.imgGolpe3 = loadImage('data/golpe3.png');
    this.imgOgroGolpe = loadImage('data/ogrogolpe.png');
    this.sonido = loadSound('data/musica.mp3'); 
  }

  setup() {
    this.vidas = new Vidas(100, 120); 
    this.controladorBatalla = new Jugador(this.vidas, this); 
    
    const x_btn_ui = width / 2 - BUTTON_W_UI / 2;
    
    // --- DEFINICIÓN DE BOTONES ---
    const y_start = height / 2 - 40;
    const y_inst = height / 2 + 20; 
    const y_credits = height / 2 + 80;
    
    this.botonesMenuUI['inicio_start'] = new Boton("INICIAR", x_btn_ui, y_start, BUTTON_W_UI, BUTTON_H, () => {
      this.cambiarEscena(0);
      if (typeof this.sonido !== 'undefined' && this.sonido && !this.sonido.isPlaying()) {
        this.sonido.loop(); 
      }
    }, 'menu');
    this.botonesMenuUI['inicio_instrucciones'] = new Boton("INSTRUCCIONES", x_btn_ui, y_inst, BUTTON_W_UI, BUTTON_H, () => this.cambiarEscena(-3), 'menu');
    this.botonesMenuUI['inicio_credits'] = new Boton("CRÉDITOS", x_btn_ui, y_credits, BUTTON_W_UI, BUTTON_H, () => this.cambiarEscena(-2), 'menu');
    
    const callbackVolver = () => this.cambiarEscena(-1);
    this.botonesMenuUI['credits_back'] = new Boton("VOLVER", x_btn_ui, height - 80, BUTTON_W_UI, BUTTON_H, callbackVolver, 'menu');
    this.botonesMenuUI['inst_back'] = new Boton("VOLVER", x_btn_ui, height - 80, BUTTON_W_UI, BUTTON_H, callbackVolver, 'menu');
    
    this.cambiarEscena(-1);
  }
  
  cambiarEscena(nueva) {
    this.escena = nueva;
    
    if (nueva === -1 && typeof this.sonido !== 'undefined' && this.sonido && this.sonido.isPlaying()) {
        this.sonido.stop();
    }

    if (nueva === 0) {
      this.vidas.curarTodo();
      this.controladorBatalla.reset();
    }
  }

  // Gestiona el fin de la batalla
  terminarBatalla(resultado) {
      if (resultado === 'victoria') {
        this.cambiarEscena(1); // Escena de Victoria
      } else if (resultado === 'derrota') {
        this.cambiarEscena(2); // Escena de Derrota
      }
  }

  // NOTA: Los métodos draw() ya no llaman a this.pantalla... sino a funciones globales
  draw() {
    if (this.escena === -1) {
      pantallaInicio(this); // Llama a la función externa
    } else if (this.escena === -2) {
      pantallaCreditos(this); // Llama a la función externa
    } else if (this.escena === -3) { 
      pantallaInstrucciones(this); // Llama a la función externa
    } else if (this.escena === 0) {
      dibujarBatalla(this); // Llama a la función externa
    } else if (this.escena === 1) { 
      pantallaVictoria(this); // Llama a la función externa
    } else if (this.escena === 2) { 
      pantallaDerrota(this); // Llama a la función externa
    }
  }
  
  mousePressed() {
    if (this.escena === -1) { 
      this.botonesMenuUI['inicio_start'].manejarClic();
      this.botonesMenuUI['inicio_credits'].manejarClic();
      this.botonesMenuUI['inicio_instrucciones'].manejarClic(); 
      
    } else if (this.escena === -2) { 
      this.botonesMenuUI['credits_back'].manejarClic();
      
    } else if (this.escena === -3) { 
      this.botonesMenuUI['inst_back'].manejarClic();
      
    } else if (this.escena === 1 || this.escena === 2) { // VICTORIA o DERROTA
      this.botonesMenuUI['inst_back'].manejarClic();
      
    } else if (this.escena === 0) { 
      this.controladorBatalla.manejarClic();
    }
  }
}

function preload() {
  juego = new Juego(); 
  juego.preload();
}

function mousePressed() {
  juego.mousePressed();
}
