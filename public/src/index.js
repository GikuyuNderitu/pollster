import React from 'react';
import ReactDOM from 'react-dom';

import 'rxjs';
import {Provider} from 'react-redux';
import store from './state'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MTP from 'material-ui/styles/MuiThemeProvider';
import gMT from 'material-ui/styles/getMuiTheme'

const muiTheme = gMT({
    palette: {
        primary1Color: '#0196df',
    },
    raisedButton: {
        primaryTextColor: '#eee',
        secondaryColor: '#aaa'
    },
    toolbar: {
        // backgroundColor: "#06d",
        color: "#eee",
        hoverColor: "#fff",
        iconColor: "#fff"
    }
})

const Root = () => (
    <Provider store={store}>
        <MTP muiTheme={muiTheme}>
            <App />
        </MTP>
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
