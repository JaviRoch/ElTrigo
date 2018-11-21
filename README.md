# ElTrigo, Alimentación Colectiva

## Taller
Aplicación web desarrollada en el taller E Trigo, Alimentación colectiva celebrado en Harinera ZGZ y guiado por Julián Barón.

Este taller tiene el objetivo de explorar las relaciones de trabajo colectivas en la creación, autoedición y difusión de una publicación/fotolibro. El tema con el que trabajaremos está dedicado al trigo. Nuestra guía será su ciclo completo, el proceso desde que se prepara la tierra para plantar la semilla hasta que llega a nuestras mesas: semilla, cultivo y recogida, transformación y elaboración para el consumo.

La base de este taller ha sido la elaboración de un gran archivo de más de 3000 imágenes y documentos sobre la historia del trigo a lo largo y ancho del planeta. Las imágenes utilizadas para la creación de este archivo proceden de las participantes del taller, de donaciones de archivos personales, de bancos de imágenes o extraídas de la Web. Todo este material visual, además de textos, videos, noticias y otros documentos inclasificables se ha organizado en áreas temáticas, y es la base de la publicación que presentamos a través de la aplicación web eltrigoalimentacioncolectiva.org El formulario de esta aplicación recoge diferentes datos sobre la relación del lector con el trigo, a partir de la cual genera una publicación personalizada a modo de receta, que se puede descargar en PDF, editar, ampliar, reducir, imprimir, encuadernar y compartir.

## Programación
La aplicación web consta de un formulario html bootstrap con una personalización estética de diseño brutalist.

Dependiendo de la contestación de las preguntas se ha creado un algoritmo que seleccionará más o menos imágenes de cada temática. Dentro de cada temática tiene una variable de aleatoriedad.

El resultado final es un libro en PDF descargable creado con la librería de javascript jspdf con unas 80 páginas de las 900 disponibles.

El almacenamiento de los datos del formulario se realiza en un archivo json con una función php.

La visualización de las imágenes en la página de descarga se realiza con la librería jquery.randomizer.

## Prerequisitos
Esta aplicación ha sido probada en un servidor apache con php 7.0

## Instalación
Para un correcto funcionamiento tan solo se le deben de dar permisos de escritura al archivo json


## Temáticas
Cultura Popular,
Literatura,
Cine,
Arte,
Religión,
Simbolismo Poniente,
Simbolismo Oriente,
Economía,
Territorio,
Guerra,
Política,
Oriente,
Poniente,
Industria,
Genética,
Normas,
Excedente,
Enfermedad del trigo,
Producto,
Álbum de familia,
Recetas,
Enfermedad de las personas,
Civilizaciones antiguas,
Civilizaciones virtuales,
Civilizaciones mujer,
Civilizaciones otras,
Otras

Las imágenes del repositorio son de ejemplo

## Agradecimientos
Julián Barón, Alba Cano, Camila Kevorkian, Carlos Colás, Christian Robles, Cintia Sarria, Cristina Sieso, Elba Haxël, Javier Roche, José Garrido, Laura Cailloux, Marta Sánchez, Jorge Isla, Mercè Torres, Rohan Thapa, Ana Marcén, Beatríz Navarra, Fermín Serrano, Javier Ortiz-Echagüe, Cristina Hernández, Sofía Guillén y Leticia Tojar.
