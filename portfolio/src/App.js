import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import {AppBar, Toolbar, Typography, Button, ThemeProvider, CssBaseline, createMuiTheme} from '@mui/material';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* Add more routes here */}
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
