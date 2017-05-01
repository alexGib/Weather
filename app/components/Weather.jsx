var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap =require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  // this is one of two method inside setState method
  getInitialState: function(){
    return {
      isLoading: false // the message does not loading by default
    }
  },
  // maintain state method
  handleSearch: function(location){
    var that = this;
    that.setState({
      isLoading: true,// this mess is only shown in a moment until the temp and location are successfully crawled
      errorMessage: undefined// when new searh is executing, errorMessage is clear
    });
    // crawl date from api using promise method
    openWeatherMap.getTemp(location).then(function(temp){
      // if things go successfully, temp and location are returned
      that.setState({
        location:location,
        temp: temp,
        isLoading: false
      });
      // if things do not go well, errors are thrown
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    })
  },
  // render is method that render everything on screen so everything need to be called in this method
  render: function(){
    var {errorMessage, isLoading, location, temp} = this.state;
//  this function  will throw an "fetching data" message when things go wrong and throw a message that shows location and its temperature
    function renderMessage (){
      if (isLoading) {
          return <h3 className='text-center'>Fetching data...!!!</h3>;
      }else if(temp && location){
        // call WeatherMessage component and let it shows message itself
          return <WeatherMessage location={location} temp={temp}/>;
      }
    }
// this function will throw a message when things go wrong
    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }
    return (
      <div>
        <h3 className='text-center page-title'>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});
module.exports = Weather;
