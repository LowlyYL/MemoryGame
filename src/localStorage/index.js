import { store } from '../store';
import { v4 as uuidv4 } from 'uuid';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = () => {
    try {
        const serializedState = JSON.stringify(store.getState());
        localStorage.setItem(uuidv4(), serializedState);
    } catch (err) {
        return undefined;
    }
}