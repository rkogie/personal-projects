import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import ActivityList from '../dashboard/ActivityList';
import ActivityFilters from '../dashboard/ActivityFilters';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/Store';
import { observer } from 'mobx-react-lite';



export default observer(function ActivityDashboard() {

    //Unpack the Store props
    const { activityStore } = useStore();
    const { loadActivites, activityRegistry } = activityStore;

    useEffect(() => {
            
            if (activityRegistry.size <= 1) {
                loadActivites();
            }
        }, [activityStore, activityRegistry.size, loadActivites]);
    
    //Guard for checking if app fetching data from server 
    if (activityStore.loadingInitial) return <LoadingComponent content='Fetching...' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    )
});