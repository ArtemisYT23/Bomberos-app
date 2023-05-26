import axios from "axios";
import { ServerLocal } from "../../config";
import { openModalUpdateCategory, openModalDeleteCategory } from "./ModalAction";

const initialState = {
    Category: [],
    CategoryByActivity: [],
    SelectedCategory: null,
    elementError: ""
}

const GET_CATEGORY_ALL = 'GET_CATEGORY_ALL';
const GET_CATEGORY_ERRORS = 'GET_CATEGORY_ERRORS';
const FILTER_CATEGORY_BY_ACTIVITIES = 'FILTER_CATEGORY_BY_ACTIVITIES';
const SELECTED_CATEGORY = "SELECTED_CATEGORY";
const SELECTED_CATEGORY_ERRORS = "SELECTED_CATEGORY_ERRORS";

export default function CategoryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORY_ALL:
        case GET_CATEGORY_ERRORS:
        case FILTER_CATEGORY_BY_ACTIVITIES:
        case SELECTED_CATEGORY:
        case SELECTED_CATEGORY_ERRORS:
            return action.payload;
        default:
            return state;
    }
}

//traer todas las categorias
export const getAllCategories = () => async (dispatch, getState) => {
    const { categoryState } = getState();
    axios({
        url: `${ServerLocal}Category`,
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then(function (response) {
        dispatch({
            type: GET_CATEGORY_ALL,
            payload: { ...categoryState, Category: response.data }
        })
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: GET_CATEGORY_ERRORS,
            payload: { ...categoryState, Category: [] }
        })
    })
}

//filtrar categorias por actividada 
export const setFilterCategory = (index) => async (dispatch, getState) => {
    const { categoryState } = getState();
    const { Category } = categoryState;
    dispatch({
        type: FILTER_CATEGORY_BY_ACTIVITIES,
        payload: {
            ...categoryState, CategoryByActivity: Category.filter(x => x.id_Activity == index)
        },
    });
};

//filtrar categoria seleccionada
export const setSelectedCategory = (index, type) => async (dispatch, getState) => {
    const { categoryState } = getState();
    const { Category } = categoryState;
    const SelectedCategory = Category.find(x => x.id == index);

    if (SelectedCategory == undefined) {
        dispatch({
            type: SELECTED_CATEGORY_ERRORS,
            payload: { ...categoryState, elementError: "El Id no existe" },
        });
        return;
    }

    dispatch({
        type: SELECTED_CATEGORY,
        payload: { ...categoryState, SelectedCategory },
    });

    if (type == 'edit') {
        dispatch(openModalUpdateCategory(true));

    } if (type == 'delete') {
        dispatch(openModalDeleteCategory(true));
    }

};