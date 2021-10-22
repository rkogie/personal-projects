import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Activity } from '../models/activity-model';
import { v4 as uuid } from 'uuid';

export default class ActivityStore {
    activities: Activity[] = [];
    selectedActivity: Activity | undefined = undefined;
    editMode: boolean = false;
    loading: boolean = false;
    loadingInitial: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    //Arrow funcs auto bind to the class
    //Not required to setTitle: action.bound
    loadActivites = async () => {
        this.setLoadingState(true);
        try {
            const activitites = await agent.Activities.list();
            
                activitites.forEach(activity => {
                    activity.date = activity.date.split('T')[0];
                    this.activities.push(activity);
                });
            this.setLoadingState(false);

        } catch (error) {
            console.log(error);
            this.setLoadingState(false);
        }
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

    selectActivity = (id: string) => {
        this.selectedActivity = this.activities.find(a => a.id === id);
    }

    cancelSelectedActivity = () => {
        this.selectedActivity = undefined;
    }

    openForm = (id?: string) => {
        id
            ? this.selectActivity(id)
            : this.cancelSelectedActivity();
        this.setEditMode(true);
    }

    closeForm = () => {
        this.setEditMode(false);
    }

    createActivity = async (activity: Activity) => {
        this.setLoading(true);
        activity.id = uuid();
        try {
            await agent.Activities.create(activity);
            runInAction(() => {
                this.activities.push(activity);
                this.selectedActivity = activity;
                this.setEditMode(false);
                this.setLoading(true);
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.setLoading(true);
            });
        }
    }

    updateActivity = async (activity: Activity) => {
        this.setLoading(true);
        try {
            await agent.Activities.update(activity);
            runInAction(() => {
                this.activities = [...this.activities.filter(a => a.id !== activity.id)];
                this.activities.push(activity);
                this.selectedActivity = activity;
                this.setEditMode(false);
                this.setLoading(true);
            })

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
                this.activities = [...this.activities.filter(a => a.id !== id)];
                if (this.selectedActivity?.id === id) {
                    this.cancelSelectedActivity();
                }
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