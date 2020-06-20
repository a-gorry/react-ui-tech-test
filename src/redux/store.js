import { createStore } from 'redux';
import reducers from './reducers';

export function configureStore(
  initialState = {
    navigate: {currentView:"Home"},
    conversations: {count: 2},
    showNav: {toggle: false}
  }) {
    const store = createStore(reducers, initialState);
    return store;
  };
  
export const store = configureStore();