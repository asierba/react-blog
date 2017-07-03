const React = require('react');
const PostList = require('./postList');
const Router = require('react-router');
const Link = Router.Link;
const PostApi = require('../../api/postApi');

const posts = PostApi.getAll();

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