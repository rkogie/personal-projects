import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';


function App() {

  const [activities, setActvities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(res => {
      console.log(res);
      setActvities(res.data);
    })
  }, []);

  return (
    <div>
      <Header as='h2' icon='users' content='SocialMediaApp' />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id} >
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
