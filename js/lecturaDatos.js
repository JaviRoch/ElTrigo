
//Transferencia des datos desde la base de datos JSON
var xmlhttp = new XMLHttpRequest();
var url = "/data.json";
var datos;
var libros;
var ultimoLibro
var miLibro;

//Función al finalizar operación. Status a 200 ok, status a 404 fail
xmlhttp.onreadystatechange = function(){
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		//guardamos los datos en una variable
		datos = xmlhttp.responseText;
		console.log(datos);
		//parseamos los datos de JSON a array
		libros = JSON.parse(datos);
		console.log("libros " + libros[0].edad);
		ultimoLibro = libros.length;
		console.log("Último libro creado " + ultimoLibro);
	}
}

//comunicación con el archivo JSON
xmlhttp.open("GET",url,true);
xmlhttp.send();
