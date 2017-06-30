$ = jQuery = require('jquery');
const React = require('react');
const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const HomePage = require('./components/home/homePage');
const AboutPage = require('./components/about/aboutPage');
const PostsPage = require('./components/post/postsPage');
const App = require('./components/app');

var routes = (
    <Route name="/" handler={App}>
        <DefaultRoute handler={HomePage}/>
        <Route name="posts" handler={PostsPage}/>
        <Route name="about" handler={AboutPage}/>
    </Route>
);

Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.getElementById("app"));
});
