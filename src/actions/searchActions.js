import {
    SEARCH_CHARACTER,
    FETCH_CHARACTERS,
    LOADING,
} from './types';

export const searchCharacter = text => dispatch => {
    dispatch({
        type: SEARCH_CHARACTER,
        payload: text,
    })
};

export const fetchCharacters = text => async (dispatch) => {
    let characters = []
    let response = await fetch(`https://swapi.dev/api/people/?search=${text}`);
    let data = await response.json();
    if(data.results.length){
        characters.push(data.results)
    }
    while (data.next !== null) {
        response = await fetch(data.next);
        data = await response.json();
        characters.push(data.results)
    }

    dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
    })
};

export const setLoading = () => {
    return {
        type: LOADING
    }
}

export const fetchHomePlanet = async (profile, setPlanet) => {
    let response = await fetch(profile.homeworld);
    let data = await response.json();
    setPlanet(data);
};
export const fetchFilm = async (film, setFilmsData) => {
    let response = await fetch(film);
    let data = await response.json();
    setFilmsData((prev) => [...prev, data]);
};
