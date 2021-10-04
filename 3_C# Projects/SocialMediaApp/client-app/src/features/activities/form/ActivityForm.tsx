import React, {ChangeEvent, useState} from 'react';
import { act } from 'react-dom/test-utils';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity-model';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
}


export default function ActivityForm({ activity: selectedActivity, closeForm }: Props) {
    
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
        console.log(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setActivity({...activity, [name]: value})
    }

    return (
        <Segment clearing>

            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Description'/>
                <Form.Input placeholder='Category'/>
                <Form.Input placeholder='Date'/>
                <Form.Input placeholder='City'/>
                <Form.Input placeholder='Venue' />
                <Button
                    positive
                    floated='right'
                    type='submit'
                    content='Submit'/>
                <Button
                    floated='right'
                    type='button'
                    content='Cancel'
                    onClick={closeForm} />
            </Form>
        </Segment>
    )
}