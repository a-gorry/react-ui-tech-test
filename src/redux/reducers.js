import { combineReducers } from 'redux';

export const buildings = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_BUILDINGS':
        return action.buildings;
        default:
        return state;
    }
};

export const navigate = (state = {}, action) => {
    switch (action.type) {
        case 'NAVIGATE':
        return action.currentView;
        default:
        return state;
    }
};

export const showNav = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_NAV':
        return action.toggle;
        default:
        return state;
    }
};

export const conversations = (state = {}, action) => {
    switch (action.type) {
        case 'CONVERSATION_COUNT':
        return action.count;
        default:
        return state;
    }
};

const reducers = combineReducers({ buildings, navigate, conversations, showNav });

export default reducers;