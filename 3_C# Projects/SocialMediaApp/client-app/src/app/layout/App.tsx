import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity-model';
import LoadingComponent from '../layout/LoadingComponent'
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';
import { useStore } from '../stores/Store';
import { observer } from 'mobx-react-lite';

function App() {

  //Unpack the Store props
  const { activityStore } = useStore();


  const [activities, setActivities] = useState<Activity[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    activityStore.loadActivites();
  }, [activityStore]);


  function handleDeleteActivity(id: string) {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x => x.id !== id)]);
      setSubmitting(false);
    });

  }

  //Guard for checking if app fetching data from server 
  if (activityStore.loadingInitial) return <LoadingComponent content='Fetching...' />

  return (
    <Fragment>
      <NavBar/>
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activityStore.activities}
          deleteActivity={handleDeleteActivity}
          submitting={submitting} />
      </Container>
    </Fragment>
  );
}

export default observer(App);
