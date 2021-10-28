import React, { SyntheticEvent, useState } from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/Store';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';



export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const { deleteActivity, activitiesByDate, loading } = activityStore;

    //Behaviour that affects only the button identified with the list obj
    const [target, setTarget] = useState('');

    function handleActivityDelete(event: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(event.currentTarget.name);
        deleteActivity(id);
    }


    return (
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button
                                    as={Link}
                                    to={`/activities/${activity.id}`}
                                    floated='right'
                                    content='View'
                                    color='blue'
                                    />
                                <Button
                                    name={activity.id}
                                    floated='right'
                                    content='Delete'
                                    color='red'
                                    loading={loading && target === activity.id}
                                    onClick={(event) => handleActivityDelete(event, activity.id)} />
                                <Label
                                    basic
                                    content={activity.category}></Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})