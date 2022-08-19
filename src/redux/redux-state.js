import { legacy_createStore as createStore, combineReducers }  from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        sideBar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
);

const store = createStore(reducers);

window.store = store;
export default store;