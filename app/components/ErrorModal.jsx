var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: "error"
    };
  },
  componentDidMount: function(){
     var modal = new Foundation.Reveal($("#error-modal"));
     modal.open();
  },
  render: function(){
    return(
      <div id='error-modal' className='reveal tiny text-center' data-reveal = "">
        <h3>Error</h3>
        <p>Error message here</p>
        <p>
          <button className='button hollow' data-close=''>Okay</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
