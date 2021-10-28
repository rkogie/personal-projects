import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img
                        src='/assets/logo.png'
                        alt='logo'
                        style={{marginRight: '10px'}} />
                    SocialMediaApp
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities' />
                <Menu.Item>
                    <Button
                        positive
                        as={NavLink}
                        to='/createActivity'
                        content='Create Activity' />
                </Menu.Item>
            </Container>

        </Menu>
    )

}