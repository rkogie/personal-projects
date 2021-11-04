import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/Store';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';



export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const { groupedActivitiesByDate} = activityStore;

    return (
        <Fragment>
            {groupedActivitiesByDate.map(([groupByDate, activities]) => (
                <Fragment key={groupByDate}>
                    <Header sub color='teal'>
                        {groupByDate}
                    </Header>
                        {activities.map(activity => (
                            <ActivityListItem key={activity.id} activity={activity} />
                        ))}
                </Fragment>
            ))}
        </Fragment>
       
    )
})