'use strict';

const adapterFilms = require('../../adapter/filmsAdapter');
const adapterPeople = require('../../adapter/peopleAdapter');
const adapterPlanets=require('../../adapter/planetsAdapter');
const adapterSpecies=require('../../adapter/speciesAdapter');
const adapterStarShips=require('../../adapter/starshipsAdapter');
const adapterVehicles=require('../../adapter/vehiclesAdapter')
const axios = require('axios');


module.exports.getFilms = async () => {
  const API_URL = 'https://swapi.py4e.com/api/films';
  try {
    const response = await axios.get(API_URL);
    const result = response.data.results.map(x => adapterFilms.translate(x));
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while fetching film data' })
    };
  }
};


module.exports.getPeople = async () => {
  const API_URL = 'https://swapi.py4e.com/api/people';
  try {
    const response = await axios.get(API_URL);
    const result = response.data.results.map(x => adapterPeople.translate(x));
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while fetching people data' })
    };
  }
};

module.exports.getPlanets = async () => {
    const API_URL = 'https://swapi.py4e.com/api/planets';
    try {
      const response = await axios.get(API_URL);
      const result = response.data.results.map(x => adapterPlanets.translate(x));
      return {
        statusCode: 200,
        body: JSON.stringify(result)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'An error occurred while fetching people data' })
      };
    }
  };

  module.exports.getSpecies = async () => {
    const API_URL = 'https://swapi.py4e.com/api/species';
    try {
      const response = await axios.get(API_URL);
      const result = response.data.results.map(x => adapterSpecies.translate(x));
      return {
        statusCode: 200,
        body: JSON.stringify(result)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'An error occurred while fetching people data' })
      };
    }
  };
  module.exports.getStarships = async () => {
    const API_URL = 'https://swapi.py4e.com/api/starships';
    try {
      const response = await axios.get(API_URL);
      const result = response.data.results.map(x => adapterStarShips.translate(x));
      return {
        statusCode: 200,
        body: JSON.stringify(result)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'An error occurred while fetching people data' })
      };
    }
  };

  module.exports.getVehicles = async () => {
    const API_URL = 'https://swapi.py4e.com/api/vehicles';
    try {
      const response = await axios.get(API_URL);
      const result = response.data.results.map(x => adapterVehicles.translate(x));
      return {
        statusCode: 200,
        body: JSON.stringify(result)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'An error occurred while fetching people data' })
      };
    }
  };