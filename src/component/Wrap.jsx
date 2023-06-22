import * as React from 'react';
import Header from './Header';
import InputContainer from './InputContainer';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


export default class Wrap extends React.Component {
    render() {
        return (
            <Container maxWidth="lg">
                <Box py={3} color="text.primary">
                    <Header></Header>
                    <InputContainer></InputContainer>
                </Box>
            </Container>
        );
    }
}