const React = require('react');

const Header = React.createClass({
    render: () => {
        return (
            <ul className="nav nav-tabs">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        )
    }
});

module.exports = Header;