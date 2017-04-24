var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = (props) => {
  return (
    <div>
      <h2>Nav</h2>
      <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
      <Link to="/Examples" activeClassName="active">Examples</Link>
      <Link to="/About" activeClassName="active">About</Link>
    </div>
  );
};
module.exports = Nav;
