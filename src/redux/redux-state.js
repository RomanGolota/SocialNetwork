import { legacy_createStore as createStore, combineReducers }  from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        sideBar: sidebarReducer
    }
);

const store = createStore(reducers);

export default store;