const React = require('react');

const HomePage = React.createClass({
    render: () => {
        return (
            <div>
            <h1>kaixooooo!</h1>
                <a className="btn btn-default" href="#" role="button">Link</a>
                <button className="btn btn-default" type="submit">Button</button>
                <input className="btn btn-default" type="button" value="Input"/>
                <input className="btn btn-default" type="submit" value="Submit"/>
            </div>
        );
    }
})

module.exports = HomePage;