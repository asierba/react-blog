const React = require('react');
const PostList = require('./postList');
const Router = require('react-router');
const Link = Router.Link;
const PostStore = require('../../stores/postStore');

const posts = PostStore.getAll();

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
            <Link to="addPost" className="btn btn-default">Add new</Link>
            </div>
        );
    }
});

module.exports = PostsPage;