import React, { ChangeEvent, useState } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity-model';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}


export default function ActivityForm(
    { activity: selectedActivity, closeForm, createOrEdit, submitting }: Props) {

    const initState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
    }
    const [activity, setActivity] = useState(initState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

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
                    loading={submitting}/>
                <Button
                    floated='right'
                    type='button'
                    content='Cancel'
                    onClick={closeForm} />
            </Form>
        </Segment>
    )
}