var React = require('react');
var {Link} =  require('react-router');

var Examples = React.createClass ({
  render: function(){
    return (
      <div>
        <h2 className = 'text-center' >Examples</h2>
        <p>Here are some locations to try out</p>
        <ol>
          <li><Link to ='/?location = Ha Noi'>Ha Noi</Link></li>
          <li><Link to ='/?location = Ho Chi Minh'>Ho Chi Minh</Link></li>
        </ol>
    </div>
    );
  }
});
module.exports = Examples;
