var React =  require('react');

var About = (props) => {
  return (
    <div>
      <h2 className='text-center page-title'>About</h2>
      <p>This is the very first App that I've made so far. Stay tuned for next ones. They would be so much better</p>
      <p>Here are some tools that I used!!</p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react/'>Facebook React</a> -  This was a Javascript library used
        </li>
        <li>
          <a href='http://openweathermap.org'>Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
  </div>
  );
};
module.exports = About;
