const React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;
const Header = require('./header');

const App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = App;