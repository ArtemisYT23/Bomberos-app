const initialState = {
    createdActivity: false,
    updateActivity: false,
    deleteActivity: false,
    createdCategory: false,
    updateCategory: false,
    deleteCategory: false,
    createdRate: false,
    updateRate: false,
    deleteRate: false,
    createdTaxPayer: false,
    updateTaxPayer: false,
    deleteTaxPayer: false,
}


const OPEN_CREATED_ACTIVITY = "OPEN_CREATED_ACTIVITY";
const OPEN_UPDATE_ACTIVITY = "OPEN_UPDATE_ACTIVITY";
const OPEN_DELETE_ACTIVITY = "OPEN_DELETE_ACTIVITY";

const OPEN_CREATED_CATEGORY = "OPEN_CREATED_CATEGORY";
const OPEN_UPDATE_CATEGORY = "OPEN_UPDATE_CATEGORY";
const OPEN_DELETE_CATEGORY = "OPEN_DELETE_CATEGORY";

const OPEN_CREATED_RATE = "OPEN_CREATED_RATE";
const OPEN_UPDATE_RATE = "OPEN_UPDATE_RATE";
const OPEN_DELETE_RATE = "OPEN_DELETE_RATE";

const OPEN_CREATED_TAXPAYER = "OPEN_CREATED_TAXPAYER";
const OPEN_UPDATE_TAXPAYER = "OPEN_UPDATE_TAXPAYER";
const OPEN_DELETE_TAXPAYER = "OPEN_DELETE_TAXPAYER";

export default function ModalActionReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_CREATED_ACTIVITY:
        case OPEN_UPDATE_ACTIVITY:
        case OPEN_DELETE_ACTIVITY:
        case OPEN_CREATED_CATEGORY:
        case OPEN_UPDATE_CATEGORY:
        case OPEN_DELETE_CATEGORY:
        case OPEN_CREATED_TAXPAYER:
        case OPEN_UPDATE_TAXPAYER:
        case OPEN_DELETE_TAXPAYER:
            return action.payload;
        default:
            return state;
    }
}

//crear nueva actividad
export const openModalCreatedActivity = (bool) => async(dispatch, getState) => {
    const { modalState } = getState();
    dispatch({ 
        type: OPEN_CREATED_ACTIVITY,
        payload: { ...modalState, createdActivity: bool}
    })
}

//actualizar actividad
export const openModalUpdateActivity = (bool) => async(dispatch, getState) => {
    const { modalState } = getState();
    dispatch({ 
        type: OPEN_UPDATE_ACTIVITY,
        payload: { ...modalState, updateActivity: bool}
    })
}

//eliminar actividad
export const openModalDeleteActivity = (bool) => async(dispatch, getState) => {
    const { modalState } = getState();
    dispatch({ 
        type: OPEN_DELETE_ACTIVITY,
        payload: { ...modalState, deleteActivity: bool}
    })
}

//crear nueva categoria
export const openModalCreatedCategory = (bool) => async(dispatch, getState) => {
    const { modalState } = getState();
    dispatch({ 
        type: OPEN_CREATED_CATEGORY,
        payload: { ...modalState, createdCategory: bool}
    })
}

//actualizar categoria
export const openModalUpdateCategory = (bool) => async(dispatch, getState) => {
    const { modalState } = getState();
    dispatch({ 
        type: OPEN_UPDATE_CATEGORY,
        payload: { ...modalState, updateCategory: bool}
    })
}

//eliminar categoria
export const openModalDeleteCategory = (bool) => async(dispatch, getState) => {
    const { modalState } = getState();
    dispatch({ 
        type: OPEN_DELETE_CATEGORY,
        payload: { ...modalState, deleteCategory: bool}
    })
}


//crear nueva Tasa
export const openModalCreatedRate = (bool) => async(dispatch, getState) => {
    const { modalState } = getState();
    dispatch({ 
        type: OPEN_CREATED_RATE,
        payload: { ...modalState, createdRate: bool}
    })
}

//actualizar tasa
export const openModalUpdateRate = (bool) => async(dispatch, getState) => {
    const { modalState } = getState();
    dispatch({ 
        type: OPEN_UPDATE_RATE,
        payload: { ...modalState, updateRate: bool}
    })
}

//eliminar tasa
export const openModalDeleteRate = (bool) => async(dispatch, getState) => {
    const { modalState } = getState();
    dispatch({ 
        type: OPEN_DELETE_RATE,
        payload: { ...modalState, deleteRate: bool}
    })
}

//crear nuevo contribuyente
export const openModalCreatedTaxPayer= (bool) => async(dispatch, getState) => {
    const { modalState } = getState();
    dispatch({ 
        type: OPEN_CREATED_TAXPAYER,
        payload: { ...modalState, createdTaxPayer: bool}
    })
}

//actualizar contribuyente
export const openModalUpdateTaxPayer = (bool) => async(dispatch, getState) => {
    const { modalState } = getState();
    dispatch({ 
        type: OPEN_UPDATE_TAXPAYER,
        payload: { ...modalState, updateTaxPayer: bool}
    })
}

//eliminar contribuyente
export const openModalDeleteTaxPayer = (bool) => async(dispatch, getState) => {
    const { modalState } = getState();
    dispatch({ 
        type: OPEN_DELETE_TAXPAYER,
        payload: { ...modalState, deleteTaxPayer: bool}
    })
}
