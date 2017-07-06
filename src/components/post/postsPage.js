const React = require('react');
const PostList = require('./postList');
const Router = require('react-router');
const Link = Router.Link;
const PostStore = require('../../stores/postStore');


const PostsPage = React.createClass({
    getInitialState: () => {
        return {
            posts : PostStore.getAll()
        }
    },
    _onChange: function() {
        this.setState({posts: PostStore.getAll()})
    },
    componentWillMount: function() {
        PostStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        PostStore.removeChangeListener(this._onChange);
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