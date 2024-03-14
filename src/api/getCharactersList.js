import axios from 'axios';

export const getCharactersList  = (page) => {
    const apiUrl = `https://swapi.dev/api/people/?page=${page}`;
    return axios.get(apiUrl);
}
