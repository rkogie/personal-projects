import React, { SyntheticEvent, useState } from 'react';
import { Button, Icon, Item, ItemGroup, Label, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Activity } from '../../../app/models/activity-model';
import { useStore } from '../../../app/stores/Store';

interface Props {
    activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
    const { activityStore } = useStore();
    const { deleteActivity, loading } = activityStore;

    //Behaviour that affects only the button identified with the list obj
    const [target, setTarget] = useState('');

    function handleActivityDelete(event: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(event.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Segment.Group>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size='tiny' circular src='assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activites/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted by User.Name</Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {activity.date}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View'/>

            </Segment>
        </Segment.Group>
    );
}