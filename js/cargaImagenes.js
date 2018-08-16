function cargaImagenes(page,autor) {
	var doc = new jsPDF();
	//var page=[0,1,256,34,478,15,26,7,598,49,545,6,35,8,63,4,88,156,489,325,78,156,254,56];
	var paginaActual = 0;

//Texto página de portada
	doc.setFont("helvetica");
	doc.setFontType("bold");
	doc.setFontSize(22);
	doc.text(105, 80, 'El Trigo: Alimentación Colectiva', null, null, 'center');
	doc.setFontSize(12);
	doc.text(200, 265, autor, null, null, 'right');
	doc.addPage();

		//Función para extraer los datos de la imagen en binario
		var getImageFromUrl = function(url, callback) {
			var img = new Image(), data, ret = {
				data: null,
				pending: true
			};
			img.onError = function() {
				throw new Error('Cannot load image: "'+url+'"');
			};
			img.onload = function() {
				var canvas = document.createElement('canvas');
				document.body.appendChild(canvas);
				canvas.width = 2100;
				canvas.height = 2970;

				var ctx = canvas.getContext('2d');
				ctx.drawImage(img, 0, 0);
				// Grab the image as a jpeg encoded in base64, but only the data
				data = canvas.toDataURL('image/jpeg').slice('data:image/jpeg;base64,'.length);
				// Convert the data to binary form
				data = atob(data);
				document.body.removeChild(canvas);

				ret['data'] = data;
				ret['pending'] = false;
				//Comprobamos que createPage es una función
				if (typeof callback === 'function') {
					// Hacemos una llamada a la función createPage que hemos introducido como variable
					callback(data);
				}
			};
			img.src = url;
			return ret;
		}

		//Función de creación de página de imagen
		var createPage = function(imgData) {
			doc.addImage(imgData, 'JPEG', 0, 0, 210, 297);
			doc.addPage();

			//Condicionamos la grabación a que esté en la última iteracción
			paginaActual = paginaActual +1;
			if(paginaActual === page.length){
				doc.save('output.pdf');
			}
		}
		var longitudLibro = page.length;


		//Bucle pasando por todas las páginas
		for (var i = 0; i < longitudLibro; i++) {
			// Llamo a la función get Image para extraer el bruto de la imagen.
			getImageFromUrl('img/'+page[i]+'.jpeg', createPage);
		}
}
