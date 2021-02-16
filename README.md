# Sobre Este Proyecto

Este proyecto fue creador por mi y unos compareños de la universidad para solucionar un problema en la Oficina de Tecnologia de Informacion y Comunicacion (OTIC).

El objetivo de este proyecto es solucionar un problema encontrado en dicha oficina. Al indagar en este proyecto nos daremos cuenta que esta aplicacion web funciona como control de inventario para dicha oficina.

## Detalles Tecnicos

Estos son algunos detalles sobre como fue construida. Ante todo momento hay tener en cuenta que esta aplicacion web utiliza el MEAN Stack, por lo tanto, cualquier otro proyecto que utilize el mismo Stack deberia de funcionar de la mima manera

En el Front-End:

	- Angular
	- Bootstrap
	- Jquery
	- Popper.js 


En el Back-End:

	- NodeJS
	- Express.js
	- Mongoose

Base de datos:

	- MongoDB	

## Correr la aplicacion de manera local

Primero que nada tenemos que saber que esta aplicacion require una base de datos `MongoDB`. Una vez contamos con esto, podemos obtener un link the conexion a dicha base de datos. Este link the conexion tenemos que introducirlo en el archivo `config/keys.js.exemple`

``` 
module.exports = {
	mongoURI: '<mongoose connect URL>'
}

```

Una vez sustituido los datos necesarios, cambiamos el nombre de `keys.js.exemple` a `keys.js`, ahora solo hace falta instalar todas las dependencias necesarias.
```
npm install
```

Y por ultimo, iniciamos la aplicacion.
```
node main.js
```

## Screenshot

![Screenshot](https://github.com/elviserikvan/otic-upted/blob/main/screenshots/screenshot.png "Screenshot")
