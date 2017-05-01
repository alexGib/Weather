var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, IndexLink} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var Examples = require('Examples');
var About = require('About');

//Load foundation
//TORESEARCH
require('style-loader!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
// App css
//TORESEARCH
require('style!css!sass!applicationStyles');

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <IndexRoute component={Weather}/>
    <Route path="examples" component={Examples}></Route>
    <Route path="about" component={About}></Route>
  </Route>
</Router>,
  document.getElementById('app')
);
