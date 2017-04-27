var React =  require('react');

var WeatherMessage = (props) => {
  var {location, temp} = props;
  return (
    <div>
      <p className='text-center'>It is {temp} in {location}! </p>
    </div>
  );
};

module.exports = WeatherMessage;
