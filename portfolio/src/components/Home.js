import React from 'react';
import {AppBar, Toolbar, Typography, Button, Container, Grid} from '@mui/material';

function Home() {
    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Typography variant="h2" gutterBottom>
                Welcome to My Portfolio
            </Typography>
            <Typography variant="h5" paragraph>
                Hi, I'm Puree Pangma, a Game Development student and enthusiast from Thailand.
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <Button variant="contained" color="primary" href="#projects">
                        View My Projects
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary" href="#about">
                        Learn More About Me
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;
