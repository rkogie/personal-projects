import React, { ChangeEvent, useEffect, useState } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/Store';
import { observer } from 'mobx-react-lite';
import { Link, useParams, useHistory } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { v4 as uuid } from 'uuid';


export default observer(function ActivityForm() {
    const history = useHistory();
    const { activityStore } = useStore();
    const { createActivity, updateActivity,
        loading, loadingInitial, loadActivity } = activityStore;
    
    const { id } = useParams<{id: string}>();
    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
    });

    useEffect(() => {
        if (id) loadActivity(id).then(act => setActivity(act!));
    }, [id, loadActivity]);

    function handleSubmit() {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity, id: uuid()
            };
            createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`));
        } else {
            updateActivity(activity).then(() => history.push(`/activities/${activity.id}`))
        }
            
    }

    function handleInputChange(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

    if (loadingInitial) return <LoadingComponent content='Loading Activites...'/>

    return (
        <Segment clearing>

            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input
                    placeholder='Title'
                    value={activity.title}
                    name='title' onChange={handleInputChange} />
                <Form.TextArea
                    placeholder='Description'
                    value={activity.description}
                    name='description'
                    onChange={handleInputChange} />
                <Form.Input
                    placeholder='Category'
                    value={activity.category}
                    name='category'
                    onChange={handleInputChange} />
                <Form.Input
                    placeholder='Date'
                    type='date'
                    value={activity.date}
                    name='date'
                    onChange={handleInputChange} />
                <Form.Input
                    placeholder='City'
                    value={activity.city}
                    name='city'
                    onChange={handleInputChange} />
                <Form.Input
                    placeholder='Venue'
                    value={activity.venue}
                    name='venue'
                    onChange={handleInputChange} />
                <Button
                    positive
                    floated='right'
                    type='submit'
                    content='Submit'
                    loading={loading} />
                <Button
                    as={Link}
                    to='/activities'
                    floated='right'
                    type='button'
                    content='Cancel'
                     />
            </Form>
        </Segment>
    )
});