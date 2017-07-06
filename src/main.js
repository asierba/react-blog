$ = jQuery = require('jquery');
const React = require('react');
const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;
const PostAcions = require('./actions/postActions');

const routes = (
    <Route name="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/home/homePage')}/>
        <Route name="posts" handler={require('./components/post/postsPage')}/>
        <Route name="addPost" path="post" handler={require('./components/post/addEditPostPage')}/>
        <Route name="editPost" path="post/:id" handler={require('./components/post/addEditPostPage')}/>
        <Route name="about" handler={require('./components/about/aboutPage')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')} />
    </Route>
);


PostAcions.initialisePosts();

Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.getElementById("app"));
});
