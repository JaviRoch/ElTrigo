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
	var cocinero = libros[ultimoLibro].cocinero
	libro.push(cocinero);
	var granCocinero = libros[ultimoLibro].granCocinero
	libro.push(granCocinero);
	var plantero = libros[ultimoLibro].plantero
	libro.push(plantero);
	var celiaco = libros[ultimoLibro].celiaco
	libro.push(celiaco);
	var artista = libros[ultimoLibro].artista
	libro.push(artista);
	var viveSinPan = libros[ultimoLibro].viveSinPan
	libro.push(viveSinPan);
	var queTrigo = libros[ultimoLibro].queTrigo
	libro.push(queTrigo);
	var latin = libros[ultimoLibro].latin
	libro.push(latin);
	var hambre = libros[ultimoLibro].hambre
	libro.push(hambre);
	var comunista = libros[ultimoLibro].comunista
	libro.push(comunista);
	var fascista = libros[ultimoLibro].fascista
	libro.push(fascista);
	var virtual = libros[ultimoLibro].virtual
	libro.push(virtual);
	var ovnis = libros[ultimoLibro].ovnis
	libro.push(ovnis);
	var basura = libros[ultimoLibro].basura
	libro.push(basura);
	var sobras = libros[ultimoLibro].sobras
	libro.push(sobras);
	var tiraPan = libros[ultimoLibro].tiraPan
	libro.push(tiraPan);
	var flor = libros[ultimoLibro].flor
	libro.push(flor);
	var etapaVida = libros[ultimoLibro].etapaVida
	libro.push(etapaVida);
	var lanzaPolitico = libros[ultimoLibro].lanzaPolitico
	libro.push(lanzaPolitico);
	var comePanTrigo = libros[ultimoLibro].comePanTrigo
	libro.push(comePanTrigo);
	var alimentaSinPan = libros[ultimoLibro].alimentaSinPan
	libro.push(alimentaSinPan);
	var cuandoCome = libros[ultimoLibro].cuandoCome
	libro.push(cuandoCome);
	var confirma = libros[ultimoLibro].confirma
	libro.push(confirma);
	var titulo = libros[ultimoLibro].titulo
	libro.push(titulo);
	var autor = libros[ultimoLibro].autor
	libro.push(autor);


// Iniciamos función de tratamiento con variable del último libro
	trataAlgoritm(libro);
}
