function trataAlgoritm (libro) {

//Cargamos valores de unidades de páginas dísponibles para cada temñatica
  var CultPoMin = 0; //al 3
  var LiteMin = 100;
  var CineMin = 200;
  var ArteMin = 300;
  var ReliMin = 400;
  var EconoMin = 500;
  var TerriMin = 600;
  var GuerraMin = 700;
  var PoliMin = 800;
  var OrienMin = 900;
  var PonienMin = 1000;
  var IndusMin = 1100;
  var GenMin = 1200;
  var NormaMin = 1300;
  var ExcedeMin = 1400;
  var EnferTriMin = 1500;
  var AlbumFamMin = 1600;
  var EnferPerMin = 1700;
  var ReceMin = 1800;
  var AntiguMin = 1900;
  var VirtuMin = 2000;
  var MujerMin = 2100;
  var OtroMin = 2200;
  var ProducMin = 2300;
  var SimboPonMin = 2400;
  var SimboOriMin = 2500;
  var CiviOtrasMin = 2600;
  var CultPoMax =  37;
  var LiteMax =  141;
  var CineMax =  248;
  var ArteMax =  333;
  var ReliMax =  426;
  var EconoMax =  523;
  var TerriMax =  651;
  var GuerraMax =  753;
  var PoliMax =  819;
  var OrienMax =  918;
  var PonienMax =  1017;
  var IndusMax =  1148;
  var GenMax = 1241;
  var NormaMax =  1309;
  var ExcedeMax =  1425;
  var EnferTriMax =  1535;
  var AlbumFamMax =  1634;
  var EnferPerMax =  1718;
  var ReceMax =  1858;
  var AntiguMax =  1922;
  var VirtuMax =  2020;
  var MujerMax =  2125;
  var OtroMax =  2237;
  var ProducMax = 2342;
  var SimboPonMax = 2417;
  var SimboOriMax = 2511;
  var CiviOtrasMax = 2617;

//Variables de número de páginas por carpeta con carga inicial de valores
  CultPo = 4;
  Lite = 2;
  Cine = 2;
  Arte = 6;
  Reli = 2;
  SimboPon = 2;
  SimboOri = 2;
  Econo = 2;
  Terri = 2;
  Guerra = 6;
  Poli = 3;
  Orien = 2;
  Ponien = 2;
  Indus = 5;
  Gen = 4;
  Norma = 1;
  Excede = 2;
  EnferTri = 3;
  Producto = 5;
  AlbumFam = 6;
  Rece = 2;
  EnferPer = 2;
  Antigu = 5;
  Virtu = 2;
  Mujer = 4;
  CiviOtras = 2;
  Otro = 6;
  //Guarda = 2;

  //console.log("Valor inicial "+ CultPo,Lite,Cine,Arte,Reli,Econo,Terri,Guerra,Poli,Orien,Ponien,Indus,Gen,Norma,Excede,EnferTri,AlbumFam,Rece,EnferPer,Antigu,Virtu,Mujer,Otro);

//Variables para algoritmo
  var uniSuma;

  const familia1 = 1/3;
  const familia3 = 3/3;
  const simbo1 = 1/5;
  const simbo2 = 2/5;
  const simbo3 = 3/5;
  const poder1 = 1/6;
  const poder3 = 3/6;
  const tecno1 = 1/5;
  const tecno2 = 2/5;
  const tecno3 = 3/5;
  const civi1 = 1/3;
  const civi3 = 3/3;

//Creamos los algoritmos de cada pregunta del formulario

  /*Edad
    0-18        +1
    18-25      +2
    25-40      +3
    40<        +4*/

  if (libro[1]<=18){
    uniSuma = 1;
    AlbumFam = AlbumFam + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[1]>18&libro[1]<=25){
    uniSuma = 2;
    AlbumFam = AlbumFam + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[1]>25&libro[1]<=40){
    uniSuma = 3;
    AlbumFam = AlbumFam + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[1]>40){
    uniSuma = 4;
    AlbumFam = AlbumFam + uniSuma;
    restaAlResto(uniSuma);
  }

  /*Genero
  Femenino
    si conf + familia
    si apre + poder
  Masculino
    si conf + tecnología
    si apre + familia
  Otros
    + Civilizaciones*/

  if (libro[2]=="femenino" & libro[27]=="si"){
    AlbumFam = AlbumFam + familia1;
    Rece = Rece + familia1;
    EnferPer = EnferPer + familia1;
    uniSuma = 1;
    restaAlResto(uniSuma);
  }
  if (libro[2]=="femenino" & libro[27]=="no"){
    Econo = Econo + poder1;
    Terri = Terri + poder1;
    Guerra = Guerra + poder1;
    Poli = Poli + poder1;
    Orien = Orien + poder1;
    Ponien = Ponien + poder1;
    uniSuma = 1;
    restaAlResto(uniSuma);
  }
  if (libro[2]=="masculino" & libro[27]=="si"){
    Indus = Indus + tecno1;
    Gen = Gen + tecno1;
    Norma = Norma + tecno1;
    Excede = Excede + tecno1;
    EnferTri = EnferTri + tecno1;
    uniSuma = 1;
    restaAlResto(uniSuma);
  }
  if (libro[2]=="masculino" & libro[27]=="no"){
    AlbumFam = AlbumFam + familia1;
    Rece = Rece + familia1;
    EnferPer = EnferPer + familia1;
    uniSuma = 1;
    restaAlResto(uniSuma);
  }
  if (libro[2]=="otros"){
    Antigu = Antigu + civi1;
    Virtu = Virtu + civi1;
    Mujer = Mujer + civi1;
    uniSuma = 1;
    restaAlResto(uniSuma);
  }

  /*Lugar de nacimiento
    Oriente
        Si + 2 oriente
    Poniente
        Si + 2 poniente*/
  if (libro[3]=="oriente"){
    uniSuma = 2;
    Orien = Orien + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[3]=="poniente"){
    uniSuma = 2;
    Ponien = Ponien + uniSuma;
    restaAlResto(uniSuma);
  }

  /*Situación laboral
    Desempleado
        + 3 Tecnología
    Estudiante
        +  3 Poder
    Empleado
        + 3 Familia
    Jubilado
        + 3 Simbolismo*/
  if (libro[4]=="desempleado"){
    Indus = Indus + tecno3;
    Gen = Gen + tecno3;
    Norma = Norma + tecno3;
    Excede = Excede + tecno3;
    EnferTri = EnferTri + tecno3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }
  if (libro[4]=="estudiante"){
    Econo = Econo + poder3;
    Terri = Terri + poder3;
    Guerra = Guerra + poder3;
    Poli = Poli + poder3;
    Orien = Orien + poder3;
    Ponien = Ponien + poder3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }
  if (libro[4]=="empleado"){
    AlbumFam = AlbumFam + familia3;
    Rece = Rece + familia3;
    EnferPer = EnferPer + familia3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }
  if (libro[4]=="jubilado"){
    CultPo = CultPo + simbo3;
    Lite = Lite + simbo3;
    Cine = Cine + simbo3;
    Arte = Arte + simbo3;
    Reli = Reli + simbo3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }

  /*¿Le gusta cocinar?
    Si
        si conf + Recetas
        si apre + Genética
    No
        si conf + Cine & Literatura
        si apre + Recetas & Genética
    No me interesa
        + Guerra (Hambre)*/

    if (libro[5]=="siCocino" & libro[27]=="si"){
      uniSuma = 1;
      Rece = Rece + uniSuma;
      restaAlResto(uniSuma);
    }
    if (libro[5]=="siCocino" & libro[27]=="no"){
      uniSuma = 1;
      Gen = Gen + uniSuma;
      restaAlResto(uniSuma);
    }
    if (libro[5]=="noCocino" & libro[27]=="si"){
      uniSuma = 1;
      Cine = Cine + (uniSuma/2);
      Lite = Lite + (uniSuma/2);
      restaAlResto(uniSuma);
    }
    if (libro[5]=="noCocino" & libro[27]=="no"){
      uniSuma = 1;
      Rece = Rece + (uniSuma/2);
      Gen = Gen + (uniSuma/2);
      restaAlResto(uniSuma);
    }
    if (libro[5]=="noInteCocino"){
      uniSuma = 1;
      Guerra = Guerra + uniSuma;
      restaAlResto(uniSuma);
    }

    /*¿Ha cocinado en alguna ocasión para más de 20 personas?
    Si
        + Álbum de familia
    No
        + Religión*/
  if (libro[6]=="si"){
    AlbumFam = AlbumFam + familia1;
    Rece = Rece + familia1;
    EnferPer = EnferPer + familia1;
    uniSuma = 1;
    restaAlResto(uniSuma);
  }
  if (libro[6]=="no"){
    uniSuma = 1;
    Reli = Reli + uniSuma;
    restaAlResto(uniSuma);
  }

  /*¿Ha plantado trigo en alguna ocasión?
    Si febrero
        + 3 Arte
    Si septiembre
        + 3 Industria
    No
        + 3 Simbolismo*/
  if (libro[7]=="siFeb"){
    uniSuma = 3;
    Arte =Arte  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[7]=="siSept"){
    uniSuma = 3;
    Indus =Indus  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[7]=="no"){
    CultPo = CultPo + simbo3;
    Lite = Lite + simbo3;
    Cine = Cine + simbo3;
    Arte = Arte + simbo3;
    Reli = Reli + simbo3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }

  /*¿Es celíac@?
    Si
        + 3 Enfermedad persona
    No
        + 3 Industria
    No se
        + 3 Excedente*/
  if (libro[8]=="si"){
    uniSuma = 3;
    EnferPer =EnferPer  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[8]=="no"){
    uniSuma = 3;
    Indus =Indus  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[8]=="noSe"){
    uniSuma = 3;
    Excede =Excede  + uniSuma;
    restaAlResto(uniSuma);
  }

/*¿Le gusta el arte, la arquitectura?
    Si
        + 2 Simbolismo
    No
        + 2 Tecnología*/
if (libro[9]=="si"){
  CultPo = CultPo + simbo2;
  Lite = Lite + simbo2;
  Cine = Cine + simbo2;
  Arte = Arte + simbo2;
  Reli = Reli + simbo2;
  uniSuma = 2;
  restaAlResto(uniSuma);
}
if (libro[9]=="no"){
  Indus = Indus + tecno2;
  Gen = Gen + tecno2;
  Norma = Norma + tecno2;
  Excede = Excede + tecno2;
  EnferTri = EnferTri + tecno2;
  uniSuma = 2;
  restaAlResto(uniSuma);
}

/*¿Cree que se puede vivir sin pan?
    Si
        + Virtuales
    No
        + Enfermedad Persona
    Nunca me lo he planteado
        + Literatura    */

if (libro[10]=="si"){
  uniSuma = 1;
  Virtu =Virtu  + uniSuma;
  restaAlResto(uniSuma);
}
if (libro[10]=="no"){
  uniSuma = 1;
  EnferPer =EnferPer  + uniSuma;
  restaAlResto(uniSuma);
}
if (libro[10]=="noSe"){
  uniSuma = 1;
  Lite =Lite  + uniSuma;
  restaAlResto(uniSuma);
}

/*¿Si fuese trigo, que sería?
    Trigo silvestre
        +3 Simbolismo
    Trigo no modificado
        +3 Familia
    Trigo transgénico
        +3 Tecnología*/
  if (libro[11]=="silvestre"){
    CultPo = CultPo + simbo3;
    Lite = Lite + simbo3;
    Cine = Cine + simbo3;
    Arte = Arte + simbo3;
    Reli = Reli + simbo3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }
  if (libro[11]=="noModificado"){
    AlbumFam = AlbumFam + familia3;
    Rece = Rece + familia3;
    EnferPer = EnferPer + familia3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }
  if (libro[11]=="transgenico"){
    Indus = Indus + tecno3;
    Gen = Gen + tecno3;
    Norma = Norma + tecno3;
    Excede = Excede + tecno3;
    EnferTri = EnferTri + tecno3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }

  /*¿Sabe cómo se escribe trigo en latín?
    Triticum
        + Simbolismo
    Tigritum
        + Poder
    Tripalium
        + Poder*/
  if (libro[12]=="triticum"){
    CultPo = CultPo + simbo3;
    Lite = Lite + simbo3;
    Cine = Cine + simbo3;
    Arte = Arte + simbo3;
    Reli = Reli + simbo3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }
  if (libro[12]=="tigritum"){
    Econo = Econo + poder1;
    Terri = Terri + poder1;
    Guerra = Guerra + poder1;
    Poli = Poli + poder1;
    Orien = Orien + poder1;
    Ponien = Ponien + poder1;
    uniSuma = 1;
    restaAlResto(uniSuma);
  }
  if (libro[12]=="tipalium"){
    Econo = Econo + poder1;
    Terri = Terri + poder1;
    Guerra = Guerra + poder1;
    Poli = Poli + poder1;
    Orien = Orien + poder1;
    Ponien = Ponien + poder1;
    uniSuma = 1;
    restaAlResto(uniSuma);
  }

/*¿Tiene hambre?
    Ahora
        + Guerra
    Mañana
        + Industria
    Ayer
        + Álbum de familia
    Nunca he tenido hambre
        + Virtual*/
  if (libro[13]=="ahora"){
    uniSuma = 1;
    Guerra =Guerra  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[13]=="mañana"){
    uniSuma = 1;
    Indus =Indus  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[13]=="ayer"){
    uniSuma = 1;
    AlbumFam =AlbumFam  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[13]=="nunca"){
    uniSuma = 1;
    Virtu =Virtu  + uniSuma;
    restaAlResto(uniSuma);
  }

/*¿Es usted comunista?
    Si + 2
        si conf + Oriente
        si apre + Políticos
    No + 2
        si conf + Poniente
        si apre + Oriente
    A usted que le importa +2
        + Religión*/
  if (libro[14]=="si" & libro[27]=="si"){
    uniSuma = 2;
    Orien = Orien + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[14]=="si" & libro[27]=="no"){
    uniSuma = 2;
    Poli = Poli + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[14]=="no" & libro[27]=="si"){
    uniSuma = 2;
    Ponien = Ponien + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[14]=="no" & libro[27]=="no"){
    uniSuma = 2;
    Orien = Orien + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[14]=="noImporta"){
    uniSuma = 2;
    Reli = Reli + uniSuma;
    restaAlResto(uniSuma);
  }

/*¿Es usted Fascista?
    Si + 2
        si conf + Poniente
        si apre + Literatura
    No + 2
        si conf + Oriente
        si apre + Poniente
    A usted que le importa + 2
        + Religión*/
  if (libro[15]=="si" & libro[27]=="si"){
    uniSuma = 2;
    Ponien =Ponien + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[15]=="si" & libro[27]=="no"){
    uniSuma = 2;
    Lite = Lite + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[15]=="no" & libro[27]=="si"){
    uniSuma = 2;
    Orien = Orien + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[15]=="no" & libro[27]=="no"){
    uniSuma = 2;
    Ponien = Ponien + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[15]=="noImporta"){
    uniSuma = 2;
    Reli = Reli + uniSuma;
    restaAlResto(uniSuma);
  }

/*¿Cultiva trigo virtual?
    Si
        + Literatura
    No
        + Virtual*/
  if (libro[16]=="si"){
    uniSuma = 1;
    Lite = Lite  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[16]=="no"){
    uniSuma = 1;
    Virtu = Virtu  + uniSuma;
    restaAlResto(uniSuma);
  }

/*¿Ha visto ovnis?

    Si + 3
        si conf + Antiguas
        si apre + Simbolismo

    No + 1
        si conf + Normas/Leyes
        si apre + Antiguas*/

  if (libro[17]=="si" & libro[27]=="si"){
    uniSuma = 3;
    Antigu = Antigu + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[17]=="si" & libro[27]=="no"){
    CultPo = CultPo + simbo3;
    Lite = Lite + simbo3;
    Cine = Cine + simbo3;
    Arte = Arte + simbo3;
    Reli = Reli + simbo3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }
  if (libro[17]=="no" & libro[27]=="si"){
    uniSuma = 1;
    Norma = Norma + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[17]=="no" & libro[27]=="no"){
    uniSuma = 1;
    Antigu = Antigu + uniSuma;
    restaAlResto(uniSuma);
  }

  /*¿Tira comida a la basura?
      Si
          + Poder
      No
          + Excedente*/
  if (libro[18]=="si"){
    Econo = Econo + poder1;
    Terri = Terri + poder1;
    Guerra = Guerra + poder1;
    Poli = Poli + poder1;
    Orien = Orien + poder1;
    Ponien = Ponien + poder1;
    uniSuma = 1;
    restaAlResto(uniSuma);
  }
  if (libro[18]=="no"){
    uniSuma = 1;
    Excede = Excede  + uniSuma;
    restaAlResto(uniSuma);
  }

  /*¿Qué hace con el pan que le sobra?
    Pan perdido +2
        + Economia
    Pan rayado + 2
        + Excedente
    Sopa de ajo + 3
        + Recetas
    No compro pan + 3
        + Hambre*/
  if (libro[19]=="perdido"){
    uniSuma = 2;
    Econo =Econo  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[19]=="rayado"){
    uniSuma = 2;
    Excede =Excede  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[19]=="ajo"){
    uniSuma = 3;
    Rece =Rece  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[19]=="noCompro"){
    uniSuma = 3;
    Guerra =Guerra  + uniSuma;
    restaAlResto(uniSuma);
  }

  /*Que cree que sucede cuando alguien tira el pan?
    ¿El niño Jesús llora?
        + Religión
    ¿El Diablo se alegra?
        + Religión
    Nada, aunque no entiendo la pregunta
        + Cultura popular*/
  if (libro[20]=="llora"){
    uniSuma = 1;
    Reli = Reli + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[20]=="alegra"){
    uniSuma = 1;
    Reli = Reli  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[20]=="nada"){
    uniSuma = 1;
    CultPo =CultPo  + uniSuma;
    restaAlResto(uniSuma);
  }

/*¿Hay alguna flor que le ha domesticado?
Es posible
    + 3 Literatura
En la Tierra
    + 3 Cultura Popular
En otro planeta
    + 3 Civilización*/
  if (libro[21]=="posible"){
    uniSuma = 3;
    Lite = Lite + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[21]=="tierra"){
    uniSuma = 3;
    CultPo = CultPo  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[21]=="otroPlaneta"){
    Antigu = Antigu + civi3;
    Virtu = Virtu + civi3;
    Mujer = Mujer + civi3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }

  /*¿En qué etapa de su vida está? +3
    Semilla
      + Familia
    Cultivo
      + Cultura popular
    Recogida
      + Económico
    Transformación
      + Tecnología
    Elaboración para el consumo
      + Recetas*/
  if (libro[22]=="semilla"){
    AlbumFam = AlbumFam + familia3;
    Rece = Rece + familia3;
    EnferPer = EnferPer + familia3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }
  if (libro[22]=="cultivo"){
    uniSuma = 3;
    CultPo =CultPo  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[22]=="recogida"){
    uniSuma = 3;
    Econo =Econo  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[22]=="trasnformacion"){
    Indus = Indus + tecno3;
    Gen = Gen + tecno3;
    Norma = Norma + tecno3;
    Excede = Excede + tecno3;
    EnferTri = EnferTri + tecno3;
    uniSuma = 3;
    restaAlResto(uniSuma);
  }
  if (libro[22]=="elaboracion"){
    uniSuma = 3;
    Rece =Rece  + uniSuma;
    restaAlResto(uniSuma);
  }

  /*¿Qué lanzaría a un político que le ha decepcionado?
    Harina
      + Político
    Pan duro
      + Guerra
    Torrijas + 2
      + Arte*/
  if (libro[23]=="harina"){
    uniSuma = 2;
    Poli =Poli  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[23]=="panDuro"){
    uniSuma = 2;
    Guerra =Guerra  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[23]=="torrijas"){
    uniSuma = 3;
    Arte =Arte  + uniSuma;
    restaAlResto(uniSuma);
  }

  /*¿Le gusta comer pan de trigo?
    Si
        + Familia
    No
        + Recetas*/
  if (libro[24]=="si"){
    AlbumFam = AlbumFam + familia1;
    Rece = Rece + familia1;
    EnferPer = EnferPer + familia1;
    uniSuma = 1;
    restaAlResto(uniSuma);
  }
  if (libro[24]=="no"){
    uniSuma = 1;
    Rece =Rece  + uniSuma;
    restaAlResto(uniSuma);
  }

  /*¿Puede imaginarse su alimentación diaria sin necesidad de pan?
    Si
        + Tecnología
    No
        + Civilización
*/
  if (libro[25]=="si"){
    Indus = Indus + tecno1;
    Gen = Gen + tecno1;
    Norma = Norma + tecno1;
    Excede = Excede + tecno1;
    EnferTri = EnferTri + tecno1;
    uniSuma = 1;
    restaAlResto(uniSuma);
  }
  if (libro[25]=="no"){
    Antigu = Antigu + civi1;
    Virtu = Virtu + civi1;
    Mujer = Mujer + civi1;
    uniSuma = 1;
    restaAlResto(uniSuma);
  }

  /*¿Cuándo come usted pan?
    Desayuno
        +1 Recetas
    Almuerzo
        +1 Recetas
    Cena
        +2 Recetas
    Entre comidas
        +2 Recetas
    Cuando tiene hambre
        +3 Recetas
    Nunca
        + 1 Otros*/
  if (libro[26]=="desayuno"){
    uniSuma = 1;
    Rece =Rece  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[26]=="almuerzo"){
    uniSuma = 1;
    Rece =Rece  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[26]=="cena"){
    uniSuma = 2;
    Rece =Rece  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[26]=="entre"){
    uniSuma = 2;
    Rece =Rece  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[26]=="hambre"){
    uniSuma = 3;
    Rece =Rece  + uniSuma;
    restaAlResto(uniSuma);
  }
  if (libro[26]=="nunca"){
    uniSuma = 4;
    Otro =Otro  + uniSuma;
    restaAlResto(uniSuma);
  }

  //Seleccionamos las fotografías de cada carpeta según resultados del algoritmo
  paginas =[];
/*
  for(var i = 0; i<CultPo;i++){
    var pagTemp = Math.floor((Math.random()*CultPoMax)+CultPoMin);
    console.log("Cultura popular aleatorio "+pagTemp);
    paginas.push(pagTemp);
    console.log("Array de paginas "+paginas);
  }*/

  aleatoriPaginas(CultPo,CultPoMax,CultPoMin);
  aleatoriPaginas(Lite,LiteMax,LiteMin);
  aleatoriPaginas(Cine,CineMax,CineMin);
  aleatoriPaginas(Arte,ArteMax,ArteMin);
  aleatoriPaginas(Reli,ReliMax,ReliMin);
  aleatoriPaginas(SimboPon,SimboPonMax,SimboPonMin);
  aleatoriPaginas(SimboOri,SimboOriMax,SimboOriMin);
  aleatoriPaginas(Indus,IndusMax,IndusMin);
  aleatoriPaginas(Gen,GenMax,GenMin);
  aleatoriPaginas(Norma,NormaMax,NormaMin);
  aleatoriPaginas(Excede,ExcedeMax,ExcedeMin);
  aleatoriPaginas(EnferTri,EnferTriMax,EnferTriMin);
  aleatoriPaginas(Producto,ProducMax,ProducMin);
  aleatoriPaginas(AlbumFam,AlbumFamMax,AlbumFamMin);
  aleatoriPaginas(Rece,ReceMax,ReceMin);
  aleatoriPaginas(EnferPer,EnferPerMax,EnferPerMin);
  aleatoriPaginas(Econo,EconoMax,EconoMin);
  aleatoriPaginas(Terri,TerriMax,TerriMin);
  aleatoriPaginas(Guerra,GuerraMax,GuerraMin);
  aleatoriPaginas(Poli,PoliMax,PoliMin);
  aleatoriPaginas(Orien,OrienMax,OrienMin);
  aleatoriPaginas(Ponien,PonienMax,PonienMin);
  aleatoriPaginas(Antigu,AntiguMax,AntiguMin);
  aleatoriPaginas(Virtu,VirtuMax,VirtuMin);
  aleatoriPaginas(Mujer,MujerMax,MujerMin);
  aleatoriPaginas(CiviOtras,CiviOtrasMax,CiviOtrasMin);
  aleatoriPaginas(Otro,OtroMax,OtroMin);

  function aleatoriPaginas(variable,max,min){
    variable = Math.trunc(variable);
    //console.log("Cambio de carpeta "+"variable "+variable+ " min "+min+" max "+max);
    //console.log("Cambio de carpeta, cantidad paginas "+variable);
    for(var i = 0; i<variable;i++){
      var pagTemp = Math.round(Math.random()*(max-min)+parseInt(min));
      //console.log("Iteracción "+i);
      //console.log("Sección "+variable+" Max "+ max+ " Min "+ min);
      //Función para evitar la repetición de páginas
      if(paginas.indexOf(pagTemp) === -1){
        paginas.push(pagTemp);
        //console.log("Array de paginas "+paginas);
      }
      else if(paginas.indexOf(pagTemp) > -1){
        i = i-1;
        //console.log("if I "+i + "pagTemp "+pagTemp);
        //console.log("Array de paginas "+paginas);
      }
    }
  }

  //Variable temporal con las páginas
  //var paginas =[0,1,2];

//console.log("Despues de modifica "+ CultPo,Lite,Cine,Arte,Reli,Econo,Terri,Guerra,Poli,Orien,Ponien,Indus,Gen,Norma,Excede,EnferTri,AlbumFam,Rece,EnferPer,Antigu,Virtu,Mujer,Otro);

  //Variables para portada
  var numLib = libro[0];
  var autor = libro[29];
  var titulo = libro[28];

  //Variables índice Libro
  var indice  = [];

  indice [1] = Math.trunc(CultPo + Arte + Cine + Lite + Reli); //200 gr. de simbolismo
  indice [2] = Math.trunc(Guerra);  //2 tazas de guerra
  indice [3] = Math.trunc(EnferTri); //1 vaso de hambre
  indice [4] =  Math.trunc(Econo);  //2 cucharaditas de ideología
  indice [5] =  Math.trunc(Otro); // 3 huevos
  indice [6] =  Math.trunc(Arte); // Una pizca de arte, al gusto
  indice [7] =  Math.trunc(Cine + Mujer); // 200 mililitros de cine y revolución
  indice [8] =  Math.trunc(Producto); // 2 espigas de trigo
  indice [9] =  Math.trunc(AlbumFam); // 6 dientes de familia
  indice [10] = Math.trunc(Excede); // 4 litros de cerveza
  // Suficiente agua
  indice [11] =  Math.trunc(Antigu); // 4 civilizaciones medianas
  indice [12] =  Math.trunc(Gen); // 1 moño de trigo transgénico
  indice [13] =  Math.trunc(CultPo); // 1 cucharada de cultura popular
  indice [14] =  Math.trunc(Poli); // 2 docenas de políticos en harina
  indice [15] =  Math.trunc(Producto); // 1 libra de harina para preparar pócima
  indice [16] =  Math.trunc(Guerra); // 1 batalla por el trigo, picada
  // Tecnología diluida al gusto

  //Llamamos a la función de creación de PDF con las páginas cargadas en la variable paginas
  cargaImagenes(paginas,numLib,autor,titulo,indice);
}

//Función en la que restamos las unidades que hemos sumado al resto de variables
function restaAlResto(uniSuma){
  var uniResta = uniSuma/27;
  CultPo = CultPo - uniResta;
  Lite = Lite- uniResta;
  Cine = Cine - uniResta;
  Arte = Arte - uniResta;
  Reli = Reli - uniResta;
  SimboPon = SimboPon - uniResta;
  SimboOri = SimboOri - uniResta;
  Econo = Econo - uniResta;
  Terri = Terri - uniResta;
  Guerra = Guerra - uniResta;
  Poli = Poli - uniResta;
  Orien = Orien - uniResta;
  Ponien = Ponien - uniResta;
  Indus = Indus - uniResta;
  Gen = Gen - uniResta;
  Norma = Norma - uniResta;
  Excede = Excede - uniResta;
  EnferTri = EnferTri - uniResta;
  Producto = Producto - uniResta;
  AlbumFam = AlbumFam - uniResta;
  Rece = Rece - uniResta;
  EnferPer = EnferPer - uniResta;
  Antigu = Antigu - uniResta;
  Virtu = Virtu - uniResta;
  Mujer = Mujer - uniResta;
  CiviOtras = CiviOtras - uniResta;
  Otro = Otro - uniResta;
}
