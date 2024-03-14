import axios from 'axios';

export const getCharactersList  = () => {
    const apiUrl = 'https://swapi.dev/api/people';
    return axios.get(apiUrl);
}
