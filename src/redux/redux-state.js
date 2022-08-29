import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose }  from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware  from "redux-thunk";

const reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        sideBar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

window.store = store;
export default store;