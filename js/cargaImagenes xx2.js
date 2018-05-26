function cargaImagenes() {
	var doc = new jsPDF();
	document.write("En creamos PDF ");

		var getImageFromUrl = function(url, callback) {
			document.write("En get image ");
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
				if (typeof callback === 'function') {
					callback(data);
				}
			};
			img.src = url;

			return ret;
			
		};

	var rutina2;	
		var createPDF = function(imgData) {
			document.write("En create PDF ");
			doc.addImage(imgData, 'JPEG', 0, 0, 210, 297);
			doc.addPage();
			rutina2 ++;
		}

	var rutina;
	for(rutina=0; rutina<3; rutina++){
		document.write("En rutina ");
		getImageFromUrl(rutina+'.jpg', createPDF);
		//getImageFromUrl('2.jpg', createPDF);
		
	}

	if(rutina2=3){
		document.write("En save ");
		doc.save('output.pdf');
		
	}
	
}