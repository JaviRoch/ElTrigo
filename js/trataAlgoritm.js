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

//Variables de número de páginas por carpeta
  var CultPo;
  var Lite;
  var Cine;
  var Arte;
  var Reli;
  var Econo;
  var Terri;
  var Guerra;
  var Poli;
  var Orien;
  var Ponien;
  var Indus;
  var Gen;
  var Norma;
  var Excede;
  var EnferTri;
  var AlbumFam;
  var EnferPer;
  var Rece;
  var Antigu;
  var Virtu;
  var Mujer;
  var Otro;

//Variables para algoritmo
  var restaDemas;
  var uniSumar;

  const familia1 = 1/3;
  const simbo1 = 1/5;
  const poder1 = 1/6;
  const tecno1 = 1/5;

  //Variable temporal con las páginas
  var paginas =[0,1,2];

  //Variable trasnferencia de Autor
  var autor = libro[28];

  //Llamamos a la función de creación de PDF con las páginas cargadas en la variable paginas
  cargaImagenes(paginas,autor);
}
