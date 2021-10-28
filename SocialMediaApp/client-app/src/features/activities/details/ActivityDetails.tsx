import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/Store';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';


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
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button
                        basic
                        as={Link}
                        to={`/manage/${activity.id}`}
                        color='blue'
                        content='Edit'
                    />
                    <Button
                        as={Link}
                        to={'/activities'}
                        basic
                        color='grey'
                        content='Cancel'
                    />
                </Button.Group>
            </Card.Content>
        </Card>
    )
});