import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MTP from 'material-ui/styles/MuiThemeProvider'

const Root = () => (
    <MTP>
        <App />
    </MTP>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
