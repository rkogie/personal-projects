import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Activity } from '../models/activity-model';


export default class ActivityStore {
    //activities: Activity[] = [];
    activityRegistry = new Map<string, Activity>();
    selectedActivity: Activity | undefined = undefined;
    editMode: boolean = false;
    loading: boolean = false;
    loadingInitial: boolean = true;

    constructor() {
        makeAutoObservable(this);
    }

    get activitiesByDate() {
        return Array.from(this.activityRegistry.values()).sort((a, b) =>
            Date.parse(a.date) - Date.parse(b.date));
    }

    get groupedActivitiesByDate() {
        return Object.entries(
            this.activitiesByDate.reduce((activities, activity) => {
                const date = activity.date; //key for object hashmap
                activities[date] = activities[date] ? [...activities[date], activity] : [activity];
                return activities;
            }, {} as { [key: string]: Activity[] })
        )
    }
    

    //Arrow funcs auto bind to the class
    //Not required to setTitle: action.bound
    loadActivites = async () => {
        this.setLoadingState(true);
        try {
            const activitites = await agent.Activities.list();
            
            activitites.forEach(activity => {
                this.setActivity(activity);
            });
            this.setLoadingState(false);

        } catch (error) {
            console.log(error);
            this.setLoadingState(false);
        }
    }

    loadActivity = async (id: string) =>{
        let activity = this.getActivity(id);
        if (activity) {
            this.selectedActivity = activity;
            return activity;
        } else {
            this.setLoadingState(true);
            try {
                activity = await agent.Activities.details(id);
                this.setActivity(activity);

                runInAction(() => {
                    this.selectedActivity = activity;
                })

                this.setLoadingState(false);
                return activity;
            } catch (error) {
                console.log(error);
                this.setLoadingState(false);
            }
        }
    }

    //Accessors to abstract away get/set activity from backend
    private setActivity = (activity: Activity) => {
        activity.date = activity.date.split('T')[0];
        this.activityRegistry.set(activity.id, activity);
    }

    private getActivity = (id: string) => {
        if (!id) return;
        return this.activityRegistry.get(id);
    }

    setLoading = (state: boolean) => {
        this.loading = state;
    }
    
    setLoadingState = (state: boolean) => {
        this.loadingInitial = state;
    }

    setEditMode = (state: boolean) => {
        this.editMode = state;
    }

    createActivity = async (activity: Activity) => {
        this.setLoading(true);
        try {
            await agent.Activities.create(activity);
            this.actionHandler(activity);
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.setLoading(true);
            });
        }
    }

    actionHandler = (activity: Activity) =>{
        runInAction(() => {
            this.activityRegistry.set(activity.id, activity);
            this.selectedActivity = activity;
            this.setEditMode(false);
            this.setLoading(false);
        });
    }

    updateActivity = async (activity: Activity) => {
        this.setLoading(true);
        try {
            await agent.Activities.update(activity);
            this.actionHandler(activity);
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.setLoading(true);
            });
        }
    }

    deleteActivity = async (id: string) => {
        this.setLoading(true);
        try {
            await agent.Activities.delete(id);
            runInAction(() => {
                this.activityRegistry.delete(id);
                this.setLoading(false);
            });

        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.setLoading(false);
            });
        }
    }
}