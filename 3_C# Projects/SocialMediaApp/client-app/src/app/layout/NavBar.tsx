import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';
import { useStore } from '../stores/Store';

export default function NavBar() {

    const { activityStore } = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img
                        src='/assets/logo.png'
                        alt='logo'
                        style={{marginRight: '10px'}} />
                    SocialMediaApp
                </Menu.Item>
                <Menu.Item name='Activites' />
                <Menu.Item>
                    <Button
                        positive
                        content='Create Activity'
                        onClick={() => activityStore.openForm()}/>
                </Menu.Item>
            </Container>

        </Menu>
    )

}