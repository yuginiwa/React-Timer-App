var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require("./jquery.min.js");
var TestUtils = require('react-addons-test-utils');

var Countdown = require("Countdown");

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });
    
    describe('handleSetCountdown', () => {
        it('Should set state to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);
            
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started");
            
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should stopped to zero if the countdown will be negative', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);
            
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });
    });
});