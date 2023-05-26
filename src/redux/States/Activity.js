import axios from "axios";
import { ServerLocal } from "../../config";
import { openModalUpdateActivity, openModalDeleteActivity } from "./ModalAction";

const initialState = {
    Activity: [],
    SelectedActivity: null,
    elementError: ""
}

const GET_ACTIVITIES_ALL = "GET_ACTIVITIES_ALL";
const GET_ACTIVITIES_ERRORS = "GET_ACTIVITIES_ERRORS";
const SELECTED_ACTIVITY = 'SELECTED_ACTIVITY';
const SELECTED_ERRORS_ACTIVITY = "SELECTED_ERRORS_ACTIVITY";

export default function ActivityReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ACTIVITIES_ALL:
        case GET_ACTIVITIES_ERRORS:
        case SELECTED_ACTIVITY:
        case SELECTED_ERRORS_ACTIVITY:
            return action.payload;
        default:
            return state;
    }
}

//traer todas las actividades
export const getAllActivities = () => async (dispatch, getState) => {
    const { activityState } = getState();
    axios({
        url: `${ServerLocal}Activity`,
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then(function (response) {
        dispatch({
            type: GET_ACTIVITIES_ALL,
            payload: { ...activityState, Activity: response.data }
        })
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: GET_ACTIVITIES_ERRORS,
            payload: { ...activityState, Activity: [] }
        })
    })
}

//filtrar actividad seleccionada
export const setSelectedActivity = (index, type) => async (dispatch, getState) => {
    const { activityState } = getState();
    const { Activity } = activityState;
    const SelectedActivity = Activity.find(Activity => Activity.id == index);

    if (SelectedActivity == undefined) {
        dispatch({
            type: SELECTED_ERRORS_ACTIVITY,
            payload: { ...activityState, elementError: "El Id no existe" },
        });
        return;
    }
    if (type == 'edit') {
        dispatch(openModalUpdateActivity(true));
        dispatch({
            type: SELECTED_ACTIVITY,
            payload: { ...activityState, SelectedActivity },
        });
    } if (type == 'delete') {
        dispatch(openModalDeleteActivity(true));
        dispatch({
            type: SELECTED_ACTIVITY,
            payload: { ...activityState, SelectedActivity },
        });
    }

};