import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ModalActionReducer from "./States/ModalAction";
import ActivityReducer from "./States/Activity";
import CategoryReducer from "./States/Category";
import RateReducer from "./States/Rate";
import TaxPayerReducer from "./States/TaxPayer";

const rootReducer = combineReducers({
    modalState: ModalActionReducer,
    activityState: ActivityReducer,
    categoryState: CategoryReducer,
    rateState: RateReducer,
    taxState: TaxPayerReducer,

})

export default function generateStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
}