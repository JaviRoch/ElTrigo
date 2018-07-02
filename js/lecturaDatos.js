// Transferencia des datos desde la base de datos JSON
var xmlhttp = new XMLHttpRequest();
var url = "/data.json";
// Función al finalizar operación. Status a 200 ok, status a 404 fail
xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		// Guardamos los datos en una variable
		datos = xmlhttp.responseText;
		// Parseamos los datos de JSON a array
		parseo(datos);
}
}

// Comunicación con el archivo JSON
xmlhttp.open("GET", url, true);
xmlhttp.send();

// Parseamos los datos desde JSON y guardamos el último libro en una variable
function parseo (dat) {
	var libro = [];
  var libros = JSON.parse(dat)
  var ultimoLibro = libros.length - 1
	libro.push(ultimoLibro);
	var edad = libros[ultimoLibro].edad
	libro.push(edad);
	var genero = libros[ultimoLibro].genero
	libro.push(genero);
	var nacimiento = libros[ultimoLibro].nacimiento
	libro.push(nacimiento);
	var laboral = libros[ultimoLibro].laboral
	libro.push(laboral);

// Iniciamos función de tratamiento con variable del último libro
	trataAlgoritm(libro);

	var paginas =[0,1,2];

//Llamamos a la función de creación de PDF con las páginas cargadas en la variable paginas
	cargaImagenes(paginas);
}
