let nombresImagenes = [
  "data/escena0.png", "data/escena1.png", "data/escena2.png", "data/escena3.png", "data/escena4.png",
  "data/escena5.png", "data/escena6.png", "data/escena7.png", "data/escena8.png", "data/escena9.png",
  "data/escena10.png", "data/escena11.png", "data/escena12.png", "data/escena13.png", "data/escena14.png",
  "data/escena15.png", "data/escena16.png"
];

// Matriz de escenas: [Texto, Botón1_Texto, Botón1_Destino, Botón2_Texto, Botón2_Destino]
let escenas = [
  ["Había una vez una familia muy pobre con siete hijos, cuyo futuro era incierto. El menor, tan diminuto como un pulgar, era llamado Pulgarcito. A pesar de su fragilidad, su mente aguda y su ingenio superaban con creces su pequeño tamaño, dotándolo de una gran inteligencia y astucia.",
    "Comenzar", 1, "", -1],
  ["La miseria se había vuelto insostenible. Una noche, Pulgarcito se despertó y escuchó a sus padres hablando en susurros desesperados. El padre, con voz quebrada, sugirió a la madre la terrible idea: si no podían alimentarlos, debían abandonarlos a su suerte en el espeso bosque.",
    "Escuchar escondido", 2, "Ignorar", 3],
  ["Pulgarcito, con el corazón encogido por el terror, actuó rápidamente. Se escabulló de la cabaña bajo la luz de la luna y llenó sus pequeños bolsillos con las piedritas más blancas y brillantes que pudo encontrar en el camino, decidido a dejar un rastro que los guiara de vuelta.",
    "Avanzar", 4, "", -1],
  ["Sin la previsión de su hermano menor, los otros seis hermanos marcharon hacia el corazón del bosque, engañados por las falsas promesas de sus padres. Caminaron en un silencio pesado, sin saber que cada paso los llevaba más lejos de su hogar y más cerca de lo desconocido.",
    "Avanzar", 6, "", -1],
  ["El bosque se cerró sobre ellos, volviéndose inmenso y oscuro, un laberinto de árboles gigantes y sombras engañosas. El sol desapareció tras las copas. Los hermanos mayores, presas del pánico, temblaban de miedo, dándose cuenta de que estaban irremediablemente perdidos.",
    "Seguir el camino (Piedras)", 5, "Buscar refugio (Perdido)", 6],
  ["Pulgarcito mostró las piedritas. Siguiendo el rastro infalible, lograron caminar toda la noche hasta que, al amanecer, encontraron el camino de vuelta. Sin embargo, el recuerdo de la traición y el miedo a volver al bosque se grabaron en sus corazones.",
    "Continuar", 13, "", -1],
  ["La espesura del bosque los envolvió sin piedad. Sin las piedritas ni marcas que los guiaran, cada árbol era igual al anterior. Tras horas de marcha desesperada, se internaron en un lugar aún más profundo y tenebroso, la certeza de estar perdidos pesaba sobre ellos como una losa.",
    "Continuar", 7, "", -1],
  ["Cuando la esperanza casi se extinguía, Pulgarcito avistó una luz rojiza y parpadeante a lo lejos. Al acercarse, descubrieron una gran casa solitaria en medio de la nada. El miedo era palpable, pero la fatiga y el hambre eran más fuertes.",
    "Entrar", 8, "", -1],
  ["El interior era espeluznante. Un hombre gigantesco, con barba hirsuta y ojos feroces, conocido como el Ogro, estaba sentado a la mesa. Su aliento olía a carne cruda. Al ver a los siete niños, sonrió con una terrible satisfacción, planeando la manera más deliciosa de devorarlos a todos en la cena.",
    "Engañar al ogro", 10, "Escapar", 11],
  ["Los hermanos pasan la noche afuera, con frío y miedo.",
    "Regresar a la casa", 7, "", -1],
  ["Pulgarcito esperó el momento justo, mientras el Ogro dormía pesadamente. Con increíble sigilo, cambió los gorros y coronas de sus hermanas con los de las hijas del ogro, salvándolos de ser devorados de inmediato. Ahora debían huir antes de que amaneciera.",
    "Continuar", 12, "", -1],
  ["Apenas habían recorrido unos metros cuando escucharon el rugido furioso del Ogro a sus espaldas. Había descubierto el engaño. El monstruo calzó sus temidas Botas de Siete Leguas y comenzó una persecución implacable, cubriendo kilómetros con cada zancada.",
    "Continuar", 12, "", -1],
  ["El Ogro, cansado por la persecución, se detuvo a descansar cerca de un arroyo. Pulgarcito se deslizó entre las sombras, le quitó las Botas Mágicas mientras dormía y se las calzó. Al instante, sintió la velocidad sobrehumana recorrer sus piernas.",
    "Volver a la Guarida", 14, "", -1],
  ["FINAL AMARGO:\nRegresaron a la cabaña y los padres los recibieron llorando de alivio, pero la familia permaneció en la miseria y el temor de ser abandonados de nuevo nunca se fue. Aunque a salvo, la felicidad se había esfumado con la inocencia perdida en el bosque.",
    "Reiniciar", -1, "", -1], // Reinicia al menú principal (-1)
  ["Pulgarcito, con las botas mágicas, regresó audazmente a la guarida del Ogro, sabiendo que la fuerza sola no era suficiente. Usó su ingenio y la velocidad de las botas para encarar al Ogro, quien, al verlo de nuevo, se enfureció aún más.",
    "Negociar", 15, "Atacar", 16],
  ["FINAL ASTUTO:\nEn lugar de luchar, Pulgarcito usó su elocuencia. Le ofreció al Ogro trabajar para el Rey como mensajero, a cambio de que le perdonara la vida. El Ogro aceptó la oferta y, gracias a las botas, Pulgarcito se convirtió en el hombre más rápido y rico del reino.",
    "Reiniciar", -1, "", -1], // Reinicia al menú principal (-1)
  ["FINAL TRÁGICO:\nEn un acto de valentía impulsiva, Pulgarcito intentó atacar al Ogro. Pero la fuerza bruta del monstruo fue superior. El Ogro, con un gruñido triunfal, atrapó a Pulgarcito y a sus hermanos. Su destino fue sellado, y el bosque guardó su terrible secreto.",
    "Reiniciar", -1, "", -1] // Reinicia al menú principal (-1)
];
