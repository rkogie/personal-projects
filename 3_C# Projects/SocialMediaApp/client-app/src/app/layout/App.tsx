import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity-model';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {

  const [activities, setActvities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(res => {
      console.log(res);
      setActvities(res.data);
    })
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectedActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectedActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  return (
    <Fragment>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectedActivity={handleCancelSelectedActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}/>
      </Container>
    </Fragment>
  );
}

export default App;
