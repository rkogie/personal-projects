import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/Store';
import { observer } from 'mobx-react-lite';
import ActivityDetailedChat from '../details/ActivityDetailedChat';
import ActivityDetailedHeader from '../details/ActivityDetailedHeader';
import ActivityDetailedInfo from '../details/ActivityDetailedInfo';
import ActivityDetailedSideBar from '../details/ActivityDetailedSideBar';


export default observer(function ActivityDetails() {
    
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams<{ id: string }>();
    
    useEffect(() => {
        if (id) loadActivity(id);
            
    }, [id, loadActivity]);

    //Have to return a JSX element even if no activity is accessed
    if (loadingInitial || !activity) return <LoadingComponent />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity}/>
                <ActivityDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSideBar />
            </Grid.Column>
        </Grid>
    )
});