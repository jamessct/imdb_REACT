var React = require('react');

var Films = React.createClass({
  render: function() {

    return (
      <div className="film">
        <h5>
          {this.props.film}
        </h5>
          {this.props.children}
      </div>
    )
  }
})

module.exports = Films;