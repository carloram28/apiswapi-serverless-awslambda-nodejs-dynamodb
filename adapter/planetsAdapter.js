const { reduce } = require('lodash')

/**
 * translate
 * 
 * @description Mapear(Adaptar y transformar) los nombres de los atributos de ingles a español del servicio films de SWAPI
 *
 */
module.exports.translate = (response) => {
  const mapping = {
    'climate': 'clima',
    'created': 'creado',
    'diameter': 'diámetro',
    'edited': 'editado',
    'films': 'películas',
    'gravity': 'gravedad',
    'name': 'nombre',
    'orbital_period': 'periodo orbital',
    'population': 'población',
    'residents': 'residentes',
    'rotation_period': 'periodo de rotación',
    'surface_water': 'agua superficial',
    'terrain': 'terreno',
    'url': 'URL'

    
  }

  return reduce(response, (result, value, key) => {
    result[(mapping[key]) ? (mapping[key]): key] = value
    return result
  }, {})

}