<?php
//Código de chrishazfun https://github.com/chrishazfun/php-json-form-submit
//Importante configurar bien los permisos para la modificación del archivo

  $myFile = "data.json"; //Archivo de datos
  $arr_data = array(); //Array de trabajo

try
{
  //Cogemos los datos existentes en el archivo  de datos
  $jsondata = file_get_contents($myFile);

  //Convertimos JSON a array
  $arr_data = json_decode($jsondata, true);

  //Cogemos los datos del formulario
  $formdata = array(
     'NLibro'=>count($arr_data),
     'edad'=> $_POST['edad'],
     'genero'=> $_POST['genero'],
     'nacimiento'=> $_POST['nacimiento'],
     'laboral'=> $_POST['laboral'],
     'cocinero'=> $_POST['cocinero'],
     'granCocinero'=> $_POST['granCocinero'],
     'plantero'=> $_POST['plantero'],
     'celiaco'=> $_POST['celiaco'],
     'artista'=> $_POST['artista'],
     'viveSinPan'=> $_POST['viveSinPan'],
     'queTrigo'=> $_POST['queTrigo'],
     'latin'=> $_POST['latin'],
     'hambre'=> $_POST['hambre'],
     'comunista'=> $_POST['comunista'],
     'fascista'=> $_POST['fascista'],
     'virtual'=> $_POST['virtual'],
     'ovnis'=> $_POST['ovnis'],
     'basura'=> $_POST['basura'],
     'sobras'=> $_POST['sobras'],
     'tiraPan'=> $_POST['tiraPan'],
     'flor'=> $_POST['flor'],
     'etapaVida'=> $_POST['etapaVida'],
     'lanzaPolitico'=> $_POST['lanzaPolitico'],
     'comePanTrigo'=> $_POST['comePanTrigo'],
     'alimentaSinPan'=> $_POST['alimentaSinPan'],
     'cuandoCome'=> $_POST['cuandoCome'],
     'confirma'=> $_POST['confirma'],
     'titulo'=> $_POST['titulo'],
     'autor'=> $_POST['autor'],
  );

  //Insertamos datos del formulario al array
  array_push($arr_data,$formdata);


  //Convertimos array a JSON
  $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

  //wEscribimos los dato sen el archivo
  if(file_put_contents($myFile, $jsondata)) {
       header("Location: creaLibro.html");
   }
  else
       echo "error al guardar datos";

}
catch (Exception $e) {
         echo 'Caught exception: ',  $e->getMessage(), "\n";
}


 ?>
