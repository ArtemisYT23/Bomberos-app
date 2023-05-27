import axios from "axios";
import { ServerLocal } from "../../config";
import { openModalUpdateRate, openModalDeleteRate } from "./ModalAction";

const initialState = {
    Rate: [],
    RateByCategory: [],
    SelectedRate: null,
    elementError: ""
}

const GET_RATE_ALL = 'GET_RATE_ALL';
const GET_RATE_ERROR = 'GET_RATE_ERROR';
const FILTER_RATE_BY_CATEGORY = 'FILTER_RATE_BY_CATEGORY';
const SELECTED_RATE = 'SELECTED_RATE';
const SELECTED_RATE_ERRORS = 'SELECTED_RATE_ERRORS';

export default function RateReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RATE_ALL:
        case GET_RATE_ERROR:
        case FILTER_RATE_BY_CATEGORY:
        case SELECTED_RATE:
        case SELECTED_RATE_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
//traer todas las categorias
export const getAllRates = () => async (dispatch, getState) => {
    const { rateState } = getState();
    axios({
        url: `${ServerLocal}Rate`,
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then(function (response) {
        dispatch({
            type: GET_RATE_ALL,
            payload: { ...rateState, Rate: response.data }
        })
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: GET_RATE_ERROR,
            payload: { ...rateState, Rate: [] }
        })
    })
}

//filtrar tasas por categoria 
export const setFilterRate = (index) => async (dispatch, getState) => {
    const { rateState } = getState();
    const { Rate } = rateState;
    dispatch({
        type: FILTER_RATE_BY_CATEGORY,
        payload: {
            ...rateState, RateByCategory: Rate?.filter(x => x.id_Category == index)
        },
    });
};

//filtrar Tasa seleccionada
export const setSelectedCategory = (index, type) => async (dispatch, getState) => {
    const { rateState } = getState();
    const { Rate } = rateState;
    const SelectedRate = Rate.find(x => x.id == index);

    if (SelectedRate == undefined) {
        dispatch({
            type: SELECTED_RATE_ERRORS,
            payload: { ...rateState, elementError: "El Id no existe" },
        });
        return;
    }
    if (type == 'edit') {
        dispatch(openModalUpdateRate(true));
        dispatch({
            type: SELECTED_RATE,
            payload: { ...rateState, SelectedRate },
        });
    } if (type == 'delete') {
        dispatch(openModalDeleteRate(true));
        dispatch({
            type: SELECTED_RATE,
            payload: { ...rateState, SelectedRate },
        });
    }

};