import axios from "axios";
import { ServerLocal } from "../../config";
import { openModalUpdateTaxPayer, openModalDeleteTaxPayer } from "../States/ModalAction";

const initialState = {
    TaxPayer: [],
    SelectedTaxPayer: null,
    elementError: "",
}

const GET_TAX_PAYER_ALL = "GET_TAX_PAYER_ALL";
const GET_TAX_PAYER_ERROR = "GET_TAX_PAYER_ERROR";
const SELECTED_TAX_PAYER = "SELECTED_TAX_PAYER";
const SELECTED_TAX_PAYER_ERROR = "SELECTED_TAX_PAYER_ERROR";

export default function TaxPayerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TAX_PAYER_ALL:
        case GET_TAX_PAYER_ERROR:
        case SELECTED_TAX_PAYER:
        case SELECTED_TAX_PAYER_ERROR:
            return action.payload;
        default:
            return state;
    }
}

//Traer todos los contribuyentes
export const getAllTaxPayer = () => async (dispatch, getState) => {
    const { taxState } = getState();
    axios({
        url: `${ServerLocal}TaxPayer`,
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then(function (response) {
        dispatch({
            type: GET_TAX_PAYER_ALL,
            payload: { ...taxState, TaxPayer: response.data }
        })
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: GET_TAX_PAYER_ERROR,
            payload: { ...taxState, TaxPayer: [] }
        })
    })
}

//filtrar Contribuyente seleccionada
export const setTaxPayerSelected = (index, type) => async (dispatch, getState) => {
    const { taxState } = getState();
    const { TaxPayer } = taxState;
    const SelectedTaxPayer = TaxPayer.find(x => x.id == index);

    if (SelectedTaxPayer == undefined) {
        dispatch({
            type: SELECTED_TAX_PAYER_ERROR,
            payload: { ...taxState, elementError: "El Id no existe" },
        });
        return;
    }
    dispatch({
        type: SELECTED_TAX_PAYER,
        payload: { ...taxState, SelectedTaxPayer },
    });

    if (type == 'edit') {
        dispatch(openModalUpdateTaxPayer(true));

    } if (type == 'delete') {
        dispatch(openModalDeleteTaxPayer(true));
    }

};
