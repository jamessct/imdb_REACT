var React = require('react');
var Films = require('./Films.jsx');

var FilmList = React.createClass({

  render: function() {

    var filmNodes = this.props.data.map(function(film) {
      return (
        <Film key={film.id}>{film.film}</Film>
      )
    })

    return (
      <div>
        {filmNodes}
      </div>
    )
  }
})

module.exports = FilmList;