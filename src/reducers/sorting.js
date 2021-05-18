/* eslint-disable import/no-anonymous-default-export */
import {
    ARRAY_GENERATED,
    SORTING_STARTED,
    SORTING_DONE
} from '../actions/types'

const initialState = {
    array: [],
    sortedArray: [],
    isSorting: false
}

export default function (state = initialState, action) {
    const {type, payload } = action;
    switch(type){
        case ARRAY_GENERATED:
            return {
                ...state,
                array: payload
            }
        case SORTING_STARTED:
            return {
                ...state,
                sortedArray: payload,
                isSorting: true
            }
        case SORTING_DONE:
            return {
                ...state,
                array: payload,
                isSorting: false
            }
        default:
            return state;
    }
}