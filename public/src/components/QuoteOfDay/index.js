import React, {Component} from 'react';
import Paper from 'material-ui/Paper'

class QuoteOfDay extends Component {
    render() {
        return (
            <Paper
                zDepth={() => props.zDepth ? props.zDepth : 2} >
                <h1>{`Quote of the day is PLACEHOLDER_TEXT_FOR_QUOTE`}</h1>
        
            </Paper>
        ) 
    }
}
export default QuoteOfDay;