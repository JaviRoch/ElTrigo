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
  );
	   echo "formadata ".$formdata['edad']."<br><br>";


  //Insertamos datos del formulario al array
  array_push($arr_data,$formdata);


  //Convertimos array a JSON
  $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

  //wEscribimos los dato sen el archivo
  if(file_put_contents($myFile, $jsondata)) {
       echo 'Data successfully saved. <br>Return to <a href="inde3x.html">Home Page</a>';
   }
  else
       echo "error";

}
catch (Exception $e) {
         echo 'Caught exception: ',  $e->getMessage(), "\n";
}


 ?>
