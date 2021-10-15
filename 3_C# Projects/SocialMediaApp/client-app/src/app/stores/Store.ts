import ActivityStore from "./ActivityStore";
import { createContext, useContext } from 'react';

interface Store {
    activityStore: ActivityStore,
}

export const store: Store = {
    activityStore: new ActivityStore(),
    // #TODO: Add more context obervables to Store
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}