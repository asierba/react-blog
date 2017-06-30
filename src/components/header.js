const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

const Header = React.createClass({
    render: () => {
        return (
            <ul className="nav nav-tabs">
                <li><Link to="/">Home</Link></li>
                <li><Link to="posts">Posts</Link></li>
                <li><Link to="about">About</Link></li>
            </ul>
        );
    }
});

module.exports = Header;