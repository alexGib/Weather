var React = require('react');
var WeatherMessage = require('WeatherMessage');

var WeatherForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type ="search" ref="location" placeholder='Search by location'/>
          <button className='button hollow expanded'>Get Weather</button>
        </form>
      </div>
    );
  }
});
module.exports = WeatherForm;
