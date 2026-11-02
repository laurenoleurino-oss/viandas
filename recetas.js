// Datos de la app Viandas Sin Vueltas.
// Las cantidades van en gramos de compra; "comestible" descuenta hueso o cáscara para la tabla nutricional.
// Valores nutricionales por 100 g (aprox. USDA FoodData Central / tablas argentinas), orientativos.

var NUTRI = {
  pollo_presa:   {n:"Pata muslo de pollo sin piel", g:"Carnicería", kcal:121, p:19.7, c:0,   gr:4.1, comestible:0.7},
  pechuga:       {n:"Pechuga de pollo",            g:"Carnicería", kcal:120, p:22.5, c:0,   gr:2.6},
  carne_picada:  {n:"Carne picada especial",       g:"Carnicería", kcal:176, p:20,   c:0,   gr:10},
  batata:        {n:"Batata",                      g:"Verdulería", kcal:86,  p:1.6,  c:20.1,gr:0.1, comestible:0.85},
  cebolla:       {n:"Cebolla",                     g:"Verdulería", kcal:40,  p:1.1,  c:9.3, gr:0.1},
  cebolla_morada:{n:"Cebolla morada",              g:"Verdulería", kcal:40,  p:1.1,  c:9.3, gr:0.1},
  zapallito:     {n:"Zapallitos verdes",           g:"Verdulería", kcal:17,  p:1.2,  c:3.1, gr:0.3},
  zanahoria:     {n:"Zanahoria",                   g:"Verdulería", kcal:41,  p:0.9,  c:9.6, gr:0.2},
  morron:        {n:"Morrón rojo",                 g:"Verdulería", kcal:31,  p:1,    c:6,   gr:0.3},
  zapallo:       {n:"Zapallo anco",                g:"Verdulería", kcal:45,  p:1,    c:11.7,gr:0.1, comestible:0.85},
  brocoli:       {n:"Brócoli",                     g:"Verdulería", kcal:34,  p:2.8,  c:6.6, gr:0.4},
  espinaca:      {n:"Espinaca",                    g:"Verdulería", kcal:23,  p:2.9,  c:3.6, gr:0.4},
  ajo:           {n:"Ajo",                         g:"Verdulería", kcal:149, p:6.4,  c:33,  gr:0.5},
  perejil:       {n:"Perejil",                     g:"Verdulería", kcal:36,  p:3,    c:6.3, gr:0.8},
  banana:        {n:"Banana madura",               g:"Verdulería", kcal:89,  p:1.1,  c:22.8,gr:0.3, comestible:0.7},
  huevo:         {n:"Huevos",                      g:"Lácteos y huevos", kcal:143, p:12.6, c:0.7, gr:9.5, unidad:50},
  queso_cremoso: {n:"Queso cremoso",               g:"Lácteos y huevos", kcal:290, p:20, c:1, gr:23},
  queso_rallado: {n:"Queso rallado",               g:"Lácteos y huevos", kcal:390, p:33, c:3, gr:28},
  leche:         {n:"Leche descremada",            g:"Lácteos y huevos", kcal:35,  p:3.4, c:5, gr:0.1},
  yogur:         {n:"Yogur natural sin azúcar",    g:"Lácteos y huevos", kcal:56,  p:5,  c:7.5, gr:0.2},
  tapa_tarta:    {n:"Tapa para tarta",             g:"Lácteos y huevos", kcal:380, p:7, c:50, gr:17, unidad:180},
  aceite:        {n:"Aceite de oliva",             g:"Almacén", kcal:884, p:0, c:0, gr:100},
  pan_rallado:   {n:"Pan rallado",                 g:"Almacén", kcal:395, p:13, c:72, gr:5},
  tomate_tri:    {n:"Tomate triturado",            g:"Almacén", kcal:32, p:1.6, c:6, gr:0.2},
  lentejas:      {n:"Lentejas secas",              g:"Almacén", kcal:352, p:24.6, c:63, gr:1.1},
  arroz_int:     {n:"Arroz integral",              g:"Almacén", kcal:367, p:7.5, c:76, gr:2.7},
  soja:          {n:"Salsa de soja",               g:"Almacén", kcal:53, p:8, c:5, gr:0.6},
  avena:         {n:"Avena arrollada",             g:"Almacén", kcal:379, p:13, c:68, gr:6.5},
  miel:          {n:"Miel",                        g:"Almacén", kcal:304, p:0.3, c:82, gr:0},
  polvo_hornear: {n:"Polvo de hornear",            g:"Almacén", kcal:0, p:0, c:0, gr:0},
  especias:      {n:"Sal, pimienta y especias",    g:"Almacén", kcal:0, p:0, c:0, gr:0},
  carne_magra:   {n:"Carne magra (nalga o roast beef)", g:"Carnicería", kcal:130, p:22, c:0, gr:4.5},
  merluza:       {n:"Filet de merluza",            g:"Pescadería", kcal:86, p:18, c:0, gr:1.3},
  papa:          {n:"Papa",                        g:"Verdulería", kcal:77,  p:2,   c:17,  gr:0.1, comestible:0.85},
  palta:         {n:"Palta",                       g:"Verdulería", kcal:160, p:2,   c:8.5, gr:14.7, comestible:0.7},
  acelga:        {n:"Acelga",                      g:"Verdulería", kcal:19,  p:1.8, c:3.7, gr:0.2},
  manzana:       {n:"Manzana",                     g:"Verdulería", kcal:52,  p:0.3, c:14,  gr:0.2, comestible:0.9},
  limon:         {n:"Limón",                       g:"Verdulería", kcal:29,  p:1.1, c:9.3, gr:0.3},
  tomate:        {n:"Tomate",                      g:"Verdulería", kcal:18,  p:0.9, c:3.9, gr:0.2},
  lechuga:       {n:"Lechuga",                     g:"Verdulería", kcal:15,  p:1.4, c:2.9, gr:0.2},
  frutillas:     {n:"Frutillas",                   g:"Verdulería", kcal:32,  p:0.7, c:7.7, gr:0.3},
  ricota:        {n:"Ricota",                      g:"Lácteos y huevos", kcal:138, p:11.4, c:5.1, gr:7.9},
  tapa_empanada: {n:"Tapas de empanada para horno",g:"Lácteos y huevos", kcal:330, p:7, c:50, gr:11, unidad:33},
  choclo:        {n:"Choclo en granos",            g:"Almacén", kcal:80,  p:2.5, c:15,  gr:1.2},
  arvejas:       {n:"Arvejas",                     g:"Almacén", kcal:68,  p:4.5, c:12,  gr:0.4},
  garbanzos:     {n:"Garbanzos cocidos (lata)",    g:"Almacén", kcal:164, p:8.9, c:27.4,gr:2.6},
  atun:          {n:"Atún al natural (lata)",      g:"Almacén", kcal:116, p:26,  c:0,   gr:0.8},
  fideos_int:    {n:"Fideos integrales",           g:"Almacén", kcal:348, p:13,  c:72,  gr:2.5},
  pan_integral:  {n:"Pan integral",                g:"Almacén", kcal:250, p:10,  c:43,  gr:3.5},
  harina:        {n:"Harina 0000",                 g:"Almacén", kcal:364, p:10,  c:76,  gr:1},
  harina_int:    {n:"Harina integral",             g:"Almacén", kcal:340, p:13,  c:72,  gr:2.5},
  tortilla_trigo:{n:"Tortillas de trigo",          g:"Almacén", kcal:300, p:8,   c:50,  gr:7, unidad:40},
  arroz_blanco:  {n:"Arroz largo fino",            g:"Almacén", kcal:360, p:6.6, c:79,  gr:0.6},
  nueces:        {n:"Nueces",                      g:"Almacén", kcal:654, p:15,  c:14,  gr:65},
  granola_casera:{n:"Granola casera",              g:"Hecho en casa", kcal:450, p:10, c:60, gr:18}
};

var CATEGORIAS = [
  {id:"empeza",    nombre:"Empezá acá"},
  {id:"viandas",   nombre:"Viandas para la semana"},
  {id:"rapidos",   nombre:"Salados rápidos"},
  {id:"dulces",    nombre:"Dulces sin culpa"},
  {id:"desayunos", nombre:"Desayunos y meriendas"}
];

// i: [ingrediente, gramos, "cómo se dice en la receta"]
var RECETAS = [
  {id:"pollo-batatas", cat:"viandas", nombre:"Pollo al horno con batatas", emoji:"🍗", porciones:4, min:75,
   heladera:3, freezer:"3 meses",
   i:[["pollo_presa",1000,"1 kg de pata muslo sin piel"],["batata",700,"3 batatas medianas"],["cebolla_morada",150,"1 cebolla morada"],["aceite",20,"2 cucharadas de aceite"],["ajo",10,"2 dientes de ajo"],["especias",0,"Sal, pimentón, romero y pimienta"]],
   pasos:["Prendé el horno a 200 °C.","Cortá las batatas en cubos de 3 cm (con cáscara bien lavada) y la cebolla en gajos.","Poné todo en una fuente con el pollo, el aceite, el ajo picado y las especias. Mezclá con las manos.","Horneá 35 minutos, dá vuelta las presas y mové las batatas.","Seguí 25 a 35 minutos más, hasta que el pollo esté dorado y el jugo salga transparente al pincharlo cerca del hueso.","Dejá enfriar 20 minutos, sacá los huesos si querés y porcioná en tápers."],
   fuentes:["mdzol.com: pollo al horno con papas a 200 °C, ~1 h 15 dando vuelta a mitad","Blog Recetas Shortcuts: pollo con batatas a 200 °C, 40 min + vuelta"]},

  {id:"tarta-zapallitos", cat:"viandas", nombre:"Tarta de zapallitos", emoji:"🥧", porciones:6, min:50,
   heladera:3, freezer:"2 meses",
   i:[["tapa_tarta",180,"1 tapa para tarta"],["zapallito",800,"4 zapallitos medianos"],["cebolla",150,"1 cebolla"],["huevo",150,"3 huevos"],["queso_cremoso",100,"100 g de queso cremoso en cubos"],["queso_rallado",30,"3 cucharadas de queso rallado"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimienta y nuez moscada"]],
   pasos:["Rallá los zapallitos con el rallador grueso, salalos y dejalos 10 minutos en un colador. Apretalos para sacarles el agua.","Rehogá la cebolla picada en el aceite 5 minutos, sumá los zapallitos y cociná 5 minutos más.","Fuera del fuego, mezclá con los huevos batidos, el queso cremoso, el rallado y los condimentos.","Forrá un molde de 24 cm con la tapa, volcá el relleno y doblá los bordes.","Horneá a 180 °C de 30 a 35 minutos, hasta que el centro esté firme.","Dejá entibiar antes de cortar en 6 porciones."],
   fuentes:["Via País (Osvaldo Gross): relleno con 4 huevos a 180 °C ~20 min + 15 min","Diario Uno (Dolli Irigoyen): 180 °C 25 min sobre masa precocida","Mendoza.gov.ar: tarta de zapallitos, horno 30 min"]},

  {id:"albondigas", cat:"viandas", nombre:"Albóndigas en salsa de tomate", emoji:"🍝", porciones:4, min:45,
   heladera:3, freezer:"3 meses",
   i:[["carne_picada",500,"500 g de carne picada especial"],["huevo",50,"1 huevo"],["pan_rallado",40,"4 cucharadas de pan rallado"],["ajo",5,"1 diente de ajo"],["perejil",10,"Un puñado de perejil"],["cebolla",150,"1 cebolla"],["zanahoria",80,"1 zanahoria rallada"],["tomate_tri",520,"1 caja de tomate triturado"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, orégano y pimienta"]],
   pasos:["Mezclá la carne con el huevo, el pan rallado, el ajo y el perejil picados y sal. Integrá sin amasar de más para que queden jugosas.","Armá unas 20 bolitas del tamaño de una nuez.","Horneálas en una placa aceitada a 200 °C durante 15 minutos.","Mientras, rehogá la cebolla picada y la zanahoria rallada en el aceite 5 minutos. Sumá el tomate y el orégano.","Pasá las albóndigas a la salsa y cociná 15 minutos a fuego bajo con tapa."],
   fuentes:["mdzol.com: 500 g de carne, sellar ~10 min y terminar en salsa","Receta al horno: placa a 200 °C 20 min girando a mitad","Cronica.com.ar: albóndigas con salsa, 25-30 min de cocción"]},

  {id:"lentejas", cat:"viandas", nombre:"Guiso liviano de lentejas", emoji:"🥘", porciones:5, min:55,
   heladera:2, freezer:"3 meses",
   i:[["lentejas",300,"300 g de lentejas secas"],["cebolla",150,"1 cebolla"],["morron",150,"1 morrón rojo"],["zanahoria",160,"2 zanahorias"],["zapallo",300,"300 g de zapallo"],["ajo",10,"2 dientes de ajo"],["tomate_tri",400,"400 g de tomate triturado"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Pimentón, comino, laurel y sal"]],
   pasos:["La noche anterior, dejá las lentejas en remojo con el doble de agua (mínimo 6 horas). Si te olvidaste, usalas igual y sumá 20 minutos de cocción.","Rehogá la cebolla, el morrón y el ajo picados en el aceite 5 minutos.","Sumá la zanahoria y el zapallo en cubos, el pimentón y el comino, y revolvé 2 minutos.","Agregá las lentejas escurridas, el tomate, el laurel y agua o caldo hasta cubrir.","Cociná a fuego bajo de 35 a 45 minutos, hasta que las lentejas estén tiernas. Salá al final.","Porcioná: lo que se come después del martes va directo al freezer."],
   fuentes:["MDZ y LM Neuquén: remojo 3-8 h, cocción 45-50 min en olla","Los Andes: guiso de lentejas saludable sin embutidos"]},

  {id:"arroz-integral", cat:"viandas", nombre:"Arroz integral para la semana", emoji:"🍚", porciones:6, min:45,
   heladera:2, freezer:"1 mes",
   i:[["arroz_int",300,"300 g de arroz integral"],["especias",0,"Sal"]],
   pasos:["Lavá el arroz en un colador hasta que el agua salga clara.","Ponelo en una olla con 750 ml de agua y sal. Cuando hierva, tapá y bajá el fuego al mínimo.","Cociná de 40 a 45 minutos sin destapar, hasta que absorba el agua.","Apagá y dejá reposar 10 minutos tapado.","Enfrialo rápido extendido en una fuente y guardalo en tápers antes de las 2 horas."],
   fuentes:["El Espectador: arroz cocido, máximo 2 días en heladera"]},

  {id:"verduras-asadas", cat:"viandas", nombre:"Verduras asadas para toda la semana", emoji:"🥕", porciones:4, min:40,
   heladera:4, freezer:"No conviene",
   i:[["zapallo",300,"300 g de zapallo"],["zanahoria",160,"2 zanahorias"],["morron",150,"1 morrón rojo"],["cebolla_morada",150,"1 cebolla morada"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal, tomillo y pimienta"]],
   pasos:["Prendé el horno a 200 °C.","Cortá todo en trozos parecidos (zapallo y zanahoria más chicos porque tardan más).","Mezclá con el aceite y las especias en una placa, sin amontonar.","Horneá de 30 a 35 minutos, revolviendo una vez a mitad."],
   fuentes:["Criterio de cocción a 200 °C igual a las batatas del pollo al horno"]},

  {id:"wok-pollo", cat:"rapidos", nombre:"Wok de pollo y verduras", emoji:"🥢", porciones:2, min:20,
   heladera:2, freezer:"No conviene",
   i:[["pechuga",300,"300 g de pechuga en tiras"],["morron",150,"1 morrón"],["zanahoria",80,"1 zanahoria en bastones"],["brocoli",200,"200 g de brócoli en ramitos"],["cebolla",75,"Media cebolla"],["soja",20,"2 cucharadas de salsa de soja"],["aceite",10,"1 cucharada de aceite"]],
   pasos:["Calentá el aceite en una sartén grande o wok a fuego fuerte.","Dorá el pollo 5 minutos y sacalo.","Saltá la cebolla, la zanahoria y el brócoli 4 minutos; sumá el morrón 2 minutos más.","Volvé el pollo, agregá la soja y saltá 1 minuto. Servilo con el arroz de la semana."],
   fuentes:["Técnica de salteado a fuego fuerte, 15-20 min en total"]},

  {id:"omelette-espinaca", cat:"rapidos", nombre:"Omelette de espinaca y queso", emoji:"🍳", porciones:1, min:10,
   heladera:1, freezer:"No conviene",
   i:[["huevo",100,"2 huevos"],["espinaca",60,"Un puñado grande de espinaca"],["queso_cremoso",30,"30 g de queso cremoso"],["aceite",3,"Unas gotas de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Saltá la espinaca en la sartén con unas gotas de aceite 1 minuto, hasta que se achique.","Batí los huevos con sal y volcalos sobre la espinaca a fuego medio.","Cuando los bordes estén firmes, poné el queso en una mitad.","Doblá, tapá 1 minuto y serví."],
   fuentes:["Técnica básica de omelette, 8-10 min"]},

  {id:"budin-banana", cat:"dulces", nombre:"Budín de banana y avena", emoji:"🍌", porciones:10, min:50,
   heladera:5, freezer:"2 meses (en rodajas)",
   i:[["banana",360,"3 bananas bien maduras"],["huevo",100,"2 huevos"],["avena",160,"1 taza y media de avena"],["leche",60,"60 ml de leche"],["miel",30,"2 cucharadas de miel (opcional)"],["polvo_hornear",5,"1 cucharadita de polvo de hornear"],["especias",0,"Canela y esencia de vainilla"]],
   pasos:["Prendé el horno a 180 °C y forrá una budinera de 25 × 10 cm con papel manteca.","Procesá la avena hasta que quede como harina.","Pisá las bananas y mezclalas con los huevos, la leche, la miel, la canela y la vainilla.","Sumá la avena y el polvo de hornear y mezclá apenas.","Horneá de 35 a 40 minutos, hasta que un palillo salga seco.","Desmoldá tibio y cortá en 10 rodajas."],
   fuentes:["Aire de Santa Fe: budín de banana en licuadora, 35-40 min a 180 °C","Cronista: budín de banana sin harina ni azúcar, 40-45 min","Diario de Cuyo: budín de banana y avena"]},

  {id:"avena-remojada", cat:"desayunos", nombre:"Avena remojada de la noche", emoji:"🥣", porciones:1, min:5,
   heladera:3, freezer:"No conviene",
   i:[["avena",40,"4 cucharadas de avena"],["yogur",120,"1 pote chico de yogur natural"],["leche",60,"60 ml de leche"],["banana",80,"Media banana"],["especias",0,"Canela"]],
   pasos:["En un frasco, mezclá la avena, el yogur, la leche y la canela.","Tapá y dejalo en la heladera toda la noche.","A la mañana, sumá la banana en rodajas. Se come fría."],
   fuentes:["Preparación en frío, sin cocción; hasta 3 días en heladera"]},

  // ===== Semana 2 · Horno y olla =====
  {id:"pastel-papa", cat:"viandas", nombre:"Pastel de papa y calabaza", emoji:"🥔", porciones:5, min:60,
   heladera:3, freezer:"3 meses",
   i:[["carne_picada",600,"600 g de carne picada especial"],["cebolla",150,"1 cebolla"],["morron",150,"1 morrón rojo"],["papa",800,"4 papas medianas"],["zapallo",400,"400 g de calabaza"],["leche",100,"100 ml de leche"],["queso_rallado",30,"3 cucharadas de queso rallado"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, comino, pimentón y nuez moscada"]],
   pasos:["Pelá la papa y la calabaza, cortalas en cubos y hervilas 20 minutos, hasta que estén tiernas.","Mientras, rehogá la cebolla y el morrón picados en el aceite 5 minutos. Sumá la carne y cociná 10 minutos más, desarmándola. Condimentá.","Escurrí la papa y la calabaza y pisalas con la leche, sal y nuez moscada.","En una fuente, poné la carne abajo y el puré arriba. Espolvoreá el queso.","Horneá a 200 °C de 20 a 25 minutos; los últimos 5 con grill para que se dore arriba."],
   fuentes:["MDZ: pastel de papas tradicional, 200 °C 20-25 min con grill final","Diario de Cuyo: horno 180 °C ~30 min hasta dorar"]},

  {id:"cazuela-pollo", cat:"viandas", nombre:"Cazuela de pollo con verduras", emoji:"🍲", porciones:5, min:55,
   heladera:3, freezer:"3 meses",
   i:[["pollo_presa",1000,"1 kg de pata muslo sin piel"],["papa",500,"3 papas"],["zapallo",400,"400 g de calabaza"],["zanahoria",160,"2 zanahorias"],["cebolla",150,"1 cebolla"],["morron",150,"1 morrón"],["choclo",200,"1 lata chica de choclo en granos"],["ajo",10,"2 dientes de ajo"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimentón, orégano y laurel"]],
   pasos:["Dorá las presas en una olla grande con el aceite, 8 minutos.","Sumá la cebolla, el morrón y el ajo picados y rehogá 5 minutos.","Cubrí con agua o caldo, agregá el laurel y el pimentón y cociná 20 minutos a fuego medio.","Sumá la papa, la calabaza y la zanahoria en cubos grandes y cociná 20 minutos más, hasta que estén tiernas.","Agregá el choclo los últimos 5 minutos. Probá la sal."],
   fuentes:["Jumbo: cazuela, verduras después de 15 min de pollo; papa y zapallo ~20 min","MDZ: pollo a la cazuela con papas 45-60 min a fuego bajo"]},

  {id:"milanesas-pollo", cat:"viandas", nombre:"Milanesas de pollo al horno", emoji:"🍗", porciones:4, min:30,
   heladera:1, freezer:"3 meses (crudas)",
   i:[["pechuga",600,"600 g de pechuga fileteada"],["huevo",100,"2 huevos"],["pan_rallado",120,"1 taza de pan rallado"],["ajo",5,"1 diente de ajo"],["perejil",10,"Perejil picado"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Cortá la pechuga en filetes finos y parejos.","Batí los huevos con el ajo y el perejil picados y sal.","Pasá cada filete por el huevo y después por el pan rallado, apretando bien.","Dejalas 20 minutos en la heladera para que el rebozado se asiente.","Para guardar: congelalas crudas, separadas con papel. Se hornean sin descongelar.","Para comer: placa aceitada a 200 °C, 15 a 20 minutos, dalas vuelta y 10 minutos más (del freezer, sumá 5 minutos)."],
   fuentes:["Diario de Cuyo: milanesas al horno 200 °C, 15-20 min + vuelta 10-15 min","Gastrolab: congelarlas crudas y hornear sin descongelar","Los Andes: reposo de 20-30 min antes de cocinar"]},

  {id:"hamburguesas-lentejas", cat:"viandas", nombre:"Hamburguesas de lentejas", emoji:"🍔", porciones:4, min:45,
   heladera:3, freezer:"3 meses",
   i:[["lentejas",250,"250 g de lentejas secas"],["cebolla",150,"1 cebolla"],["zanahoria",80,"1 zanahoria rallada"],["avena",60,"6 cucharadas de avena"],["huevo",50,"1 huevo"],["ajo",5,"1 diente de ajo"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, comino y pimentón"]],
   pasos:["Hervé las lentejas 25 minutos sin remojo, hasta que estén tiernas. Escurrilas muy bien.","Rehogá la cebolla picada y la zanahoria rallada en el aceite 5 minutos.","Procesá la mitad de las lentejas y mezclá con el resto, el rehogado, la avena, el huevo y los condimentos.","Formá 8 hamburguesas y ponelas en una placa con papel manteca.","Horneá a 200 °C durante 20 minutos, dándolas vuelta a mitad."],
   fuentes:["Hola.com: hamburguesas de lentejas al horno 200 °C 20 min","Diario Uno: hamburguesas de lentejas caseras","Canal 26: hamburguesas vegetarianas para freezar"]},

  {id:"tortilla-horno", cat:"viandas", nombre:"Tortilla de papa al horno", emoji:"🍳", porciones:4, min:55,
   heladera:2, freezer:"No conviene",
   i:[["papa",800,"4 papas medianas"],["cebolla",150,"1 cebolla"],["huevo",300,"6 huevos"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Cortá las papas en rodajas finas y la cebolla en pluma. Mezclalas con el aceite y sal en una fuente.","Horneá a 200 °C 25 minutos, moviendo una vez, hasta que estén tiernas.","Batí los huevos con sal y mezclalos con las papas.","Volcá en un molde de 22 cm aceitado y horneá a 200 °C de 20 a 25 minutos, hasta que esté firme.","Dejá entibiar 10 minutos antes de cortar."],
   fuentes:["Diario Panorama: papas y cebolla precocidas a 180 °C 25-30 min","Río Negro: tortilla al horno 200 °C 25-30 min","Crónica: 180 °C 30-40 min sin fritura"]},

  {id:"fideos-atun", cat:"rapidos", nombre:"Fideos integrales con atún y tomate", emoji:"🍝", porciones:2, min:15,
   heladera:2, freezer:"No conviene",
   i:[["fideos_int",160,"160 g de fideos integrales"],["atun",170,"1 lata de atún al natural"],["tomate_tri",300,"300 g de tomate triturado"],["cebolla",75,"Media cebolla"],["ajo",5,"1 diente de ajo"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal y orégano"]],
   pasos:["Poné a hervir los fideos con el tiempo que indica el paquete.","Rehogá la cebolla y el ajo picados en el aceite 4 minutos.","Sumá el tomate y el orégano y cociná 5 minutos.","Agregá el atún escurrido y mezclá con los fideos."],
   fuentes:["Salsa rápida de tomate (10 min) y cocción de fideos según el paquete"]},

  {id:"galletitas-avena", cat:"dulces", nombre:"Galletitas de avena y banana", emoji:"🍪", porciones:12, min:25,
   heladera:5, conserva:"Frasco hermético 5 días", freezer:"2 meses",
   i:[["banana",240,"2 bananas bien maduras"],["avena",150,"1 taza y media de avena"],["especias",0,"Canela y esencia de vainilla"]],
   pasos:["Prendé el horno a 180 °C.","Pisá las bananas hasta que queden casi un puré.","Mezclá con la avena, la canela y la vainilla y dejá reposar 5 minutos.","Armá 12 bolitas, ponelas en una placa con papel manteca y aplastalas.","Horneá de 12 a 15 minutos, hasta que los bordes estén apenas dorados."],
   fuentes:["Infozona: 2 bananas + 1 1/2 taza de avena, 180 °C","Aire de Santa Fe: 180 °C 12-15 min"]},

  {id:"tostadas-palta", cat:"desayunos", nombre:"Tostadas con palta y huevo", emoji:"🥑", porciones:1, min:10,
   heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["pan_integral",60,"2 rebanadas de pan integral"],["palta",80,"Media palta"],["huevo",50,"1 huevo"],["especias",0,"Sal, pimienta y unas gotas de limón"]],
   pasos:["Tostá el pan.","Pisá la palta con sal, pimienta y limón.","Cociná el huevo a la plancha 3 minutos o duro 10 minutos.","Untá las tostadas y poné el huevo arriba."],
   fuentes:["Armado sin cocción salvo el huevo"]},

  // ===== Semana 3 · Del freezer =====
  {id:"estofado", cat:"viandas", nombre:"Estofado de carne con verduras", emoji:"🥘", porciones:5, min:120,
   heladera:3, freezer:"3 meses",
   i:[["carne_magra",800,"800 g de nalga o roast beef"],["papa",500,"3 papas"],["zanahoria",240,"3 zanahorias"],["cebolla",150,"1 cebolla"],["morron",150,"1 morrón"],["tomate_tri",400,"400 g de tomate triturado"],["ajo",10,"2 dientes de ajo"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal, pimentón, laurel y tomillo"]],
   pasos:["Cortá la carne en cubos de 4 cm y dorala en tandas en una olla con el aceite.","Sumá la cebolla, el morrón y el ajo picados y rehogá 5 minutos.","Agregá el tomate, el laurel, el pimentón y agua o caldo hasta cubrir.","Tapá y cociná a fuego bajo 1 hora.","Sumá la papa y la zanahoria en cubos y seguí de 30 a 40 minutos, hasta que la carne se corte con el tenedor."],
   fuentes:["Diario Uno: estofado tradicional con nalga o roast beef","MDZ: estofado de res con verduras, 1,5-2 h a fuego lento"]},

  {id:"canelones-verdura", cat:"viandas", nombre:"Canelones de verdura", emoji:"🌯", porciones:6, min:70,
   heladera:3, freezer:"3 meses",
   i:[["harina",150,"150 g de harina"],["leche",400,"400 ml de leche"],["huevo",100,"2 huevos"],["acelga",800,"1 atado grande de acelga"],["ricota",400,"400 g de ricota"],["cebolla",150,"1 cebolla"],["queso_rallado",40,"4 cucharadas de queso rallado"],["tomate_tri",520,"1 caja de tomate triturado"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimienta y nuez moscada"]],
   pasos:["Licuá la harina, la leche, los huevos y una pizca de sal. Dejá reposar 30 minutos.","Hervé las hojas de acelga 5 minutos, escurrilas y apretalas fuerte para sacarles el agua. Picalas.","Rehogá la cebolla en el aceite, sumá la acelga y mezclá fuera del fuego con la ricota, la mitad del queso y la nuez moscada.","Hacé 12 panqueques finos en una sartén de 22 cm.","Rellenalos, enrollalos y ponelos en una fuente sobre una capa de salsa de tomate. Cubrí con el resto de la salsa y el queso.","Horneá a 180 °C de 25 a 30 minutos."],
   fuentes:["Diario Uno: canelones de verdura de rotisería (masa con reposo 30 min)","Diario Uno: canelones de acelga, hervor 5-7 min y escurrir fuerte","Horneado 180 °C 25-30 min"]},

  {id:"pollo-limon", cat:"viandas", nombre:"Pollo al limón con romero", emoji:"🍋", porciones:4, min:55,
   heladera:3, freezer:"3 meses",
   i:[["pollo_presa",1000,"1 kg de pata muslo sin piel"],["limon",100,"El jugo de 2 limones"],["ajo",10,"2 dientes de ajo"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal, pimienta y romero"]],
   pasos:["Mezclá el jugo de limón, el aceite, el ajo picado, el romero y la sal.","Marinalo con el pollo 15 minutos.","Horneá a 200 °C de 40 a 45 minutos, dando vuelta las presas a mitad.","Prendé el grill los últimos 5 minutos para que se dore. El jugo tiene que salir transparente."],
   fuentes:["Diario Uno: pollo al horno con limón, 200 °C","MDZ: pollo al horno con limón y hierbas, 40-45 min a 200 °C"]},

  {id:"budin-espinaca", cat:"viandas", nombre:"Budín de espinaca", emoji:"🥬", porciones:6, min:50,
   heladera:3, freezer:"2 meses",
   i:[["espinaca",500,"500 g de espinaca"],["cebolla",150,"1 cebolla"],["huevo",200,"4 huevos"],["leche",150,"150 ml de leche"],["queso_cremoso",100,"100 g de queso cremoso"],["queso_rallado",30,"3 cucharadas de queso rallado"],["avena",30,"3 cucharadas de avena"],["aceite",5,"Unas gotas de aceite"],["especias",0,"Sal y nuez moscada"]],
   pasos:["Saltá la cebolla picada y la espinaca hasta que se achique. Escurrí bien y picá.","Batí los huevos con la leche, la avena, los quesos y los condimentos.","Mezclá con la espinaca y volcá en una budinera aceitada.","Horneá a 180 °C de 30 a 35 minutos, hasta que esté firme en el centro."],
   fuentes:["Diario Uno: budín de espinaca 180 °C 25 min","Los Andes: 180 °C 25-35 min, hasta firme"]},

  {id:"sopa-calabaza", cat:"viandas", nombre:"Sopa crema de calabaza", emoji:"🎃", porciones:5, min:40,
   heladera:3, freezer:"3 meses",
   i:[["zapallo",1200,"1 calabaza mediana"],["cebolla",150,"1 cebolla"],["zanahoria",80,"1 zanahoria"],["papa",200,"1 papa"],["ajo",5,"1 diente de ajo"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimienta y nuez moscada"]],
   pasos:["Rehogá la cebolla y el ajo en el aceite 5 minutos.","Sumá la calabaza, la zanahoria y la papa en cubos y cubrí con 1 litro de agua o caldo.","Cociná de 25 a 30 minutos, hasta que todo esté muy tierno.","Licuá hasta que quede cremosa y condimentá.","Congelala en porciones; si querés sumarle crema, agregala recién al recalentar."],
   fuentes:["Cronista: sopa de calabaza cremosa","MDZ: sopa crema de calabaza","Aire de Santa Fe: cocción 25-30 min"]},

  {id:"muffins-manzana", cat:"dulces", nombre:"Muffins de manzana y avena", emoji:"🧁", porciones:12, min:40,
   heladera:4, freezer:"2 meses",
   i:[["manzana",300,"2 manzanas"],["avena",160,"1 taza y media de avena"],["harina_int",80,"Media taza de harina integral"],["huevo",100,"2 huevos"],["leche",120,"120 ml de leche"],["aceite",30,"3 cucharadas de aceite"],["miel",40,"2 cucharadas de miel"],["polvo_hornear",8,"2 cucharaditas de polvo de hornear"],["especias",0,"Canela"]],
   pasos:["Prendé el horno a 180 °C y prepará 12 pirotines.","Rallá una manzana y cortá la otra en cubitos.","Batí los huevos con la leche, el aceite y la miel.","Sumá la avena, la harina, el polvo de hornear, la canela y las manzanas. Mezclá apenas.","Repartí en los pirotines y horneá de 20 a 25 minutos, hasta que un palillo salga seco."],
   fuentes:["MDZ: muffins de avena y manzana sin azúcar, 180 °C 20-25 min","A24: 180 °C 20-25 min","Diario Uno: 180 °C 15 min"]},

  {id:"granola-casera", cat:"desayunos", nombre:"Granola casera", emoji:"🥜", porciones:10, min:30,
   heladera:14, conserva:"Frasco hermético 2 semanas", freezer:"No hace falta",
   i:[["avena",300,"3 tazas de avena"],["nueces",60,"Un puñado de nueces"],["miel",60,"3 cucharadas de miel"],["aceite",20,"2 cucharadas de aceite"],["especias",0,"Canela y una pizca de sal"]],
   pasos:["Prendé el horno a 170 °C.","Mezclá la avena, las nueces picadas, la canela y la sal.","Sumá la miel y el aceite y mezclá con las manos hasta que todo quede húmedo.","Extendé en una placa con papel manteca y horneá de 15 a 20 minutos, revolviendo cada 5 minutos.","Dejá enfriar por completo antes de guardarla: ahí se pone crocante."],
   fuentes:["UPO: granola casera 175 °C 15-20 min","Univision: hasta 2 semanas en frasco hermético"]},

  {id:"yogur-granola", cat:"desayunos", nombre:"Yogur con granola y frutillas", emoji:"🍓", porciones:1, min:3,
   heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["yogur",170,"1 pote de yogur natural"],["granola_casera",40,"4 cucharadas de granola casera"],["frutillas",100,"Un puñado de frutillas"]],
   pasos:["Poné el yogur en un bowl.","Sumá la granola y las frutillas cortadas."],
   fuentes:["Armado sin cocción"]},

  {id:"wraps-pollo", cat:"rapidos", nombre:"Wraps de pollo y verduras", emoji:"🌮", porciones:2, min:15,
   heladera:1, freezer:"No conviene",
   i:[["tortilla_trigo",160,"4 tortillas de trigo"],["pechuga",250,"250 g de pechuga en tiras"],["lechuga",60,"Hojas de lechuga"],["tomate",150,"1 tomate"],["zanahoria",80,"1 zanahoria rallada"],["yogur",60,"3 cucharadas de yogur natural"],["aceite",5,"Unas gotas de aceite"],["especias",0,"Sal, pimentón y limón"]],
   pasos:["Cociná el pollo condimentado en una plancha caliente de 6 a 8 minutos.","Mezclá el yogur con sal y limón para la salsa.","Calentá las tortillas 20 segundos por lado.","Armá con lechuga, tomate, zanahoria, pollo y salsa, y enrollá."],
   fuentes:["Técnica de plancha, pollo cocido hasta que no quede rosado"]},

  {id:"revuelto-zapallitos", cat:"rapidos", nombre:"Revuelto de zapallitos", emoji:"🥒", porciones:2, min:15,
   heladera:1, freezer:"No conviene",
   i:[["zapallito",400,"2 zapallitos"],["cebolla",75,"Media cebolla"],["huevo",150,"3 huevos"],["queso_rallado",20,"2 cucharadas de queso rallado"],["aceite",5,"Unas gotas de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Cortá los zapallitos en cubitos y la cebolla en pluma.","Saltalos en la sartén con el aceite 8 minutos.","Sumá los huevos batidos con el queso y revolvé a fuego bajo 2 minutos, hasta que cuajen."],
   fuentes:["Técnica básica de revuelto, 10-15 min"]},

  // ===== Semana 4 · Sabores de casa =====
  {id:"merluza-papas", cat:"viandas", nombre:"Merluza al horno con papas", emoji:"🐟", porciones:3, min:45,
   heladera:2, freezer:"No conviene",
   i:[["merluza",600,"600 g de filet de merluza"],["papa",600,"3 papas"],["cebolla",150,"1 cebolla"],["limon",50,"El jugo de 1 limón"],["ajo",5,"1 diente de ajo"],["perejil",10,"Perejil picado"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal y pimienta"]],
   pasos:["Cortá las papas en rodajas finas y la cebolla en aros. Acomodalas en una fuente con el aceite y sal.","Horneá a 200 °C durante 20 minutos, hasta que estén casi tiernas.","Poné los filets encima con el ajo, el perejil y el limón.","Horneá de 10 a 12 minutos más, hasta que el pescado se separe en lascas."],
   fuentes:["Crónica: pescado al horno con papas, primero las papas 20 min a 180 °C","Directo al Paladar: merluza sobre papas, 10 min a 200 °C"]},

  {id:"bifes-criolla", cat:"viandas", nombre:"Bifes a la criolla", emoji:"🥩", porciones:4, min:50,
   heladera:3, freezer:"3 meses",
   i:[["carne_magra",700,"700 g de bifes de nalga"],["papa",600,"3 papas"],["cebolla",300,"2 cebollas"],["morron",150,"1 morrón"],["tomate",300,"2 tomates"],["zanahoria",80,"1 zanahoria"],["arvejas",150,"1 lata de arvejas"],["ajo",10,"2 dientes de ajo"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, orégano, pimentón y laurel"]],
   pasos:["En una olla con el aceite, armá una capa de cebolla en aros, otra de morrón y ajo, y encima los bifes condimentados.","Cubrí con las papas y la zanahoria en rodajas y el tomate en cubos. Sumá el laurel y medio vaso de agua.","Tapá y cociná a fuego bajo de 30 a 40 minutos, sin revolver, hasta que las papas estén tiernas.","Agregá las arvejas los últimos 5 minutos y dejá reposar 10 minutos tapado."],
   fuentes:["Diario Uno: bifes a la criolla en capas, 30-40 min","Todo Jujuy: 40-50 min a fuego mínimo"]},

  {id:"empanadas-pollo", cat:"viandas", nombre:"Empanadas de pollo al horno", emoji:"🥟", porciones:4, min:60,
   heladera:3, freezer:"3 meses (crudas)",
   i:[["tapa_empanada",396,"12 tapas de empanada para horno"],["pechuga",500,"500 g de pechuga"],["cebolla",300,"2 cebollas"],["morron",150,"1 morrón rojo"],["huevo",100,"2 huevos duros"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, comino, pimentón y ají molido"]],
   pasos:["Hervé la pechuga 15 minutos y desmechala. Hervé los huevos 10 minutos.","Rehogá la cebolla y el morrón picados en el aceite 10 minutos.","Mezclá con el pollo, los condimentos y el huevo picado. Dejá enfriar el relleno.","Armá las 12 empanadas y hacé el repulgue.","Para guardar: congelalas crudas en una bandeja y, cuando estén duras, pasalas a una bolsa.","Para comer: horno a 220 °C de 15 a 20 minutos (del freezer, sin descongelar, de 25 a 30)."],
   fuentes:["El Intransigente: empanadas de pollo 220 °C 20-30 min; congelar crudas en bandeja","Directo al Paladar: 200 °C 16-18 min"]},

  {id:"tarta-calabaza", cat:"viandas", nombre:"Tarta de calabaza y queso", emoji:"🥧", porciones:6, min:60,
   heladera:3, freezer:"2 meses",
   i:[["tapa_tarta",180,"1 tapa para tarta"],["zapallo",1000,"1 kg de calabaza"],["cebolla",150,"1 cebolla"],["huevo",150,"3 huevos"],["queso_cremoso",100,"100 g de queso cremoso"],["queso_rallado",30,"3 cucharadas de queso rallado"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimienta y nuez moscada"]],
   pasos:["Hervé la calabaza en cubos 20 minutos (o asala con el pollo si el horno está prendido) y pisala.","Rehogá la cebolla picada en el aceite 5 minutos.","Mezclá el puré con la cebolla, los huevos, los quesos y los condimentos.","Forrá un molde de 24 cm con la tapa y volcá el relleno.","Horneá a 180 °C unos 35 minutos, hasta que el relleno esté firme y dorado."],
   fuentes:["Ciudad.com.ar: tarta de calabaza y queso, 180 °C ~35 min","Criterio igual a la tarta de zapallitos de la semana 1"]},

  {id:"arroz-pollo", cat:"viandas", nombre:"Arroz con pollo", emoji:"🍛", porciones:5, min:50,
   heladera:2, freezer:"1 mes",
   i:[["pechuga",500,"500 g de pechuga en cubos"],["arroz_blanco",300,"300 g de arroz largo fino"],["cebolla",150,"1 cebolla"],["morron",150,"1 morrón"],["arvejas",150,"1 lata de arvejas"],["tomate_tri",200,"200 g de tomate triturado"],["ajo",5,"1 diente de ajo"],["aceite",15,"1 cucharada y media de aceite"],["especias",0,"Sal, cúrcuma y pimentón"]],
   pasos:["Dorá el pollo en una olla con el aceite y retiralo.","Rehogá la cebolla, el morrón y el ajo 5 minutos.","Sumá el arroz y la cúrcuma y revolvé 1 minuto.","Agregá el tomate, el pollo y 750 ml de caldo caliente (2 y media veces el arroz).","Cociná tapado a fuego bajo 18 minutos. Sumá las arvejas, apagá y dejá reposar 5 minutos."],
   fuentes:["Canal 26: arroz con pollo, 2 1/2 vasos de caldo por vaso de arroz","Diario Uno: arroz con pollo sencillo","Arroz largo fino: ~18 min tras agregar el caldo"]},

  {id:"arroz-leche", cat:"dulces", nombre:"Arroz con leche liviano", emoji:"🍮", porciones:6, min:50,
   heladera:4, freezer:"No conviene",
   i:[["arroz_blanco",120,"120 g de arroz"],["leche",1200,"1,2 litros de leche descremada"],["miel",60,"3 cucharadas de miel"],["especias",0,"Canela en rama, cáscara de limón y vainilla"]],
   pasos:["Poné la leche con la canela y la cáscara de limón a calentar.","Cuando rompa el hervor, sumá el arroz y bajá el fuego al mínimo.","Cociná de 35 a 45 minutos, revolviendo seguido para que no se pegue.","Apagá, sacá la canela y la cáscara y endulzá con la miel recién al final.","Repartí en vasitos y llevá a la heladera."],
   fuentes:["MDZ: arroz con leche 35-45 min, endulzar al final","Consumer.es: proporción y cocción a fuego bajo"]},

  {id:"panqueques-avena", cat:"desayunos", nombre:"Panqueques de avena y banana", emoji:"🥞", porciones:1, min:15,
   heladera:0, conserva:"Al momento", freezer:"No conviene",
   i:[["banana",120,"1 banana madura"],["huevo",50,"1 huevo"],["avena",50,"Media taza de avena"],["leche",30,"Un chorrito de leche"],["especias",0,"Canela"]],
   pasos:["Pisá la banana y mezclala con el huevo, la avena, la leche y la canela.","Calentá una sartén antiadherente a fuego medio con unas gotas de aceite.","Cociná cucharadas de masa 2 minutos por lado, hasta que se doren.","Salen 4 panqueques chicos."],
   fuentes:["C5N: panqueques de avena y banana en 10 min","Banco de alimentos 2harvest: 2 min por lado a fuego medio"]},

  {id:"hamburguesas-pollo", cat:"rapidos", nombre:"Hamburguesas caseras de pollo", emoji:"🍔", porciones:4, min:25,
   heladera:1, freezer:"3 meses (crudas)",
   i:[["pechuga",500,"500 g de pechuga"],["cebolla",75,"Media cebolla"],["zanahoria",80,"1 zanahoria rallada"],["avena",40,"4 cucharadas de avena"],["huevo",50,"1 huevo"],["ajo",5,"1 diente de ajo"],["aceite",5,"Unas gotas de aceite"],["especias",0,"Sal, pimentón y perejil"]],
   pasos:["Procesá la pechuga con la cebolla y el ajo.","Mezclá con la zanahoria, la avena, el huevo y los condimentos.","Formá 4 hamburguesas. Si las guardás, congelalas crudas separadas con papel.","Cocinalas en plancha aceitada de 5 a 6 minutos por lado, hasta que no quede nada rosado adentro."],
   fuentes:["Técnica de plancha; el pollo picado debe cocinarse completo (74 °C en el centro)"]},

  {id:"ensalada-garbanzos", cat:"rapidos", nombre:"Ensalada de garbanzos", emoji:"🥗", porciones:2, min:10,
   heladera:2, freezer:"No conviene",
   i:[["garbanzos",240,"1 lata de garbanzos escurridos"],["tomate",150,"1 tomate"],["cebolla_morada",75,"Media cebolla morada"],["morron",75,"Medio morrón"],["perejil",10,"Perejil picado"],["limon",30,"Jugo de medio limón"],["aceite",10,"1 cucharada de aceite"],["especias",0,"Sal, pimienta y comino"]],
   pasos:["Enjuagá y escurrí los garbanzos.","Picá el tomate, la cebolla y el morrón en cubos chicos.","Mezclá todo con el perejil, el limón, el aceite y los condimentos."],
   fuentes:["Armado sin cocción"]}
];

// Menú de la semana 1. Regla de la heladera: lunes a miércoles sale de la heladera; jueves y viernes, del freezer.
var MENUS = [
  {id:"semana-1", nombre:"Semana 1 · La clásica",
   recetas:["pollo-batatas","tarta-zapallitos","albondigas","lentejas","arroz-integral","verduras-asadas","budin-banana","wok-pollo","omelette-espinaca","avena-remojada"],
   domingo:[
     "Sábado a la noche: dejá las lentejas en remojo.",
     "0:00 · Prendé el horno a 200 °C. Armá la fuente de pollo con batatas y la placa de verduras asadas.",
     "0:10 · Entran el pollo y las verduras al horno. Poné el arroz al fuego.",
     "0:15 · Arrancá el guiso de lentejas en otra hornalla.",
     "0:25 · Armá las albóndigas y la salsa.",
     "0:45 · Salen las verduras; entran las albóndigas (15 min). Dá vuelta el pollo.",
     "1:00 · Las albóndigas pasan a la salsa. Rallá y escurrí los zapallitos.",
     "1:15 · Sale el pollo. Bajá el horno a 180 °C: entran la tarta y el budín juntos.",
     "1:55 · Sale todo. Porcioná en tápers con fecha: lo de lunes a miércoles a la heladera, lo de jueves y viernes al freezer."
   ],
   dias:[
     {dia:"Lunes",     alm:"Pollo con batatas + verduras asadas", cena:"Tarta de zapallitos + ensalada", de:"heladera"},
     {dia:"Martes",    alm:"Albóndigas + arroz integral",         cena:"Guiso de lentejas",              de:"heladera"},
     {dia:"Miércoles", alm:"Pollo con batatas + arroz integral",  cena:"Tarta de zapallitos",            de:"heladera"},
     {dia:"Jueves",    alm:"Albóndigas + verduras asadas",        cena:"Wok de pollo (20 min, fresco)",  de:"freezer"},
     {dia:"Viernes",   alm:"Guiso de lentejas",                   cena:"Omelette de espinaca (10 min)",  de:"freezer"}
   ],
   desayunos:"Avena remojada o una rodaja de budín de banana con café o mate."},

  {id:"semana-2", nombre:"Semana 2 · Horno y olla",
   recetas:["pastel-papa","cazuela-pollo","tortilla-horno","hamburguesas-lentejas","milanesas-pollo","galletitas-avena","fideos-atun","tostadas-palta"],
   domingo:[
     "0:00 · Prendé el horno a 200 °C. Poné a hervir las lentejas (25 min) y, en otra olla, la papa y la calabaza del pastel (20 min).",
     "0:05 · Papas en rodajas y cebolla de la tortilla al horno (25 min). Arrancá la cazuela dorando el pollo.",
     "0:15 · Hacé el relleno del pastel: cebolla, morrón y carne.",
     "0:25 · Pisá el puré y armá el pastel. Escurrí las lentejas y formá las hamburguesas.",
     "0:30 · Salen las papas: mezclalas con los huevos. Entran tortilla, pastel y hamburguesas al horno en dos estantes (20-25 min). Sumá las verduras a la cazuela.",
     "0:40 · Empaná las milanesas y dejalas reposar en la heladera.",
     "0:55 · Sale todo. Bajá el horno a 180 °C y entran las galletitas (12-15 min).",
     "1:05 · Milanesas crudas al freezer, separadas con papel. Apagá la cazuela.",
     "1:15 · Porcioná en tápers con fecha: lo de lunes a miércoles a la heladera, lo de jueves y viernes al freezer."
   ],
   dias:[
     {dia:"Lunes",     alm:"Pastel de papa y calabaza",           cena:"Tortilla de papa al horno + ensalada",   de:"heladera"},
     {dia:"Martes",    alm:"Cazuela de pollo con verduras",       cena:"Tortilla de papa al horno",              de:"heladera"},
     {dia:"Miércoles", alm:"Pastel de papa y calabaza",           cena:"Hamburguesas de lentejas + ensalada",    de:"heladera"},
     {dia:"Jueves",    alm:"Cazuela de pollo con verduras",       cena:"Milanesas de pollo al horno (directo del freezer)", de:"freezer"},
     {dia:"Viernes",   alm:"Hamburguesas de lentejas + ensalada", cena:"Fideos integrales con atún (15 min)",    de:"freezer"}
   ],
   desayunos:"Tostadas con palta y huevo, o galletitas de avena y banana con café o mate."},

  {id:"semana-3", nombre:"Semana 3 · Del freezer",
   recetas:["estofado","canelones-verdura","pollo-limon","budin-espinaca","sopa-calabaza","muffins-manzana","granola-casera","yogur-granola","wraps-pollo","revuelto-zapallitos"],
   domingo:[
     "0:00 · Arrancá el estofado: dorá la carne, rehogá y dejalo a fuego bajo tapado. Licuá la masa de panqueques y marinás el pollo.",
     "0:15 · Hervé la acelga 5 minutos. Arrancá la sopa de calabaza.",
     "0:25 · Horno a 200 °C: entra el pollo al limón (40-45 min). Armá el relleno de los canelones.",
     "0:35 · Hacé los 12 panqueques.",
     "0:45 · Licuá la sopa. Armá los canelones y el budín de espinaca.",
     "1:00 · Sumá la papa y la zanahoria al estofado.",
     "1:10 · Sale el pollo. Bajá a 180 °C: entran canelones y budín (30 min). Mezclá los muffins.",
     "1:40 · Salen canelones y budín; entran los muffins (20-25 min). Apagá el estofado cuando la carne esté tierna.",
     "2:05 · Si te da el tiempo, granola a 170 °C (15-20 min); si no, hacela en la semana. Porcioná con fecha."
   ],
   dias:[
     {dia:"Lunes",     alm:"Pollo al limón + ensalada",           cena:"Budín de espinaca + sopa de calabaza",   de:"heladera"},
     {dia:"Martes",    alm:"Estofado de carne con verduras",      cena:"Canelones de verdura",                   de:"heladera"},
     {dia:"Miércoles", alm:"Pollo al limón + ensalada",           cena:"Budín de espinaca",                      de:"heladera"},
     {dia:"Jueves",    alm:"Estofado de carne con verduras",      cena:"Wraps de pollo y verduras (15 min)",     de:"freezer"},
     {dia:"Viernes",   alm:"Canelones de verdura",                cena:"Sopa de calabaza + revuelto de zapallitos (15 min)", de:"freezer"}
   ],
   desayunos:"Yogur con granola y frutillas, o un muffin de manzana con café o mate."},

  {id:"semana-4", nombre:"Semana 4 · Sabores de casa",
   recetas:["merluza-papas","bifes-criolla","tarta-calabaza","arroz-pollo","empanadas-pollo","hamburguesas-pollo","ensalada-garbanzos","arroz-leche","panqueques-avena"],
   domingo:[
     "0:00 · Hervé la pechuga de las empanadas (15 min), los huevos (10 min) y la calabaza de la tarta (20 min). Arrancá el arroz con leche a fuego mínimo.",
     "0:15 · Rehogá la cebolla y el morrón de las empanadas y la cebolla de la tarta.",
     "0:25 · Armá la olla de bifes a la criolla y dejala a fuego bajo (30-40 min).",
     "0:30 · Mezclá el relleno de empanadas y dejalo enfriar. Armá la tarta.",
     "0:40 · Horno a 180 °C: entra la tarta (35 min). Arrancá el arroz con pollo.",
     "0:55 · Armá las 12 empanadas y las hamburguesas de pollo. Al freezer, crudas.",
     "1:05 · Arvejas a los bifes y apagá. El arroz con pollo reposa tapado. Endulzá el arroz con leche y pasalo a vasitos.",
     "1:15 · Sale la tarta. Subí a 200 °C: papas y cebolla de la merluza (20 min).",
     "1:35 · Entra la merluza (10-12 min). A las 1:50, porcioná con fecha: el arroz con pollo del jueves va al freezer."
   ],
   dias:[
     {dia:"Lunes",     alm:"Merluza al horno con papas",          cena:"Tarta de calabaza y queso",              de:"heladera"},
     {dia:"Martes",    alm:"Arroz con pollo",                     cena:"Bifes a la criolla",                     de:"heladera"},
     {dia:"Miércoles", alm:"Bifes a la criolla",                  cena:"Tarta de calabaza y queso + ensalada",   de:"heladera"},
     {dia:"Jueves",    alm:"Arroz con pollo",                     cena:"Empanadas de pollo (directo del freezer)", de:"freezer"},
     {dia:"Viernes",   alm:"Empanadas de pollo + ensalada",       cena:"Hamburguesas de pollo + ensalada de garbanzos (20 min)", de:"freezer"}
   ],
   desayunos:"Panqueques de avena y banana, o un vasito de arroz con leche de postre."}
];
