import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MTP from 'material-ui/styles/MuiThemeProvider';
import gMT from 'material-ui/styles/getMuiTheme'

const muiTheme = gMT({
    raisedButton: {
        primaryColor: '#0196df',
        primaryTextColor: '#eee',
        secondaryColor: '#aaa'
    },
    toolbar: {
        backgroundColor: "#06d",
        color: "#eee",
        hoverColor: "#fff",
        iconColor: "#fff"
    }
})

const Root = () => (
    <MTP muiTheme={muiTheme}>
        <App />
    </MTP>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
