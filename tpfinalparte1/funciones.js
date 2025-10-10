// --- Listas de Recursos y Escenas (Datos de la Historia) ---
let nombresImagenes = [
  "data/escena0.png", "data/escena1.png", "data/escena2.png", "data/escena3.png", "data/escena4.png",
  "data/escena5.png", "data/escena6.png", "data/escena7.png", "data/escena8.png", "data/escena9.png",
  "data/escena10.png", "data/escena11.png", "data/escena12.png", "data/escena13.png", "data/escena14.png",
  "data/escena15.png", "data/escena16.png"
];

// 🎯 CAMBIO CLAVE: Matriz de escenas: [Botón1_Texto, Botón1_Destino, Botón2_Texto, Botón2_Destino]
// La narración (el texto largo) DEBE estar en tu archivo textos.txt
let escenas = [
    // Escena 0
    ["Comenzar", 1, "", -1], 
    // Escena 1
    ["Escuchar escondido", 2, "Ignorar", 3], 
    // Escena 2
    ["Avanzar", 4, "", -1], 
    // Escena 3
    ["Avanzar", 6, "", -1], 
    // Escena 4
    ["Seguir el camino (Piedras)", 5, "Buscar refugio (Perdido)", 6], 
    // Escena 5
    ["Continuar", 13, "", -1], 
    // Escena 6
    ["Continuar", 7, "", -1], 
    // Escena 7
    ["Entrar", 8, "", -1], 
    // Escena 8
    ["Engañar al ogro", 10, "Escapar", 11], 
    // Escena 9
    ["Regresar a la casa", 7, "", -1], 
    // Escena 10
    ["Continuar", 12, "", -1], 
    // Escena 11
    ["Continuar", 12, "", -1], 
    // Escena 12
    ["Volver a la Guarida", 14, "", -1], 
    // Escena 13 (FINAL AMARGO)
    ["Reiniciar", -1, "", -1], 
    // Escena 14
    ["Negociar", 15, "Atacar", 16], 
    // Escena 15 (FINAL ASTUTO)
    ["Reiniciar", -1, "", -1], 
    // Escena 16 (FINAL TRÁGICO)
    ["Reiniciar", -1, "", -1] 
];
