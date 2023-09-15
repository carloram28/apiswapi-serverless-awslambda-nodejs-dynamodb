const { reduce } = require('lodash')

/**
 * translate
 * 
 * @description Mapear(Adaptar y transformar) los nombres de los atributos de ingles a español del servicio films de SWAPI
 *
 */
module.exports.translate = (response) => {
  const mapping = {
    'MGLT': 'MGLT',
    'cargo_capacity': 'capacidad_carga',
    'consumables': 'consumibles',
    'cost_in_credits': 'coste_en_creditos',
    'created': 'creado',
    'crew': 'multitud',
    'edited': 'editado',
    'hyperdrive_rating': 'calificacion_hiperimpulsor',
    'length': 'longitud',
    'manufacturer': 'fabricante',
    'max_atmosphering_speed': 'velocidad_maxima_atmosfera',
    'model': 'modelo',
    'name': 'nombre',
    'passengers': 'pasajeros',
    'films': 'peliculas',
    'pilots': 'pilotos',
    'starship_class':'clase_nave',
    'url': 'url',
    
  }

  return reduce(response, (result, value, key) => {
    result[(mapping[key]) ? (mapping[key]): key] = value
    return result
  }, {})

}