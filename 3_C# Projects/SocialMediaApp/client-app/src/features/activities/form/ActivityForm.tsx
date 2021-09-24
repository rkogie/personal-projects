import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';

/*interface Props{
    -- Todo
}*/


export default function ActivityForm() {
    return (
        <Segment clearing>

            <Form>
                <Form.Input placeholder='Title'/>
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
                    content='Cancel'/>
            </Form>
        </Segment>
    )
}