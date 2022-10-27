import { Link } from "react-router-dom";
import { Segment, Header, Icon, Button } from "semantic-ui-react";

export default function NotFound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Oops - we've looked everywhere and couldn't find this webpage 
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' primary>
                    Return to Activites page
                </Button>
            </Segment.Inline>
        </Segment>
    );
}