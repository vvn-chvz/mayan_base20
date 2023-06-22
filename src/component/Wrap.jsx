import * as React from 'react';
import InputContainer from './InputContainer';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


export default class Wrap extends React.Component {
    render() {
        return (
            <Container maxWidth="md">
                <Box py={8} color="text.primary">
                    <InputContainer></InputContainer>
                </Box>
            </Container>
        );
    }
}