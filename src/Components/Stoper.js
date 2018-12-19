import React from 'react'
import Button from '../elements/Button'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import { startAction, stopAsyncAction, resetStoper } from '../state/stoper';

const style = {
    paper: {
        margin: 30,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    buttons: {
        margin: 15
    }
}

class Stoper extends React.Component {

    render() {
        return (
            <Paper
                style={style.paper}>
                <h2
                    style={{ fontSize: '100px', color: '#00BCD4' }}
                >STOPER</h2>
                <div
                    style={{ fontSize: '200px', color: '#00BCD4' }}
                >
                    <strong>{`${this.props.min}:${this.props.sec}:${this.props.msec}`}</strong>
                </div>
                <div>
                    <Button
                        style={style.buttons}
                        label='START'
                        onClick={this.props.start}
                    />
                    <Button
                        style={style.buttons}
                        label='STOP'
                        onClick={this.props.stop}
                    />
                    <Button
                        style={style.buttons}
                        label='RESET'
                        onClick={this.props.reset}
                    />
                </div>
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    min: state.stoper.min,
    sec: state.stoper.sec,
    msec: state.stoper.msec
})

const mapDispatchToProps = dispatch => ({
    start: () => dispatch(startAction()),
    stop: () => dispatch(stopAsyncAction()),
    reset: () => dispatch(resetStoper())
})

export default connect(mapStateToProps, mapDispatchToProps)(Stoper)