var React =  require('react');

var WeatherMessage = (props) => {
  var {location, temp} = props;
  return (
    <div>
      <p>it is {temp} in {location}! </p>
    </div>
  );
};

module.exports = WeatherMessage;
