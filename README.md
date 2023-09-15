# Reto Softtek Peru

En este prueba se realizó una integración entre los servicios de AWS(Lambda, API Gateway, DynamoDB) y el framework Serverless, utilizando en el backend Node JS.

## Usos
Podemos encontrar un CRUD para poder interactuar a lo largo de la presente API-Rest
## Ojo:
- Al momento de realizar el deploy a amazon generara un codigo en el endpoint ,como se indica en la url de los apis.
## Routes Modelo User:
- GET → https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com/users, para traer todos los users con sus respectivas características.

- GET → https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com/users/{id}, donde id: Es el identificador del usuario ingresado

- POST →  https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com/users, Con esta ruta creamos un nuevo user donde el objecto a ingresar debe contener por ejemplo:
{   
    "username": "Juan",
    "lastname": "rodriguez",
    "job": "Frontend",
    "age": 27
}

- PUT → https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com/users/{id}, Para actualizar la información de uno de los users, ingresando los atributos ha actualizar,para luego que se actualize salgo un mensaje updated user. 

Por ejemplo:

{   
    "username": "Pedro",
    "lastname": "rodriguez",
    "job": "Frontend",
    "age": 27
}

- DELETE →  https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com/users/{id}, donde id: Es el identificador del user ingresado

## Routes API SWAPI:
- GET → https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com/people, para traer todos los people con sus respectivas características con la adptacion de atributos de ingles a español.
- GET → https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com/planets, para traer todos los planets con sus respectivas características con la adptacion de atributos de ingles a español.
- GET → https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com/starships, para traer todos los starships con sus respectivas características con la adptacion de atributos de ingles a español.
- GET → https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com/films, para traer todos los films con sus respectivas características con la adptacion de atributos de ingles a español.
- GET → https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com/species, para traer todos los species con sus respectivas características con la adptacion de atributos de ingles a español.
- GET → https://ueqprmyxw0.execute-api.us-west-2.amazonaws.com/vehicles, para traer todos los vehicles con sus respectivas características con la adptacion de atributos de ingles a español.

## Testing
Tambien se encontrará una carpeta con las pruebas unitarias realizadas a cada una de las peticiones para poder garantizar la funcionalidad de la API, esta fue realizada con JEST.
- npm run test
## modo desarrollo
 Utilizar: - serveless offline
## AWS 
 serverless deploy para subir a aws
