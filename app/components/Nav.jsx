var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass ({
  onSearch: function(e){
    e.preventDefault();
    alert('This is not wired yet');
  },
  render: function(){
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
              <li className='menu-text'>A Weather App</li>
              <li><IndexLink to="/" activeClassName="active">Get Weather</IndexLink></li>
              <li><Link to="/Examples" activeClassName="active">Examples</Link></li>
              <li><Link to="/About" activeClassName="active">About</Link></li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <form onSubmit={this.onSearch}>
            <ul className = 'menu'>
              <li><input type = 'search' placeholder='Search by location'/></li>
              <li><button className='button'>Get Weather</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
