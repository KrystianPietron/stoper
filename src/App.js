import React, { Component } from 'react';
import Button from './elements/Button'
import Paper from 'material-ui/Paper'

const style = {
  paper: {
    margin: 30,
    padding: 30,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  buttons: {
    margin: 15
  }
}

class App extends Component {
  render() {
    return (
      <Paper
        style={style.paper}>
        <div>
          Time
        </div>
        <div>
          <Button
            style={style.buttons}
            label='START'
          />
          <Button
            style={style.buttons}
            label='STOP'
          />
          <Button
            style={style.buttons}
            label='RESET'
          />
        </div>
      </Paper>
    );
  }
}

export default App;
