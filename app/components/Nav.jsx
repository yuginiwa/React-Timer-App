var React   = require("react");
var {Link, IndexLink}  = require("react-router");


var Nav = React.createClass({
   render: function () {
       return (
          <div className='top-bar'>
            <div className='tob-bar-left'>
                <ul className='menu'> 
                    <li className='menu-text'>React Timer</li>
                    <li>
                        <IndexLink to='/' activeClassName='active-link'>Timer</IndexLink>
                    </li>
                    <li>
                        <Link to='/' activeClassName='active-link'>Count Down</Link>    
                    </li>
                </ul>
            </div>
            
            <div className='top-bar-right'>
                <ul className='menu'>
                    <li className='menu-text'>
                        Created by: <a href='http://carlvincentbaydo.xyz' target='_blank'>Carl Vincent Baydo</a>
                    </li>
                </ul>
            </div>
          </div> 
        );
   } 
});

module.exports = Nav;