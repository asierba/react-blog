const React = require('react');
const PostList = require('./postList');
const Router = require('react-router');
const Link = Router.Link;

const posts = [
    { title: 'Active recall and spaced repetition', date: 'Mar 23, 2017', id: 1},
    { title: 'Consuming an http api from excel', date: 'Feb 24, 2017', id: 2},
    { title: 'From wordpress to jekyll', date: 'Feb 23, 2017', id: 3},
]

const PostsPage = React.createClass({
    getInitialState: () => {
        return {
            posts : []
        }
    },
    componentDidMount: function () {
      if (this.isMounted())
          this.setState({posts: posts});
    },
    render: function() {
        return (
            <div>
            <h2>All blog posts</h2>
            <PostList posts={this.state.posts}/>
            <Link to="post" className="btn btn-default">Add new</Link>
            </div>
        );
    }
});

module.exports = PostsPage;