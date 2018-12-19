import React from 'react'
import Button from '../elements/Button'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import { startAction, stopAction, resetStoper } from '../state/stoper';

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

class Stoper extends React.Component {

    componentWillUnmount() {
        this.props.stop()
    }


    render() {
        return (
        <Paper
            style={style.paper}>
            <div>
                {`${this.props.min}:${this.props.sec}:${this.props.msec}`}
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
        </Paper>)
    }
}

const mapStateToProps = state => ({
    min: state.stoper.min,
    sec: state.stoper.sec,
    msec: state.stoper.msec
})

const mapDispatchToProps = dispatch => ({
    start: () => dispatch(startAction()),
    stop: () => dispatch(stopAction()),
    reset: () => dispatch(resetStoper())
})

export default connect(mapStateToProps, mapDispatchToProps)(Stoper)