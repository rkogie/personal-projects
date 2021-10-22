import React, { Fragment, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import LoadingComponent from '../layout/LoadingComponent'
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { useStore } from '../stores/Store';
import { observer } from 'mobx-react-lite';

function App() {

  //Unpack the Store props
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivites();
  }, [activityStore]);


  

  //Guard for checking if app fetching data from server 
  if (activityStore.loadingInitial) return <LoadingComponent content='Fetching...' />

  return (
    <Fragment>
      <NavBar/>
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard/>
      </Container>
    </Fragment>
  );
}

export default observer(App);
