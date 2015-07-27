require('./styles.styl')
var React = require('react'),
    RouterMixin = require('react-mini-router').RouterMixin;

var App = React.createClass({

    mixins: [RouterMixin],

    routes: {
        '/': 'home'
    },

    render: function() {
        return this.renderCurrentRoute();
    },

    home: function() {
        return (
          <div className='wrpaper'>
            <header>
              <div className="container">
                <h1>React SPA</h1>
              </div>
            </header>
            <div className="container">
              <p>Build React Single Page Application the fancy way.</p>
            </div>
          </div>
        )
    },

    notFound: function(path) {
        return <div class="not-found">Page Not Found: {path}</div>;
    }

})

React.render(<App/>, document.body)
