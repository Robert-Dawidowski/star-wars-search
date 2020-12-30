import {
    SEARCH_CHARACTER,
    FETCH_CHARACTERS,
    LOADING,
} from '../actions/types';

const initialState = {
    pages: null,
    text: '',
    movies: [],
    planets: [],
    characters: [],
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_CHARACTER:
            return {
                ...state,
                text: action.payload,
            };
        case FETCH_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}
