function trataAlgoritm (libro) {

//Cargamos valores de unidades de páginas en variables
  var CultPoMin = 0;
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
  var CultPoMax =  99;
  var LiteMax =  199;
  var CineMax =  299;
  var ArteMax =  399;
  var ReliMax =  499;
  var EconoMax =  599;
  var TerriMax =  699;
  var GuerraMax =  799;
  var PoliMax =  899;
  var OrienMax =  999;
  var PonienMax =  1099;
  var IndusMax =  1199;
  var GuenMax = 1299;
  var NormaMax =  1399;
  var ExcedeMax =  1499;
  var EnferTriMax =  1599;
  var AbumFamMax =  1699;
  var EnferPerMax =  1799;
  var ReceMax =  1899;
  var AntiguMax =  1999;
  var VirtuMax =  2099;
  var MujerMax =  2199;
  var OtroMax =  2299;

//Variables de número de páginas por carpeta con carga inicial de valores
  CultPo = 7;
  Lite = 4;
  Cine = 2;
  Arte = 8;
  Reli = 5;
  Econo = 6;
  Terri = 3;
  Guerra = 6;
  Poli = 6;
  Orien = 4;
  Ponien = 4;
  Indus = 6;
  Gen = 7;
  Norma = 1;
  Excede = 3;
  EnferTri = 6;
  AlbumFam = 8;
  Rece = 4;
  EnferPer = 5;
  Antigu = 8;
  Virtu = 3;
  Mujer = 5;
  Otro = 3;

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

  //Variable temporal con las páginas
  var paginas =[0,1,2];

//console.log("Despues de modifica "+ CultPo,Lite,Cine,Arte,Reli,Econo,Terri,Guerra,Poli,Orien,Ponien,Indus,Gen,Norma,Excede,EnferTri,AlbumFam,Rece,EnferPer,Antigu,Virtu,Mujer,Otro);

  //Variables para portada
  var numLib = libro[0];
  var autor = libro[29];
  var titulo = libro[28];

  //Llamamos a la función de creación de PDF con las páginas cargadas en la variable paginas
  cargaImagenes(paginas,numLib,autor,titulo);
}

//Función en la que restamos las unidades que hemos sumado al resto de variables
function restaAlResto(uniSuma){
  var uniResta = uniSuma/23;
  CultPo = CultPo - uniResta;
  Lite = Lite- uniResta;
  Cine = Cine - uniResta;
  Arte = Arte - uniResta;
  Reli = Reli - uniResta;
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
  AlbumFam = AlbumFam - uniResta;
  Rece = Rece - uniResta;
  EnferPer = EnferPer - uniResta;
  Antigu = Antigu - uniResta;
  Virtu = Virtu - uniResta;
  Mujer = Mujer - uniResta;
  Otro = Otro - uniResta;
}
