var React = require("react");
var Clock = require("Clock");
var Controls = require("Controls");
var TimerStarter = require("TimerStarter");

var Timer = React.createClass({
   getInitialState: function () {
      return {
         count: 0,
         timerStatus: 'stopped'
      }
   },
   componentDidUpdate: function (prevProps, prevState) {
      if (this.state.timerStatus !== prevState.timerStatus) {
         switch (this.state.timerStatus) {
            case 'started':
               this.startTimer();
               break;
            case 'stopped':
               this.setState({count: 0});
            case 'paused':
               clearInterval(this.timer);
               this.timer = undefined;
               break;
         }
      }
   },
   startTimer: function () {
     
      this.timer = setInterval( () => {
         var newCount = this.state.count + 1;
         this.setState({
            count: newCount >= 0 ? newCount: 0
         });
      }, 1000);

   },
   componentWillUnmount: function () {
      clearInterval(this.timer);
      this.timer = undefined;
   },
   handleStart: function () {
      this.setState({
         count: this.state.count,
         timerStatus: 'started'
      });
   },
   handleStatusChange: function (newStatus) {
      this.setState({
         timerStatus: newStatus
      });
   },
   render: function () {
      var {count, timerStatus} = this.state;
      var renderControlArea = () => {
         if (timerStatus !== 'stopped') {
            return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>;
         }else {
            return <TimerStarter onStart={this.handleStart}/>;
         }
      }
      return (
            <div>
               <h1 className='page-title'>Timer App</h1>
               <Clock totalSeconds={count}/>
               <div className='start'>
                  {renderControlArea()}
               </div>
            </div>
       );
   }
});

module.exports = Timer;