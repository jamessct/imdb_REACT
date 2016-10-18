var React = require('react');
var FilmList = require('./FilmList.jsx');

var sampleData = [{id: 1, film: "Sausage Party"}, {id: 2, film: "Cafe Society"}, {id: 3, film: "Morgan"}, {id: 4, film: "The 9th Life of Louis Drax"}, {id: 5, film: "Naam Hai Akira"}, {id: 6, film: "Equity"}, {id: 7, film: "Things To Come"}];

propTypes: {
  title: React.PropTypes.string.isRequired
},

var FilmBox = React.createClass({

  getFilmList: function() {
    return{data: sampleData}
  },

  componentWillMount: function() {
    console.log("Component WILL Mount");
    var button = document.querySelector('button');
    console.log("Button: ", button);
  },

  componentDidMount: function() {
    console.log("Component DID mount");
    var button = document.querySelector('button');
    console.log("Button: ", button);
  },

  componentWillUpdate: function(nextProps, nextState) {
    console.log("Component WILL update");
    console.log("Next s:", nextState);
    console.log("Next p:", nextProps);
  },

  componentDidUpdate: function(prevProps, prevState) {
    console.log("Component DID update");
    console.log("Prev s:", prevState);
    console.log("Prev p:", prevProps);
  },

  render: function() {
    return (
      <div className="FilmList">
      <h3>{this.props.title}</h3>

        <FilmList data={this.state.data}/>
        <Button>Get Showings</Button>
      </div>
    )
  }
});

module.exports = FilmBox;