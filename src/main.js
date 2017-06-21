$ = jQuery = require('jquery');
const React = require('react');
const HomePage = require('./components/homePage');
const AboutPage = require('./components/aboutPage');

const App = React.createClass({
    render: function() {
        let Page;
        // if (this.props.route == 'about') {
        //     Page = AboutPage;
        // } else {
        //     Page = HomePage;
        // }
        switch(this.props.route) {
            case 'about': Page = AboutPage; break;
            default: Page = HomePage; break;
        }
        return (
            <div>
                <Page></Page>
            </div>
        );
    }
});

function render() {
    const route = window.location.hash.substr(1);
    React.render(<App route={route}/>, document.getElementById("app"));
}
window.onhashchange = render;
render();
