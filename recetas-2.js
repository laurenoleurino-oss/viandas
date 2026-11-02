// Recetas 38 a 120 de Viandas Sin Vueltas. Se cargan después de recetas.js.
// Mismo formato: i = [ingrediente, gramos de compra, "cómo se dice en la receta"].

Object.assign(NUTRI, {
  berenjena:     {n:"Berenjena",                   g:"Verdulería", kcal:25,  p:1,   c:5.9, gr:0.2},
  naranja:       {n:"Naranja",                     g:"Verdulería", kcal:47,  p:0.9, c:11.8,gr:0.1, comestible:0.7},
  repollo:       {n:"Repollo",                     g:"Verdulería", kcal:25,  p:1.3, c:5.8, gr:0.1},
  remolacha:     {n:"Remolacha",                   g:"Verdulería", kcal:43,  p:1.6, c:9.6, gr:0.2, comestible:0.85},
  chauchas:      {n:"Chauchas",                    g:"Verdulería", kcal:31,  p:1.8, c:7,   gr:0.2},
  coliflor:      {n:"Coliflor",                    g:"Verdulería", kcal:25,  p:1.9, c:5,   gr:0.3},
  cebolla_verdeo:{n:"Cebolla de verdeo",           g:"Verdulería", kcal:32,  p:1.8, c:7.3, gr:0.2},
  pepino:        {n:"Pepino",                      g:"Verdulería", kcal:15,  p:0.7, c:3.6, gr:0.1},
  cerdo:         {n:"Carré de cerdo",              g:"Carnicería", kcal:143, p:21,  c:0,   gr:6},
  mozzarella:    {n:"Mozzarella",                  g:"Lácteos y huevos", kcal:254, p:24, c:2.8, gr:16},
  jamon:         {n:"Jamón cocido",                g:"Lácteos y huevos", kcal:120, p:18, c:2, gr:4},
  queso_untable: {n:"Queso untable light",         g:"Lácteos y huevos", kcal:160, p:8, c:4, gr:12},
  porotos:       {n:"Porotos cocidos (lata)",      g:"Almacén", kcal:127, p:8.7, c:22.8,gr:0.5},
  maiz_blanco:   {n:"Maíz blanco pisado",          g:"Almacén", kcal:365, p:9,   c:74,  gr:4.7},
  polenta:       {n:"Polenta",                     g:"Almacén", kcal:365, p:8.1, c:77,  gr:3.6},
  fideos:        {n:"Fideos secos",                g:"Almacén", kcal:371, p:13,  c:75,  gr:1.5},
  cacao:         {n:"Cacao amargo",                g:"Almacén", kcal:228, p:19.6,c:57.9,gr:13.7},
  chia:          {n:"Semillas de chía",            g:"Almacén", kcal:486, p:16.5,c:42,  gr:30.7},
  mani_pasta:    {n:"Pasta de maní",               g:"Almacén", kcal:588, p:25,  c:20,  gr:50},
  maicena:       {n:"Fécula de maíz",              g:"Almacén", kcal:381, p:0.3, c:91,  gr:0.1},
  mostaza:       {n:"Mostaza",                     g:"Almacén", kcal:66,  p:4.4, c:5.8, gr:4},
  gelatina:      {n:"Gelatina sin sabor",          g:"Almacén", kcal:335, p:85,  c:0,   gr:0.1},
  levadura:      {n:"Levadura seca",               g:"Almacén", kcal:325, p:40,  c:41,  gr:7.6},
  pasas:         {n:"Pasas de uva",                g:"Almacén", kcal:299, p:3.1, c:79,  gr:0.5}
});

CATEGORIAS.push({id:"guarniciones", nombre:"Guarniciones y ensaladas"});

RECETAS.push(
  // ===== Viandas =====
  {id:"lasana-berenjenas", cat:"viandas", nombre:"Lasaña de berenjenas", emoji:"🍆", porciones:6, min:70, heladera:3, freezer:"3 meses",
   i:[["berenjena",900,"3 berenjenas"],["carne_picada",400,"400 g de carne picada especial"],["cebolla",150,"1 cebolla"],["tomate_tri",520,"1 caja de tomate triturado"],["ricota",250,"250 g de ricota"],["mozzarella",150,"150 g de mozzarella"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal, orégano y nuez moscada"]],
   pasos:["Cortá las berenjenas en láminas de 1 cm, salalas y dejalas 10 minutos. Secalas y asalas en placa aceitada a 200 °C 20 minutos.","Rehogá la cebolla, sumá la carne y después el tomate. Cociná 15 minutos.","Armá capas en una fuente: salsa, berenjenas, ricota condimentada. Repetí y terminá con salsa y mozzarella.","Horneá a 180 °C de 25 a 30 minutos, hasta que gratine."],
   fuentes:["LM Neuquén: lasaña de berenjenas liviana, 180 °C 25-30 min","Hola: 180 °C 30-40 min"]},

  {id:"morrones-rellenos", cat:"viandas", nombre:"Morrones rellenos de carne y arroz", emoji:"🫑", porciones:4, min:60, heladera:3, freezer:"3 meses",
   i:[["morron",600,"4 morrones"],["carne_picada",400,"400 g de carne picada"],["arroz_blanco",100,"Media taza de arroz"],["cebolla",150,"1 cebolla"],["tomate_tri",200,"200 g de tomate triturado"],["queso_rallado",30,"3 cucharadas de queso rallado"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, comino y orégano"]],
   pasos:["Hervé el arroz 12 minutos y escurrilo.","Rehogá la cebolla, sumá la carne hasta que pierda el color y mezclá con el tomate y el arroz.","Cortá la tapa de los morrones, sacá las semillas y rellenalos.","Tapá con papel aluminio y horneá a 180 °C 20 minutos.","Destapá, poné el queso y horneá de 10 a 15 minutos más."],
   fuentes:["Montevideo Portal: morrones rellenos 180 °C 20 min tapados + 10 min","Diario Uno: 180 °C 35-40 min"]},

  {id:"zapallitos-rellenos", cat:"viandas", nombre:"Zapallitos rellenos", emoji:"🥒", porciones:4, min:50, heladera:3, freezer:"2 meses",
   i:[["zapallito",800,"4 zapallitos redondos"],["carne_picada",400,"400 g de carne picada"],["cebolla",150,"1 cebolla"],["huevo",50,"1 huevo"],["pan_rallado",30,"3 cucharadas de pan rallado"],["queso_rallado",30,"3 cucharadas de queso rallado"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimienta y nuez moscada"]],
   pasos:["Cortá los zapallitos al medio y hervilos 5 minutos. Ahuecalos y picá la pulpa.","Rehogá la cebolla, sumá la carne y la pulpa y cociná 8 minutos.","Fuera del fuego, mezclá con el huevo y el pan rallado.","Rellená, espolvoreá queso y horneá a 180 °C de 20 a 25 minutos."],
   fuentes:["Diario Uno: zapallitos rellenos al horno de la abuela","Cronista: hervir, rellenar y hornear 180 °C"]},

  {id:"locro-liviano", cat:"viandas", nombre:"Locro liviano", emoji:"🍲", porciones:6, min:120, heladera:3, freezer:"3 meses",
   i:[["maiz_blanco",300,"300 g de maíz blanco pisado"],["porotos",300,"1 lata de porotos"],["carne_magra",500,"500 g de carne magra en cubos"],["zapallo",800,"800 g de zapallo"],["cebolla",150,"1 cebolla"],["morron",150,"1 morrón"],["choclo",200,"1 lata de choclo en granos"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimentón, comino y laurel"]],
   pasos:["La noche anterior, dejá el maíz en remojo.","Hervilo en agua nueva 1 hora, hasta que empiece a ablandarse.","Sumá la carne, el zapallo en cubos y el laurel. Cociná 30 minutos.","Agregá la cebolla y el morrón rehogados, los porotos escurridos y el choclo. Seguí de 10 a 20 minutos, hasta que el zapallo se deshaga.","Condimentá con pimentón y comino al final."],
   fuentes:["Canal 26: locro light con carne magra","La Voz: locro light, zapallo 30 min","Hoy Día: locro rápido ~1 h 30 a fuego bajo"]},

  {id:"pechugas-rellenas", cat:"viandas", nombre:"Pechugas rellenas de espinaca y queso", emoji:"🍗", porciones:4, min:40, heladera:3, freezer:"2 meses",
   i:[["pechuga",700,"2 pechugas grandes"],["espinaca",200,"200 g de espinaca"],["queso_cremoso",100,"100 g de queso cremoso"],["ajo",5,"1 diente de ajo"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Abrí las pechugas como un libro y aplanalas un poco.","Saltá la espinaca con el ajo 1 minuto y escurrila.","Rellená con espinaca y queso, cerrá y sujetá con palillos.","Dorá 4 minutos por lado en sartén y terminá en el horno a 180 °C de 15 a 20 minutos."],
   fuentes:["MDZ: dorar 4-5 min por lado y horno 180 °C 15-20 min","Diario del Sur: 180 °C 15-25 min según grosor"]},

  {id:"pollo-curry", cat:"viandas", nombre:"Pollo al curry suave", emoji:"🍛", porciones:4, min:30, heladera:3, freezer:"3 meses",
   i:[["pechuga",600,"600 g de pechuga en cubos"],["cebolla",150,"1 cebolla"],["zanahoria",80,"1 zanahoria"],["morron",150,"1 morrón"],["tomate_tri",150,"150 g de tomate triturado"],["leche",200,"200 ml de leche"],["maicena",10,"1 cucharada de fécula de maíz"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Curry, cúrcuma y sal"]],
   pasos:["Dorá el pollo en el aceite y retiralo.","Rehogá la cebolla, la zanahoria y el morrón 5 minutos. Sumá el curry.","Agregá el tomate, el pollo y la leche con la fécula disuelta.","Cociná a fuego bajo de 12 a 15 minutos, hasta que espese. Servilo con arroz."],
   fuentes:["Técnica de salsa espesada con fécula; pollo en cubos cocido 12-15 min"]},

  {id:"pollo-mostaza", cat:"viandas", nombre:"Pollo a la mostaza y miel con papas", emoji:"🍯", porciones:4, min:60, heladera:3, freezer:"3 meses",
   i:[["pollo_presa",1000,"1 kg de pata muslo sin piel"],["papa",600,"3 papas"],["mostaza",30,"2 cucharadas de mostaza"],["miel",20,"1 cucharada de miel"],["ajo",10,"2 dientes de ajo"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal y romero"]],
   pasos:["Mezclá la mostaza, la miel, el ajo y el aceite.","Untá el pollo y ponelo en una fuente con las papas en gajos.","Horneá a 200 °C de 45 a 50 minutos, dando vuelta a mitad, hasta que el jugo salga transparente."],
   fuentes:["Directo al Paladar: jamoncitos al horno con limón, mostaza y miel","MDZ: pollo al horno 40-45 min a 200 °C"]},

  {id:"escondidito-calabaza", cat:"viandas", nombre:"Escondidito de calabaza y pollo", emoji:"🎃", porciones:5, min:55, heladera:3, freezer:"3 meses",
   i:[["pechuga",500,"500 g de pechuga"],["zapallo",1000,"1 kg de calabaza"],["cebolla",150,"1 cebolla"],["morron",150,"1 morrón"],["leche",80,"80 ml de leche"],["queso_rallado",30,"3 cucharadas de queso rallado"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimentón y nuez moscada"]],
   pasos:["Hervé la calabaza 20 minutos y hacé un puré con la leche.","Hervé la pechuga 15 minutos y desmechala.","Rehogá la cebolla y el morrón y mezclá con el pollo.","Fuente: pollo abajo, puré arriba y queso. Horneá a 200 °C 20 minutos."],
   fuentes:["Mismo criterio que el pastel de papa: 200 °C 20-25 min"]},

  {id:"berenjenas-napolitana", cat:"viandas", nombre:"Milanesas de berenjena a la napolitana", emoji:"🍆", porciones:4, min:45, heladera:2, freezer:"2 meses (sin la salsa)",
   i:[["berenjena",700,"2 berenjenas grandes"],["huevo",100,"2 huevos"],["pan_rallado",120,"1 taza de pan rallado"],["tomate_tri",250,"250 g de tomate triturado"],["mozzarella",150,"150 g de mozzarella"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal y orégano"]],
   pasos:["Cortá las berenjenas en rodajas de 1 cm, salalas y dejalas 10 minutos. Secalas.","Pasalas por huevo y pan rallado.","Horneá en placa aceitada a 200 °C 15 minutos, dalas vuelta y 10 minutos más.","Poné tomate, mozzarella y orégano y gratiná 5 minutos."],
   fuentes:["Directo al Paladar: milanesas de berenjena a 200 °C, 30 min en total","Que.es: 200 °C dando vuelta a mitad"]},

  {id:"guiso-arroz-carne", cat:"viandas", nombre:"Guiso de arroz con carne", emoji:"🍚", porciones:5, min:50, heladera:2, freezer:"1 mes",
   i:[["carne_magra",500,"500 g de carne magra en cubos"],["arroz_blanco",300,"300 g de arroz"],["cebolla",150,"1 cebolla"],["morron",150,"1 morrón"],["zanahoria",80,"1 zanahoria"],["tomate_tri",300,"300 g de tomate triturado"],["arvejas",150,"1 lata de arvejas"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimentón y laurel"]],
   pasos:["Dorá la carne en tandas y retirala.","Rehogá la cebolla, el morrón y la zanahoria.","Volvé la carne con el tomate y 750 ml de caldo. Cociná 15 minutos.","Sumá el arroz y cociná 18 minutos tapado. Arvejas al final y reposo de 5 minutos."],
   fuentes:["Canal 26: 2 1/2 partes de caldo por parte de arroz","Arroz largo fino ~18 min tras agregar el caldo"]},

  {id:"polenta-salsa", cat:"viandas", nombre:"Polenta cremosa con salsa de carne", emoji:"🌽", porciones:4, min:35, heladera:3, freezer:"3 meses (la salsa)",
   i:[["polenta",250,"250 g de polenta"],["leche",500,"500 ml de leche"],["queso_rallado",40,"4 cucharadas de queso rallado"],["carne_picada",300,"300 g de carne picada"],["tomate_tri",520,"1 caja de tomate triturado"],["cebolla",150,"1 cebolla"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, orégano y laurel"]],
   pasos:["Hacé la salsa: rehogá la cebolla, sumá la carne y el tomate y cociná 20 minutos.","Hervé la leche con 500 ml de agua y sal.","Echá la polenta en lluvia batiendo y cociná el tiempo del paquete (1 a 3 minutos la instantánea, unos 20 la común).","Sumá el queso y serví con la salsa."],
   fuentes:["Tiempos de cocción indicados en los paquetes de polenta"]},

  {id:"tarta-espinaca", cat:"viandas", nombre:"Tarta de espinaca y ricota", emoji:"🥬", porciones:6, min:50, heladera:3, freezer:"2 meses",
   i:[["tapa_tarta",180,"1 tapa para tarta"],["espinaca",500,"500 g de espinaca"],["ricota",400,"400 g de ricota"],["cebolla",150,"1 cebolla"],["huevo",150,"3 huevos"],["queso_rallado",30,"3 cucharadas de queso rallado"],["aceite",5,"Unas gotas de aceite"],["especias",0,"Sal y nuez moscada"]],
   pasos:["Saltá la cebolla y la espinaca hasta que se achique. Escurrí y picá.","Mezclá con la ricota, los huevos, el queso y los condimentos.","Forrá un molde de 24 cm con la tapa y volcá el relleno.","Horneá a 180 °C de 30 a 35 minutos."],
   fuentes:["Mismo criterio que la tarta de zapallitos (180 °C 25-35 min)","Los Andes: tarta de espinaca"]},

  {id:"tarta-choclo", cat:"viandas", nombre:"Tarta de choclo", emoji:"🌽", porciones:6, min:50, heladera:3, freezer:"2 meses",
   i:[["tapa_tarta",180,"1 tapa para tarta"],["choclo",600,"2 latas de choclo en granos"],["cebolla",150,"1 cebolla"],["leche",200,"200 ml de leche"],["maicena",20,"2 cucharadas de fécula de maíz"],["huevo",100,"2 huevos"],["queso_cremoso",100,"100 g de queso cremoso"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimienta y nuez moscada"]],
   pasos:["Rehogá la cebolla y sumá el choclo.","Agregá la leche con la fécula disuelta y revolvé hasta que espese.","Fuera del fuego, sumá los huevos y el queso.","Rellená la tarta y horneá a 180 °C de 25 a 35 minutos."],
   fuentes:["Ciudad.com.ar: tarta de choclo 180 °C 35 min","Diario Uno: 180 °C 20 min"]},

  {id:"tarta-atun", cat:"viandas", nombre:"Tarta de atún", emoji:"🥧", porciones:6, min:45, heladera:2, freezer:"2 meses",
   i:[["tapa_tarta",180,"1 tapa para tarta"],["atun",340,"2 latas de atún al natural"],["cebolla",150,"1 cebolla"],["morron",150,"1 morrón"],["huevo",150,"3 huevos"],["tomate",150,"1 tomate"],["queso_cremoso",80,"80 g de queso cremoso"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal y orégano"]],
   pasos:["Rehogá la cebolla y el morrón 6 minutos.","Mezclá con el atún escurrido, los huevos batidos y el queso.","Rellená la tapa, poné rodajas de tomate arriba y orégano.","Horneá a 180 °C unos 30 minutos."],
   fuentes:["Aire de Santa Fe: tarta de choclo, atún y queso","Horneado de tartas a 180 °C 25-35 min"]},

  {id:"merluza-provenzal", cat:"viandas", nombre:"Merluza a la provenzal", emoji:"🐟", porciones:3, min:25, heladera:2, freezer:"No conviene",
   i:[["merluza",600,"600 g de filet de merluza"],["ajo",15,"3 dientes de ajo"],["perejil",20,"Un buen puñado de perejil"],["pan_rallado",30,"3 cucharadas de pan rallado"],["limon",50,"Jugo de 1 limón"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Picá el ajo y el perejil y mezclalos con el pan rallado y el aceite.","Poné los filets en una fuente, salalos y rociá con limón.","Cubrilos con la mezcla provenzal.","Horneá a 200 °C de 15 a 20 minutos, hasta que se separen en lascas."],
   fuentes:["Jumbo: merluza a la provenzal 15-20 min","Directo al Paladar: merluza al horno 15-20 min según grosor"]},

  {id:"medallones-merluza", cat:"viandas", nombre:"Medallones de merluza al horno", emoji:"🐠", porciones:4, min:35, heladera:2, freezer:"3 meses (crudos)",
   i:[["merluza",600,"600 g de filet de merluza"],["huevo",50,"1 huevo"],["pan_rallado",100,"1 taza de pan rallado"],["cebolla",75,"Media cebolla"],["perejil",10,"Perejil"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimienta y ralladura de limón"]],
   pasos:["Procesá la merluza con la cebolla, el perejil y el huevo.","Sumá la mitad del pan rallado y formá 12 medallones.","Pasalos por el resto del pan rallado. Si los guardás, congelalos crudos.","Horneá en placa aceitada a 200 °C 20 minutos, dando vuelta a mitad."],
   fuentes:["Directo al Paladar: merluza al horno 15-20 min","Técnica de rebozado al horno igual a las milanesas"]},

  {id:"hamburguesas-garbanzos", cat:"viandas", nombre:"Hamburguesas de garbanzos", emoji:"🧆", porciones:4, min:35, heladera:3, freezer:"3 meses",
   i:[["garbanzos",400,"400 g de garbanzos cocidos"],["cebolla",75,"Media cebolla"],["zanahoria",80,"1 zanahoria rallada"],["avena",50,"5 cucharadas de avena"],["huevo",50,"1 huevo"],["ajo",5,"1 diente de ajo"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, comino y pimentón"]],
   pasos:["Pisá o procesá los garbanzos con el ajo.","Mezclá con la cebolla picada, la zanahoria, el huevo, la avena y los condimentos. Dejá reposar 10 minutos.","Formá 8 hamburguesas.","Horneá en placa aceitada a 200 °C, 10 minutos por lado."],
   fuentes:["MDZ: hamburguesas de garbanzos 200 °C, 10 min por lado, reposo de 10 min"]},

  {id:"albondigas-pollo", cat:"viandas", nombre:"Albóndigas de pollo en salsa", emoji:"🍝", porciones:4, min:45, heladera:3, freezer:"3 meses",
   i:[["pechuga",500,"500 g de pechuga"],["huevo",50,"1 huevo"],["avena",40,"4 cucharadas de avena"],["cebolla",150,"1 cebolla"],["zanahoria",80,"1 zanahoria"],["tomate_tri",520,"1 caja de tomate triturado"],["ajo",5,"1 diente de ajo"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, orégano y perejil"]],
   pasos:["Procesá el pollo con el ajo, el huevo, la avena y el perejil.","Armá 20 bolitas y horneálas a 200 °C 15 minutos.","Rehogá la cebolla y la zanahoria, sumá el tomate.","Pasá las albóndigas a la salsa y cociná 15 minutos tapado."],
   fuentes:["Mismo método que las albóndigas de carne: horno 200 °C + 15 min en salsa"]},

  {id:"porotos-guisados", cat:"viandas", nombre:"Porotos guisados con verduras", emoji:"🫘", porciones:5, min:45, heladera:2, freezer:"3 meses",
   i:[["porotos",480,"2 latas de porotos"],["zapallo",400,"400 g de zapallo"],["papa",300,"2 papas"],["cebolla",150,"1 cebolla"],["morron",150,"1 morrón"],["tomate_tri",400,"400 g de tomate triturado"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimentón, comino y laurel"]],
   pasos:["Rehogá la cebolla y el morrón 5 minutos.","Sumá el zapallo y la papa en cubos, el tomate y agua hasta cubrir.","Cociná 20 minutos y agregá los porotos enjuagados.","Seguí 10 minutos más y condimentá."],
   fuentes:["Los Andes: guiso de legumbres ya cocidas listo en 30-35 min"]},

  {id:"calabaza-rellena", cat:"viandas", nombre:"Calabaza rellena gratinada", emoji:"🎃", porciones:4, min:60, heladera:3, freezer:"2 meses",
   i:[["zapallo",1500,"2 calabazas anco medianas"],["carne_picada",400,"400 g de carne picada"],["cebolla",150,"1 cebolla"],["choclo",150,"Media lata de choclo"],["queso_cremoso",100,"100 g de queso cremoso"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, comino y pimentón"]],
   pasos:["Cortá las calabazas al medio, sacá las semillas y asalas a 200 °C de 35 a 40 minutos.","Rehogá la cebolla con la carne y el choclo.","Rellená las mitades, poné el queso arriba.","Gratiná 10 minutos más."],
   fuentes:["Criterio de verduras asadas a 200 °C","Zapallitos rellenos: gratinado final 10 min"]},

  {id:"cerdo-manzanas", cat:"viandas", nombre:"Cerdo al horno con manzanas", emoji:"🍎", porciones:4, min:50, heladera:3, freezer:"3 meses",
   i:[["cerdo",800,"800 g de carré de cerdo en cubos"],["manzana",450,"3 manzanas"],["cebolla",150,"1 cebolla"],["mostaza",15,"1 cucharada de mostaza"],["miel",20,"1 cucharada de miel"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, romero y pimienta"]],
   pasos:["Cortá el cerdo en cubos de 3 cm y mezclalo con la mostaza, la miel, el aceite y el romero.","Poné todo en una fuente con la cebolla y las manzanas en gajos.","Horneá a 200 °C de 30 a 35 minutos, revolviendo una vez, hasta que el cerdo esté dorado y sin partes rosadas."],
   fuentes:["Técnica de asado de cubos de carne a 200 °C; cerdo cocido a 70 °C en el centro"]},

  {id:"ensalada-arroz-atun", cat:"viandas", nombre:"Ensalada de arroz integral y atún", emoji:"🥗", porciones:4, min:50, heladera:2, freezer:"No conviene",
   i:[["arroz_int",200,"200 g de arroz integral"],["atun",340,"2 latas de atún"],["choclo",200,"1 lata de choclo"],["zanahoria",160,"2 zanahorias ralladas"],["huevo",100,"2 huevos duros"],["tomate",300,"2 tomates"],["aceite",15,"1 cucharada y media de aceite"],["limon",30,"Jugo de medio limón"]],
   pasos:["Cociná el arroz integral 40 a 45 minutos y enfrialo rápido.","Hervé los huevos 10 minutos.","Mezclá el arroz con el atún, el choclo, la zanahoria, el tomate y el huevo picado.","Condimentá con aceite, limón y sal. Se come fría."],
   fuentes:["Cocción del arroz integral igual a la semana 1; arroz cocido, 2 días en heladera"]},

  {id:"pollo-arvejado", cat:"viandas", nombre:"Pollo arvejado", emoji:"🍗", porciones:4, min:45, heladera:3, freezer:"3 meses",
   i:[["pollo_presa",1000,"1 kg de pata muslo sin piel"],["arvejas",300,"2 latas de arvejas"],["cebolla",150,"1 cebolla"],["morron",150,"1 morrón"],["zanahoria",80,"1 zanahoria"],["tomate_tri",200,"200 g de tomate triturado"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimentón y laurel"]],
   pasos:["Dorá el pollo en una olla.","Sumá la cebolla, el morrón y la zanahoria picados y rehogá.","Agregá el tomate y caldo hasta la mitad del pollo. Cociná 30 minutos tapado.","Sumá las arvejas los últimos 5 minutos."],
   fuentes:["Mismo criterio que la cazuela de pollo (45-60 min en total)"]},

  {id:"frittata-verduras", cat:"viandas", nombre:"Frittata de verduras al horno", emoji:"🍳", porciones:6, min:40, heladera:2, freezer:"No conviene",
   i:[["huevo",400,"8 huevos"],["zapallito",300,"1 zapallito grande"],["morron",150,"1 morrón"],["cebolla",150,"1 cebolla"],["espinaca",150,"Un puñado de espinaca"],["queso_rallado",30,"3 cucharadas de queso rallado"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Rehogá todas las verduras picadas 8 minutos.","Batí los huevos con el queso y la sal.","Mezclá y volcá en una fuente aceitada.","Horneá a 180 °C unos 25 minutos, hasta que esté firme."],
   fuentes:["Crónica: tortilla al horno 180 °C 30-40 min","Los Andes: budín de huevo y verduras 180 °C 25-35 min"]},

  {id:"ensalada-lentejas", cat:"viandas", nombre:"Ensalada tibia de lentejas y verduras asadas", emoji:"🥗", porciones:4, min:40, heladera:2, freezer:"No conviene",
   i:[["lentejas",250,"250 g de lentejas secas"],["zapallo",400,"400 g de zapallo"],["morron",150,"1 morrón"],["cebolla_morada",150,"1 cebolla morada"],["espinaca",100,"Un puñado de espinaca"],["limon",30,"Jugo de medio limón"],["aceite",20,"2 cucharadas de aceite"],["especias",0,"Sal, comino y pimienta"]],
   pasos:["Hervé las lentejas 20 a 25 minutos sin remojo, hasta que estén tiernas.","Asá el zapallo, el morrón y la cebolla en cubos a 200 °C 30 minutos.","Mezclá con las lentejas escurridas y la espinaca.","Condimentá con limón, aceite y comino."],
   fuentes:["Verduras asadas a 200 °C 30-35 min","Lentejas sin remojo: 20-25 min de hervor"]},

  // ===== Salados rápidos =====
  {id:"fideos-brocoli-pollo", cat:"rapidos", nombre:"Fideos integrales con pollo y brócoli", emoji:"🥦", porciones:3, min:20, heladera:2, freezer:"No conviene",
   i:[["fideos_int",240,"240 g de fideos integrales"],["pechuga",300,"300 g de pechuga en cubos"],["brocoli",300,"300 g de brócoli"],["ajo",10,"2 dientes de ajo"],["queso_rallado",30,"3 cucharadas de queso rallado"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Hervé los fideos y sumá el brócoli los últimos 4 minutos.","Dorá el pollo con el ajo en el aceite 8 minutos.","Mezclá todo con el queso y un chorrito del agua de cocción."],
   fuentes:["Cocción de fideos según el paquete; pollo en cubos 8 min a fuego fuerte"]},

  {id:"wok-carne", cat:"rapidos", nombre:"Wok de carne y verduras", emoji:"🥢", porciones:3, min:20, heladera:3, freezer:"No conviene",
   i:[["carne_magra",500,"500 g de carne magra en tiras"],["morron",150,"1 morrón"],["cebolla",150,"1 cebolla"],["zanahoria",160,"2 zanahorias"],["brocoli",300,"300 g de brócoli"],["soja",30,"3 cucharadas de salsa de soja"],["maicena",5,"1 cucharadita de fécula"],["aceite",15,"1 cucharada y media de aceite"]],
   pasos:["Saltá la carne a fuego fuerte 3 minutos y retirala.","Saltá las verduras 5 minutos.","Volvé la carne, sumá la soja con la fécula disuelta y saltá 1 minuto."],
   fuentes:["Técnica de salteado a fuego fuerte, igual al wok de pollo"]},

  {id:"quesadillas-pollo", cat:"rapidos", nombre:"Quesadillas de pollo", emoji:"🌮", porciones:2, min:15, heladera:1, freezer:"No conviene",
   i:[["tortilla_trigo",160,"4 tortillas de trigo"],["pechuga",200,"200 g de pechuga"],["mozzarella",80,"80 g de mozzarella"],["morron",75,"Medio morrón"],["cebolla",75,"Media cebolla"],["aceite",5,"Unas gotas de aceite"],["especias",0,"Sal, comino y pimentón"]],
   pasos:["Saltá el pollo en tiras con la cebolla y el morrón 8 minutos.","Repartí sobre 2 tortillas con la mozzarella y tapá con las otras.","Dorá en sartén 2 minutos por lado y cortá en triángulos."],
   fuentes:["Técnica de plancha"]},

  {id:"pizza-sarten-avena", cat:"rapidos", nombre:"Pizza de sartén con base de avena", emoji:"🍕", porciones:1, min:15, heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["avena",80,"8 cucharadas de avena procesada"],["huevo",100,"2 huevos"],["leche",30,"Un chorrito de leche"],["tomate_tri",80,"4 cucharadas de tomate triturado"],["mozzarella",80,"80 g de mozzarella"],["especias",0,"Sal y orégano"]],
   pasos:["Mezclá la avena con los huevos, la leche y sal.","Volcá en una sartén aceitada a fuego bajo, tapá y cociná 5 minutos.","Dala vuelta, poné tomate, mozzarella y orégano, y tapá 3 minutos más."],
   fuentes:["Crónica y Los Andes: pan de avena y huevo en sartén, pocos minutos por lado"]},

  {id:"huevos-criolla", cat:"rapidos", nombre:"Huevos a la criolla en sartén", emoji:"🍳", porciones:2, min:15, heladera:1, freezer:"No conviene",
   i:[["huevo",200,"4 huevos"],["tomate_tri",300,"300 g de tomate triturado"],["cebolla",75,"Media cebolla"],["morron",75,"Medio morrón"],["aceite",5,"Unas gotas de aceite"],["especias",0,"Sal, comino y pimentón"]],
   pasos:["Rehogá la cebolla y el morrón 5 minutos y sumá el tomate.","Cociná 5 minutos y hacé 4 huecos.","Rompé un huevo en cada hueco, tapá y cociná 4 a 5 minutos, hasta que la clara cuaje."],
   fuentes:["Técnica de huevos en salsa: clara cuajada a fuego bajo con tapa"]},

  {id:"ensalada-cesar", cat:"rapidos", nombre:"Ensalada César liviana", emoji:"🥗", porciones:2, min:15, heladera:1, freezer:"No conviene",
   i:[["lechuga",200,"1 planta de lechuga"],["pechuga",250,"250 g de pechuga"],["pan_integral",60,"2 rebanadas de pan integral"],["queso_rallado",20,"2 cucharadas de queso rallado"],["yogur",80,"4 cucharadas de yogur natural"],["mostaza",5,"1 cucharadita de mostaza"],["limon",15,"Unas gotas de limón"],["aceite",10,"1 cucharada de aceite"]],
   pasos:["Cociná el pollo a la plancha 6 minutos por lado y cortalo en tiras.","Tostá el pan en cubos.","Mezclá el yogur, la mostaza, el limón y el queso para el aderezo.","Armá con lechuga, pollo, croutons y aderezo."],
   fuentes:["Técnica de plancha y aderezo en frío"]},

  {id:"sandwich-atun", cat:"rapidos", nombre:"Sándwich de atún y huevo", emoji:"🥪", porciones:2, min:10, heladera:1, freezer:"No conviene",
   i:[["pan_integral",120,"4 rebanadas de pan integral"],["atun",170,"1 lata de atún"],["huevo",50,"1 huevo duro"],["yogur",30,"2 cucharadas de yogur"],["tomate",150,"1 tomate"],["lechuga",40,"Hojas de lechuga"]],
   pasos:["Mezclá el atún escurrido con el yogur y el huevo picado.","Armá los sándwiches con lechuga y tomate."],
   fuentes:["Armado sin cocción, salvo el huevo duro (10 min)"]},

  {id:"arroz-salteado", cat:"rapidos", nombre:"Arroz salteado con huevo", emoji:"🍚", porciones:2, min:10, heladera:1, freezer:"No conviene",
   i:[["arroz_int",120,"2 tazas de arroz integral ya cocido"],["huevo",100,"2 huevos"],["zanahoria",80,"1 zanahoria rallada"],["arvejas",100,"Media lata de arvejas"],["cebolla_verdeo",30,"1 cebolla de verdeo"],["soja",20,"2 cucharadas de salsa de soja"],["aceite",10,"1 cucharada de aceite"]],
   pasos:["Saltá la zanahoria y el verdeo 2 minutos.","Sumá el arroz frío y las arvejas y saltá 3 minutos.","Corré todo a un costado, revolvé los huevos y mezclá con la soja."],
   fuentes:["Aprovecha el arroz de la semana; arroz cocido, máximo 2 días en heladera"]},

  {id:"tacos-carne", cat:"rapidos", nombre:"Tacos de carne picada", emoji:"🌮", porciones:2, min:15, heladera:2, freezer:"No conviene",
   i:[["tortilla_trigo",160,"4 tortillas de trigo"],["carne_picada",250,"250 g de carne picada"],["cebolla",75,"Media cebolla"],["morron",75,"Medio morrón"],["tomate",150,"1 tomate"],["lechuga",40,"Lechuga"],["aceite",5,"Unas gotas de aceite"],["especias",0,"Sal, comino y pimentón"]],
   pasos:["Saltá la cebolla y el morrón, sumá la carne y los condimentos y cociná 8 minutos.","Calentá las tortillas.","Armá con carne, tomate y lechuga."],
   fuentes:["Técnica de salteado"]},

  {id:"bunuelos-acelga", cat:"rapidos", nombre:"Buñuelos de acelga al horno", emoji:"🥬", porciones:4, min:30, heladera:2, freezer:"2 meses",
   i:[["acelga",500,"Medio atado de acelga"],["huevo",100,"2 huevos"],["harina",80,"80 g de harina"],["cebolla",75,"Media cebolla"],["queso_rallado",20,"2 cucharadas de queso rallado"],["polvo_hornear",5,"1 cucharadita de polvo de hornear"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal y nuez moscada"]],
   pasos:["Hervé la acelga 5 minutos, escurrila muy bien y picala.","Mezclá con la cebolla rallada, los huevos, la harina, el queso y el polvo de hornear.","Poné cucharadas en placa aceitada y horneá a 200 °C 15 minutos, dando vuelta a mitad."],
   fuentes:["La Gaceta: buñuelos de espinaca al horno","Diario Uno: buñuelos sin fritura"]},

  {id:"brochetas-pollo", cat:"rapidos", nombre:"Brochetas de pollo y verduras", emoji:"🍢", porciones:2, min:20, heladera:2, freezer:"No conviene",
   i:[["pechuga",400,"400 g de pechuga en cubos"],["morron",150,"1 morrón"],["cebolla",150,"1 cebolla"],["zapallito",200,"1 zapallito"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimentón y limón"]],
   pasos:["Armá las brochetas alternando pollo y verduras.","Pincelalas con aceite y condimentos.","Cocinalas en plancha bien caliente de 10 a 12 minutos, girándolas."],
   fuentes:["Técnica de plancha; pollo cocido sin partes rosadas"]},

  {id:"sopa-verduras", cat:"rapidos", nombre:"Sopa de verduras con fideos", emoji:"🥣", porciones:3, min:25, heladera:3, freezer:"3 meses",
   i:[["zapallo",300,"300 g de zapallo"],["zanahoria",160,"2 zanahorias"],["papa",200,"1 papa"],["cebolla",150,"1 cebolla"],["zapallito",200,"1 zapallito"],["fideos",60,"Un puñado de fideos cabello de ángel"],["especias",0,"Sal y perejil"]],
   pasos:["Cortá todas las verduras en cubitos.","Hervilas en 1,5 litros de agua con sal 15 minutos.","Sumá los fideos y cociná el tiempo del paquete."],
   fuentes:["Cocción de verduras en cubos chicos, 15 min"]},

  {id:"papas-rellenas", cat:"rapidos", nombre:"Papas rellenas al microondas", emoji:"🥔", porciones:2, min:15, heladera:1, freezer:"No conviene",
   i:[["papa",500,"2 papas grandes"],["queso_cremoso",60,"60 g de queso cremoso"],["jamon",60,"60 g de jamón cocido"],["cebolla_verdeo",20,"Verdeo picado"],["aceite",5,"Unas gotas de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Pinchá las papas con un tenedor y cocinalas en el microondas de 8 a 10 minutos, dándolas vuelta a mitad.","Cortalas al medio y ahuecalas un poco.","Mezclá la pulpa con el jamón, el queso y el verdeo, rellená y calentá 1 minuto más."],
   fuentes:["Técnica de papa entera al microondas, 8-10 min según tamaño"]},

  {id:"burrito-porotos", cat:"rapidos", nombre:"Burritos de porotos", emoji:"🌯", porciones:2, min:15, heladera:2, freezer:"No conviene",
   i:[["tortilla_trigo",160,"4 tortillas de trigo"],["porotos",240,"1 lata de porotos"],["arroz_int",60,"1 taza de arroz ya cocido"],["tomate",150,"1 tomate"],["cebolla",75,"Media cebolla"],["queso_cremoso",60,"60 g de queso cremoso"],["especias",0,"Sal, comino y pimentón"]],
   pasos:["Saltá la cebolla y sumá los porotos con los condimentos, pisando un poco.","Calentá las tortillas.","Rellená con porotos, arroz, tomate y queso, y enrollá."],
   fuentes:["Armado con legumbres ya cocidas"]},

  {id:"omelette-jamon", cat:"rapidos", nombre:"Omelette de jamón y queso", emoji:"🍳", porciones:1, min:8, heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["huevo",100,"2 huevos"],["jamon",40,"2 fetas de jamón"],["queso_cremoso",30,"30 g de queso cremoso"],["aceite",3,"Unas gotas de aceite"],["especias",0,"Sal"]],
   pasos:["Batí los huevos con sal y volcalos en la sartén a fuego medio.","Cuando los bordes estén firmes, poné jamón y queso en una mitad.","Doblá, tapá 1 minuto y serví."],
   fuentes:["Técnica básica de omelette"]},

  {id:"tostado-pollo", cat:"rapidos", nombre:"Tostado integral de pollo", emoji:"🥪", porciones:1, min:8, heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["pan_integral",80,"2 rebanadas grandes de pan integral"],["pechuga",80,"Pollo cocido de la semana"],["queso_cremoso",30,"30 g de queso cremoso"],["tomate",60,"Rodajas de tomate"]],
   pasos:["Armá el sándwich con el pollo desmenuzado, el queso y el tomate.","Tostalo en sandwichera o sartén tapada 3 minutos por lado."],
   fuentes:["Aprovecha el pollo de la semana"]},

  {id:"fideos-tomate", cat:"rapidos", nombre:"Fideos con tomate fresco y albahaca", emoji:"🍅", porciones:2, min:15, heladera:2, freezer:"No conviene",
   i:[["fideos",200,"200 g de fideos"],["tomate",400,"3 tomates maduros"],["ajo",10,"2 dientes de ajo"],["aceite",15,"1 cucharada y media de aceite"],["queso_rallado",20,"2 cucharadas de queso rallado"],["especias",0,"Sal y albahaca"]],
   pasos:["Hervé los fideos.","Saltá el ajo en el aceite 1 minuto y sumá los tomates en cubos. Cociná 5 minutos.","Mezclá con los fideos, la albahaca y el queso."],
   fuentes:["Salsa rápida de tomate fresco, 5-6 min"]},

  {id:"ensalada-pollo-palta", cat:"rapidos", nombre:"Ensalada de pollo, palta y tomate", emoji:"🥑", porciones:2, min:15, heladera:1, freezer:"No conviene",
   i:[["pechuga",250,"250 g de pechuga"],["palta",160,"1 palta"],["tomate",300,"2 tomates"],["cebolla_morada",75,"Media cebolla morada"],["lechuga",80,"Hojas verdes"],["limon",30,"Jugo de medio limón"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Cociná el pollo a la plancha y cortalo en cubos.","Mezclá con la palta, el tomate, la cebolla y las hojas.","Condimentá con limón, aceite y sal."],
   fuentes:["Técnica de plancha y armado en frío"]},

  // ===== Dulces sin culpa =====
  {id:"torta-manzana", cat:"dulces", nombre:"Torta de manzana y avena", emoji:"🍏", porciones:8, min:55, heladera:4, freezer:"2 meses",
   i:[["manzana",400,"2 manzanas grandes"],["huevo",100,"2 huevos"],["avena",100,"1 taza de avena"],["banana",120,"1 banana madura"],["polvo_hornear",5,"1 cucharadita de polvo de hornear"],["especias",0,"Canela y vainilla"]],
   pasos:["Prendé el horno a 180 °C.","Rallá una manzana y cortá la otra en láminas finas.","Mezclá la banana pisada, los huevos, la avena, el polvo de hornear, la canela y la manzana rallada.","Volcá en un molde de 20 cm, cubrí con las láminas y horneá de 35 a 40 minutos, hasta que un palillo salga seco."],
   fuentes:["MDZ: torta matera de manzana sin azúcar ni harina, 40-45 min","Sitio Andino: torta de avena y manzana, 35-40 min"]},

  {id:"brownie-banana", cat:"dulces", nombre:"Brownie de banana y cacao", emoji:"🍫", porciones:9, min:35, heladera:5, freezer:"2 meses",
   i:[["banana",240,"2 bananas bien maduras"],["huevo",100,"2 huevos"],["cacao",30,"3 cucharadas de cacao amargo"],["avena",60,"6 cucharadas de avena"],["miel",40,"2 cucharadas de miel"],["polvo_hornear",5,"1 cucharadita de polvo de hornear"]],
   pasos:["Prendé el horno a 180 °C.","Pisá las bananas y mezclá con los huevos y la miel.","Sumá el cacao, la avena procesada y el polvo de hornear.","Volcá en un molde de 20 × 20 cm con papel manteca y horneá de 20 a 25 minutos."],
   fuentes:["Bulk: brownie de banana 180 °C 25 min","FatSecret: brownie sin harina 180 °C 20 min","Los Andes: 15-20 min en molde chico"]},

  {id:"flan-liviano", cat:"dulces", nombre:"Flan casero liviano", emoji:"🍮", porciones:6, min:60, heladera:3, freezer:"No conviene",
   i:[["huevo",250,"5 huevos"],["leche",500,"500 ml de leche descremada"],["miel",60,"3 cucharadas de miel"],["especias",0,"Esencia de vainilla"]],
   pasos:["Prendé el horno a 180 °C.","Batí los huevos con la miel y la vainilla y sumá la leche tibia.","Volcá en una flanera y ponela dentro de una fuente con 2 cm de agua caliente.","Horneá de 45 a 50 minutos, hasta que el centro tiemble apenas.","Enfrialo y dejalo 4 horas en la heladera antes de desmoldar."],
   fuentes:["La Nación: flan clásico, 45-50 min en molde grande","FatSecret: flan light a baño maría 180 °C","Real Academia de Gastronomía: 180 °C 40 min"]},

  {id:"budin-limon", cat:"dulces", nombre:"Budín de limón y yogur", emoji:"🍋", porciones:10, min:55, heladera:5, freezer:"2 meses",
   i:[["yogur",200,"1 pote grande de yogur natural"],["huevo",150,"3 huevos"],["harina_int",100,"100 g de harina integral"],["harina",100,"100 g de harina 0000"],["miel",80,"4 cucharadas de miel"],["aceite",40,"4 cucharadas de aceite"],["limon",50,"Ralladura y jugo de 1 limón"],["polvo_hornear",10,"2 cucharaditas de polvo de hornear"]],
   pasos:["Prendé el horno a 180 °C y forrá una budinera.","Batí los huevos con la miel, el yogur, el aceite, el jugo y la ralladura.","Sumá las harinas y el polvo de hornear y mezclá apenas.","Horneá de 35 a 45 minutos, hasta que un palillo salga seco."],
   fuentes:["Aire de Santa Fe: budín de limón y yogur, 180 °C 35-45 min","Infozona: budín de limón sin azúcar"]},

  {id:"helado-banana", cat:"dulces", nombre:"Helado de banana en 3 minutos", emoji:"🍨", porciones:2, min:5, heladera:0, conserva:"Freezer 1 mes", freezer:"1 mes",
   i:[["banana",300,"3 bananas congeladas en rodajas"],["cacao",10,"1 cucharada de cacao (opcional)"],["leche",30,"Un chorrito de leche"]],
   pasos:["Congelá las bananas peladas y en rodajas desde la noche anterior.","Procesalas con la leche y el cacao hasta que queden cremosas, unos 3 minutos.","Servilo enseguida o guardalo en el freezer."],
   fuentes:["Técnica de helado de fruta congelada procesada"]},

  {id:"mousse-chocolate", cat:"dulces", nombre:"Mousse de chocolate y yogur", emoji:"🍫", porciones:4, min:15, heladera:3, freezer:"No conviene",
   i:[["yogur",400,"2 potes de yogur natural"],["cacao",25,"2 cucharadas y media de cacao"],["miel",40,"2 cucharadas de miel"],["gelatina",7,"1 sobre de gelatina sin sabor"],["leche",60,"60 ml de leche"]],
   pasos:["Hidratá la gelatina en la leche fría 5 minutos y calentala hasta disolver, sin hervir.","Batí el yogur con el cacao y la miel.","Sumá la gelatina tibia, repartí en vasitos y llevá a la heladera 2 horas."],
   fuentes:["Instrucciones del sobre de gelatina: hidratar en frío y disolver en caliente"]},

  {id:"cookies-avena-cacao", cat:"dulces", nombre:"Cookies de avena, cacao y maní", emoji:"🍪", porciones:14, min:25, heladera:5, conserva:"Frasco hermético 5 días", freezer:"2 meses",
   i:[["avena",150,"1 taza y media de avena"],["banana",120,"1 banana madura"],["huevo",50,"1 huevo"],["mani_pasta",30,"2 cucharadas de pasta de maní"],["cacao",15,"1 cucharada y media de cacao"],["miel",30,"1 cucharada y media de miel"]],
   pasos:["Prendé el horno a 180 °C.","Mezclá la banana pisada con el huevo, la pasta de maní, la miel y el cacao.","Sumá la avena y armá 14 cookies en placa con papel.","Horneá de 12 a 15 minutos."],
   fuentes:["Aire de Santa Fe: galletitas de avena y banana 180 °C 12-15 min"]},

  {id:"bocaditos-avena", cat:"dulces", nombre:"Bocaditos de avena y maní sin horno", emoji:"🥜", porciones:12, min:15, heladera:7, freezer:"2 meses",
   i:[["avena",120,"1 taza y cuarto de avena"],["mani_pasta",60,"4 cucharadas de pasta de maní"],["miel",40,"2 cucharadas de miel"],["cacao",15,"1 cucharada y media de cacao"]],
   pasos:["Mezclá todo hasta que se una.","Armá 12 bolitas con las manos húmedas.","Llevalas a la heladera 30 minutos para que se afirmen."],
   fuentes:["Preparación sin cocción"]},

  {id:"manzanas-asadas", cat:"dulces", nombre:"Manzanas asadas con canela", emoji:"🍎", porciones:4, min:40, heladera:3, freezer:"No conviene",
   i:[["manzana",600,"4 manzanas"],["miel",20,"1 cucharada de miel"],["nueces",20,"Unas nueces picadas"],["especias",0,"Canela"]],
   pasos:["Sacales el centro a las manzanas sin atravesarlas.","Rellená con nueces, miel y canela.","Horneá a 180 °C de 30 a 35 minutos, hasta que estén tiernas."],
   fuentes:["MDZ: crumble de manzana, 180 °C 35-40 min hasta que la fruta se ablanda"]},

  {id:"gelatina-frutillas", cat:"dulces", nombre:"Gelatina de yogur y frutillas", emoji:"🍓", porciones:4, min:15, heladera:3, freezer:"No conviene",
   i:[["gelatina",14,"2 sobres de gelatina sin sabor"],["frutillas",250,"250 g de frutillas"],["yogur",300,"300 g de yogur natural"],["miel",30,"1 cucharada y media de miel"]],
   pasos:["Hidratá la gelatina en 100 ml de agua fría y disolvela en 200 ml de agua caliente.","Licuá la mitad de las frutillas con el yogur y la miel, y sumá la gelatina.","Repartí con el resto de las frutillas en trozos y llevá a la heladera 3 horas."],
   fuentes:["Instrucciones del sobre de gelatina sin sabor"]},

  {id:"bizcochuelo-naranja", cat:"dulces", nombre:"Bizcochuelo de naranja liviano", emoji:"🍊", porciones:10, min:55, heladera:5, freezer:"2 meses",
   i:[["naranja",250,"Jugo y ralladura de 2 naranjas"],["huevo",150,"3 huevos"],["harina",200,"200 g de harina"],["miel",80,"4 cucharadas de miel"],["aceite",50,"5 cucharadas de aceite"],["polvo_hornear",10,"2 cucharaditas de polvo de hornear"]],
   pasos:["Prendé el horno a 180 °C y aceitá un molde de 22 cm.","Batí los huevos con la miel hasta que espumen.","Sumá el aceite, el jugo y la ralladura, y después la harina con el polvo de hornear.","Horneá de 35 a 40 minutos."],
   fuentes:["Mismo criterio que el budín de limón: 180 °C 35-45 min"]},

  {id:"cheesecake-vaso", cat:"dulces", nombre:"Cheesecake en vasito sin horno", emoji:"🍰", porciones:4, min:15, heladera:3, freezer:"No conviene",
   i:[["queso_untable",200,"200 g de queso untable light"],["yogur",200,"1 pote de yogur natural"],["miel",40,"2 cucharadas de miel"],["avena",60,"6 cucharadas de avena tostada"],["frutillas",150,"150 g de frutillas"],["especias",0,"Vainilla y ralladura de limón"]],
   pasos:["Tostá la avena en sartén 3 minutos.","Batí el queso con el yogur, la miel, la vainilla y la ralladura.","Armá vasitos: avena, crema y frutillas. Heladera 2 horas."],
   fuentes:["Preparación en frío"]},

  {id:"barritas-cereal", cat:"dulces", nombre:"Barritas de cereal caseras", emoji:"🌾", porciones:10, min:35, heladera:10, conserva:"Frasco hermético 10 días", freezer:"2 meses",
   i:[["avena",200,"2 tazas de avena"],["mani_pasta",60,"4 cucharadas de pasta de maní"],["miel",80,"4 cucharadas de miel"],["pasas",50,"Un puñado de pasas"],["nueces",30,"Unas nueces picadas"]],
   pasos:["Calentá la miel con la pasta de maní hasta que se unan.","Mezclá con la avena, las pasas y las nueces.","Apretá en una fuente con papel manteca y horneá a 170 °C de 15 a 20 minutos.","Dejá enfriar del todo antes de cortar 10 barritas."],
   fuentes:["UPO: granola casera 175 °C 15-20 min"]},

  {id:"muffins-zanahoria", cat:"dulces", nombre:"Muffins de zanahoria", emoji:"🥕", porciones:12, min:40, heladera:4, freezer:"2 meses",
   i:[["zanahoria",200,"2 zanahorias ralladas"],["huevo",100,"2 huevos"],["harina_int",150,"150 g de harina integral"],["avena",50,"5 cucharadas de avena"],["miel",60,"3 cucharadas de miel"],["aceite",50,"5 cucharadas de aceite"],["polvo_hornear",10,"2 cucharaditas de polvo de hornear"],["nueces",30,"Unas nueces picadas"],["especias",0,"Canela"]],
   pasos:["Prendé el horno a 180 °C.","Batí los huevos con la miel y el aceite.","Sumá la zanahoria, la harina, la avena, el polvo de hornear, la canela y las nueces.","Repartí en 12 pirotines y horneá de 20 a 25 minutos."],
   fuentes:["Mismo criterio que los muffins de manzana: 180 °C 20-25 min"]},

  {id:"crumble-manzana", cat:"dulces", nombre:"Crumble de manzana y avena", emoji:"🥧", porciones:6, min:50, heladera:4, freezer:"2 meses",
   i:[["manzana",700,"4 manzanas"],["avena",100,"1 taza de avena"],["harina_int",40,"4 cucharadas de harina integral"],["miel",30,"1 cucharada y media de miel"],["aceite",30,"3 cucharadas de aceite"],["especias",0,"Canela"]],
   pasos:["Prendé el horno a 180 °C.","Cortá las manzanas en cubos con la canela y ponelas en una fuente.","Mezclá la avena, la harina, la miel y el aceite hasta formar migas y cubrí la fruta.","Horneá de 35 a 40 minutos, hasta que se dore."],
   fuentes:["MDZ: apple crumble de avena 180 °C 35-40 min","Los Andes: crumble saludable"]},

  {id:"compota-manzana", cat:"dulces", nombre:"Compota de manzana y naranja", emoji:"🍎", porciones:4, min:25, heladera:5, freezer:"3 meses",
   i:[["manzana",450,"3 manzanas"],["naranja",150,"Jugo de 1 naranja"],["especias",0,"Canela en rama y clavo de olor"]],
   pasos:["Pelá y cortá las manzanas en cubos.","Cocinalas con el jugo de naranja, la canela y medio vaso de agua a fuego bajo de 15 a 20 minutos, hasta que estén tiernas.","Servila tibia o fría."],
   fuentes:["Cocción de fruta en cubos a fuego bajo, 15-20 min"]},

  // ===== Desayunos y meriendas =====
  {id:"pudding-chia", cat:"desayunos", nombre:"Pudding de chía", emoji:"🥛", porciones:1, min:5, heladera:3, freezer:"No conviene",
   i:[["chia",30,"3 cucharadas de chía"],["leche",240,"1 taza de leche"],["miel",10,"1 cucharadita de miel"],["frutillas",80,"Unas frutillas"]],
   pasos:["Mezclá la chía con la leche y la miel en un frasco.","Revolvé de nuevo a los 5 minutos para que no se apelmace.","Dejalo en la heladera toda la noche y sumá la fruta a la mañana."],
   fuentes:["UPO y Diario Uno: 3 cucharadas de chía por taza de leche, reposo de 2 h a toda la noche"]},

  {id:"pan-avena-sarten", cat:"desayunos", nombre:"Pan de avena en sartén", emoji:"🍞", porciones:1, min:5, heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["avena",30,"3 cucharadas de avena procesada"],["huevo",50,"1 huevo"],["yogur",15,"1 cucharada de yogur"],["polvo_hornear",2,"Media cucharadita de polvo de hornear"],["especias",0,"Sal"]],
   pasos:["Mezclá todo en un bowl.","Volcá en una sartén chica aceitada a fuego medio.","Cociná 1 minuto y medio por lado. Cortalo al medio y rellenalo a gusto."],
   fuentes:["Crónica: pan de avena exprés sin horno","Los Andes: 1 minuto y medio por lado"]},

  {id:"licuado-banana", cat:"desayunos", nombre:"Licuado de banana y avena", emoji:"🍌", porciones:1, min:3, heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["banana",120,"1 banana"],["avena",20,"2 cucharadas de avena"],["leche",250,"1 vaso de leche"],["especias",0,"Canela"]],
   pasos:["Licuá todo 1 minuto.","Tomalo enseguida."],
   fuentes:["Preparación sin cocción"]},

  {id:"tostadas-francesas", cat:"desayunos", nombre:"Tostadas francesas al horno", emoji:"🍞", porciones:4, min:30, heladera:2, freezer:"1 mes",
   i:[["pan_integral",240,"8 rebanadas de pan integral"],["huevo",150,"3 huevos"],["leche",200,"200 ml de leche"],["miel",20,"1 cucharada de miel"],["especias",0,"Canela y vainilla"]],
   pasos:["Batí los huevos con la leche, la miel, la canela y la vainilla.","Remojá cada rebanada unos segundos de cada lado.","Horneá en placa con papel a 200 °C, 10 minutos por lado."],
   fuentes:["Técnica de horneado de pan remojado en huevo, 200 °C"]},

  {id:"revuelto-espinaca", cat:"desayunos", nombre:"Huevos revueltos con espinaca", emoji:"🍳", porciones:1, min:5, heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["huevo",100,"2 huevos"],["espinaca",50,"Un puñado de espinaca"],["pan_integral",40,"1 rebanada de pan integral"],["aceite",3,"Unas gotas de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Saltá la espinaca 1 minuto.","Sumá los huevos batidos y revolvé a fuego bajo hasta que cuajen.","Serví sobre el pan tostado."],
   fuentes:["Técnica básica de revuelto"]},

  {id:"scones-queso", cat:"desayunos", nombre:"Scones de queso livianos", emoji:"🧀", porciones:12, min:30, heladera:4, freezer:"2 meses",
   i:[["harina",250,"250 g de harina"],["queso_rallado",60,"6 cucharadas de queso rallado"],["yogur",150,"1 pote de yogur natural"],["huevo",50,"1 huevo"],["aceite",40,"4 cucharadas de aceite"],["polvo_hornear",10,"2 cucharaditas de polvo de hornear"],["especias",0,"Sal"]],
   pasos:["Prendé el horno a 200 °C.","Mezclá la harina, el polvo de hornear, la sal y el queso.","Sumá el yogur, el huevo y el aceite y uní sin amasar de más.","Estirá de 2 cm, cortá 12 scones y horneá de 15 a 18 minutos."],
   fuentes:["Técnica de scones: horno fuerte 200 °C, 15-18 min"]},

  {id:"muffins-huevo", cat:"desayunos", nombre:"Muffins de huevo y verduras", emoji:"🧁", porciones:6, min:30, heladera:3, freezer:"1 mes",
   i:[["huevo",300,"6 huevos"],["espinaca",80,"Un puñado de espinaca"],["morron",75,"Medio morrón"],["cebolla",75,"Media cebolla"],["queso_rallado",30,"3 cucharadas de queso rallado"],["leche",50,"Un chorrito de leche"],["especias",0,"Sal y pimienta"]],
   pasos:["Prendé el horno a 180 °C y aceitá 6 moldes de muffin.","Picá las verduras y repartilas en los moldes.","Batí los huevos con la leche, el queso y la sal y completá.","Horneá unos 20 minutos, hasta que estén firmes."],
   fuentes:["Los Andes: budín de huevo y verduras 180 °C"]},

  {id:"porridge-avena", cat:"desayunos", nombre:"Avena caliente con banana", emoji:"🥣", porciones:1, min:5, heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["avena",40,"4 cucharadas de avena"],["leche",250,"1 taza de leche"],["banana",60,"Media banana"],["miel",5,"Un hilo de miel"],["especias",0,"Canela"]],
   pasos:["Cociná la avena con la leche a fuego bajo 4 minutos, revolviendo.","Serví con la banana en rodajas, la miel y la canela."],
   fuentes:["Cocción de avena arrollada: 3-5 min"]},

  {id:"yogur-manzana", cat:"desayunos", nombre:"Yogur con avena y manzana", emoji:"🍏", porciones:1, min:2, heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["yogur",170,"1 pote de yogur natural"],["avena",30,"3 cucharadas de avena"],["manzana",100,"Media manzana"],["especias",0,"Canela"]],
   pasos:["Poné el yogur en un bowl.","Sumá la avena, la manzana en cubitos y la canela."],
   fuentes:["Armado sin cocción"]},

  {id:"tostadas-queso-tomate", cat:"desayunos", nombre:"Tostadas con queso y tomate", emoji:"🍅", porciones:1, min:5, heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["pan_integral",60,"2 rebanadas de pan integral"],["queso_untable",30,"2 cucharadas de queso untable"],["tomate",80,"Medio tomate"],["especias",0,"Sal y orégano"]],
   pasos:["Tostá el pan.","Untá el queso y poné rodajas de tomate con sal y orégano."],
   fuentes:["Armado sin cocción"]},

  {id:"smoothie-frutillas", cat:"desayunos", nombre:"Smoothie de frutillas", emoji:"🍓", porciones:1, min:3, heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["frutillas",150,"150 g de frutillas"],["banana",60,"Media banana"],["yogur",120,"Medio pote de yogur"],["leche",100,"Medio vaso de leche"]],
   pasos:["Licuá todo 1 minuto.","Tomalo enseguida."],
   fuentes:["Preparación sin cocción"]},

  {id:"tortitas-zapallo", cat:"desayunos", nombre:"Tortitas de zapallo", emoji:"🎃", porciones:8, min:25, heladera:3, freezer:"2 meses",
   i:[["zapallo",300,"300 g de zapallo cocido y pisado"],["harina_int",120,"120 g de harina integral"],["huevo",50,"1 huevo"],["leche",60,"60 ml de leche"],["polvo_hornear",5,"1 cucharadita de polvo de hornear"],["miel",15,"1 cucharada de miel"],["especias",0,"Canela"]],
   pasos:["Mezclá el puré de zapallo con el huevo, la leche y la miel.","Sumá la harina, el polvo de hornear y la canela.","Cociná cucharadas en sartén aceitada a fuego medio, 2 minutos por lado."],
   fuentes:["Banco de alimentos 2harvest: panqueques 2 min por lado a fuego medio"]},

  {id:"pan-integral", cat:"desayunos", nombre:"Pan integral casero", emoji:"🍞", porciones:14, min:110, heladera:5, freezer:"3 meses (en rebanadas)",
   i:[["harina_int",300,"300 g de harina integral"],["harina",200,"200 g de harina 0000"],["levadura",10,"10 g de levadura seca"],["aceite",20,"2 cucharadas de aceite"],["miel",10,"1 cucharadita de miel"],["especias",0,"10 g de sal"]],
   pasos:["Mezclá las harinas, la levadura y la sal. Sumá el aceite, la miel y 330 ml de agua tibia.","Amasá 10 minutos y dejá leudar tapado 1 hora, hasta que duplique.","Desgasificá, poné en una budinera aceitada y dejá leudar 30 minutos más.","Horneá a 200 °C de 30 a 35 minutos, hasta que suene hueco al golpearlo abajo."],
   fuentes:["Técnica de pan casero: leudado de 1 h y horno 200 °C 30-35 min"]},

  {id:"tostadas-mani-banana", cat:"desayunos", nombre:"Tostadas con maní y banana", emoji:"🥜", porciones:1, min:3, heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["pan_integral",60,"2 rebanadas de pan integral"],["mani_pasta",15,"1 cucharada de pasta de maní"],["banana",60,"Media banana"]],
   pasos:["Tostá el pan.","Untá la pasta de maní y poné la banana en rodajas."],
   fuentes:["Armado sin cocción"]},

  // ===== Guarniciones y ensaladas =====
  {id:"pure-calabaza", cat:"guarniciones", nombre:"Puré de calabaza", emoji:"🎃", porciones:4, min:25, heladera:3, freezer:"3 meses",
   i:[["zapallo",800,"800 g de calabaza"],["leche",50,"Un chorrito de leche"],["especias",0,"Sal y nuez moscada"]],
   pasos:["Hervé la calabaza en cubos 20 minutos.","Escurrila y pisala con la leche, sal y nuez moscada."],
   fuentes:["Cocción de calabaza en cubos, ~20 min (igual al pastel de papa)"]},

  {id:"papas-romero", cat:"guarniciones", nombre:"Papas al horno con romero", emoji:"🥔", porciones:4, min:50, heladera:3, freezer:"No conviene",
   i:[["papa",800,"4 papas"],["aceite",20,"2 cucharadas de aceite"],["ajo",10,"2 dientes de ajo"],["especias",0,"Sal y romero"]],
   pasos:["Cortá las papas en gajos y secalas bien.","Mezclalas con el aceite, el ajo, el romero y la sal.","Horneá a 200 °C 30 minutos, revolvé y subí a 220 °C de 10 a 15 minutos para que queden crocantes."],
   fuentes:["El Espectador: papas crocantes 200 °C y suba final","Grupo Animal: 200 °C 30 min + máximo 20 min"]},

  {id:"ensalada-repollo", cat:"guarniciones", nombre:"Ensalada de repollo y zanahoria", emoji:"🥗", porciones:4, min:10, heladera:2, freezer:"No conviene",
   i:[["repollo",300,"Un cuarto de repollo"],["zanahoria",160,"2 zanahorias ralladas"],["yogur",80,"4 cucharadas de yogur"],["mostaza",5,"1 cucharadita de mostaza"],["limon",20,"Jugo de medio limón"],["aceite",10,"1 cucharada de aceite"]],
   pasos:["Cortá el repollo bien fino y rallá la zanahoria.","Mezclá el yogur, la mostaza, el limón, el aceite y la sal.","Uní todo y dejalo 10 minutos antes de servir."],
   fuentes:["Armado en frío"]},

  {id:"batatas-horno", cat:"guarniciones", nombre:"Batatas al horno", emoji:"🍠", porciones:4, min:40, heladera:3, freezer:"No conviene",
   i:[["batata",800,"3 batatas"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal, pimentón y una pizca de canela"]],
   pasos:["Cortá las batatas en bastones con cáscara bien lavada.","Mezclalas con el aceite y las especias.","Horneá a 200 °C de 30 a 35 minutos, dando vuelta una vez."],
   fuentes:["Mismo criterio que las batatas del pollo al horno a 200 °C"]},

  {id:"ensalada-remolacha", cat:"guarniciones", nombre:"Ensalada de remolacha y huevo", emoji:"🥗", porciones:3, min:50, heladera:3, freezer:"No conviene",
   i:[["remolacha",500,"3 remolachas"],["huevo",100,"2 huevos"],["perejil",10,"Perejil"],["aceite",10,"1 cucharada de aceite"],["limon",15,"Unas gotas de limón"],["especias",0,"Sal"]],
   pasos:["Hervé las remolachas con cáscara 40 minutos, hasta que se pinchen fácil. Pelalas y cortalas.","Hervé los huevos 10 minutos.","Mezclá con perejil, aceite, limón y sal."],
   fuentes:["Cocción de remolacha entera: 40-50 min según tamaño"]},

  {id:"chauchas-salteadas", cat:"guarniciones", nombre:"Chauchas salteadas con ajo", emoji:"🫛", porciones:3, min:15, heladera:3, freezer:"No conviene",
   i:[["chauchas",400,"400 g de chauchas"],["ajo",5,"1 diente de ajo"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Hervé las chauchas sin las puntas 6 minutos y pasalas por agua fría.","Saltalas con el ajo en el aceite 3 minutos."],
   fuentes:["Blanqueado de chauchas, 5-6 min"]},

  {id:"ensalada-tomate", cat:"guarniciones", nombre:"Ensalada de tomate y cebolla", emoji:"🍅", porciones:2, min:5, heladera:1, freezer:"No conviene",
   i:[["tomate",400,"3 tomates"],["cebolla_morada",100,"1 cebolla morada chica"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal y orégano"]],
   pasos:["Cortá los tomates en gajos y la cebolla en pluma fina.","Condimentá con aceite, sal y orégano."],
   fuentes:["Armado en frío"]},

  {id:"pure-mixto", cat:"guarniciones", nombre:"Puré mixto de papa y calabaza", emoji:"🥔", porciones:4, min:25, heladera:3, freezer:"2 meses",
   i:[["papa",500,"3 papas"],["zapallo",400,"400 g de calabaza"],["leche",80,"80 ml de leche"],["especias",0,"Sal y nuez moscada"]],
   pasos:["Hervé la papa y la calabaza en cubos 20 minutos.","Escurrí y pisá con la leche, la sal y la nuez moscada."],
   fuentes:["Igual al puré del pastel de papa: 20 min de hervor"]},

  {id:"vegetales-vapor", cat:"guarniciones", nombre:"Vegetales al vapor con limón", emoji:"🥦", porciones:3, min:15, heladera:3, freezer:"No conviene",
   i:[["brocoli",300,"300 g de brócoli"],["zanahoria",160,"2 zanahorias"],["coliflor",300,"300 g de coliflor"],["aceite",10,"1 cucharada de aceite"],["limon",10,"Unas gotas de limón"],["especias",0,"Sal"]],
   pasos:["Cortá todo en trozos parecidos.","Cociná al vapor de 8 a 10 minutos, hasta que estén tiernos pero firmes.","Condimentá con aceite, limón y sal."],
   fuentes:["Cocción al vapor de verduras en ramitos, 8-10 min"]},

  {id:"ensalada-pepino", cat:"guarniciones", nombre:"Ensalada de pepino y yogur", emoji:"🥒", porciones:2, min:10, heladera:1, freezer:"No conviene",
   i:[["pepino",300,"1 pepino grande"],["yogur",150,"1 pote chico de yogur natural"],["ajo",3,"Medio diente de ajo"],["limon",10,"Unas gotas de limón"],["especias",0,"Sal y menta"]],
   pasos:["Rallá o cortá el pepino en cubitos y escurrilo.","Mezclá con el yogur, el ajo rallado, el limón, la sal y la menta."],
   fuentes:["Armado en frío"]}
);
