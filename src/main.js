$ = jQuery = require('jquery');
const React = require('react');
const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;

const routes = (
    <Route name="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/home/homePage')}/>
        <Route name="posts" handler={require('./components/post/postsPage')}/>
        <Route name="post" handler={require('./components/post/managePostPage')}/>
        <Route name="about" handler={require('./components/about/aboutPage')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')} />
    </Route>
);

Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.getElementById("app"));
});
