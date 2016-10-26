var React = require("react");

var TimerStarter = React.createClass({
    onStart: function () {
        return (
            this.props.onStart()
        ) 
    },
    render: function () {
        return (
            <button className='primary hollow button expanded' onClick={this.onStart}>Start</button>
        );
    }
});

module.exports = TimerStarter;