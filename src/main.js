$ = jQuery = require('jquery');
const React = require('react');
const HomePage = require('./components/homePage');
const AboutPage = require('./components/aboutPage');
const Header = require('./components/header');
const PostsPage = require('./components/postsPage');

const App = React.createClass({
    render: function() {
        let Page;

        switch(this.props.route) {
            case 'about': Page = AboutPage; break;
            case 'posts': Page = PostsPage; break;
            default: Page = HomePage; break;
        }
        return (
            <div>
                <Header/>
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
