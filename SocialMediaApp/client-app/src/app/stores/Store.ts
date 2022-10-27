import ActivityStore from "./ActivityStore";
import { createContext, useContext } from 'react';
import CommonStore from "app/stores/CommonStore";

interface Store {
    activityStore: ActivityStore,
    commonStore: CommonStore
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    // #TODO: Add more context obervables to Store
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}