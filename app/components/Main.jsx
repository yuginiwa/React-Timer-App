var React   = require("react");
var Nav     = require("Nav");



var Main = (props) => {
    return (
        <div>
            <Nav/>
            <h1>Main Render</h1>
            {props.children}
        </div>
    );
};

module.exports = Main;