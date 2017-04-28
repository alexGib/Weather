var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap =require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    that.setState({
      modal: undefined,
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp: temp,
        isLoading: false
      });
    }, function(e){
      that.setState({
        isLoading: false
        ErrorModal:
      });
      alert(errorMessage);
    })
  } ,
  render: function(){
    var {isLoading, location, temp} = this.state;
    function renderMessage (){
      if (isLoading) {
          return <h3 className='text-center'>Fetching data...!!!</h3>;
      }else if(temp && location){
          return <WeatherMessage location={location} temp={temp}/>;
      }
    };
    return (
      <div>
        <h3 className='text-center'>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  }
});
module.exports = Weather;
