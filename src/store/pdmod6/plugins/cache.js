import { setState } from '../../../services/storage';

const shouldSkipCache = (mutation) => {
    // Your business logic here
    return false;
};

const cache = (store) => {
    store.subscribe((mutation, state) => {
        if (!shouldSkipCache(mutation)) {
            setState(state).catch(err => console.warn('failed to cache state', err));
        }
    });
};

export default cache;