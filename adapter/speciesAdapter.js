const { reduce } = require('lodash')

/**
 * translate
 * 
 * @description Mapear(Adaptar y transformar) los nombres de los atributos de ingles a español del servicio films de SWAPI
 *
 */
module.exports.translate = (response) => {
  const mapping = {
    'average_height': 'altura_promedio',
    'average_lifespan': 'vida_promedio',
    'classification': 'clasificación',
    'created': 'creado',
    'designation': 'designación',
    'edited': 'editado',
    'eye_colors': 'color_ojos',
    'hair_colors': 'color_cabello',
    'homeworld': 'mundo_natal',
    'language': 'idioma',
    'name': 'nombre',
    'people': 'gente',
    'films': 'peliculas',
    'skin_colors': 'color_piel',
    'url': 'url'

    
  }

  return reduce(response, (result, value, key) => {
    result[(mapping[key]) ? (mapping[key]): key] = value
    return result
  }, {})

}