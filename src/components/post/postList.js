const React = require('react');
const Router = require('react-router');
const Link = Router.Link;
const PostActions = require('../../actions/postActions');

const PostList = React.createClass({
    propTypes: {
        posts: React.PropTypes.array.isRequired
    },
    deletePost: function(postId, event) {
        event.preventDefault();
        PostActions.deletePost(postId);
    },
    render: function () {
        const createRow = (post) =>
            <li key={post.id}><Link to="editPost" params={{id: post.id}}>{post.title}</Link> {post.date}
             <a href="#" onClick={this.deletePost.bind(this, post.id)}>Remove</a></li>
        return (
            <ul>
                {this.props.posts.map(createRow)}
            </ul>
        );
    }
});

module.exports = PostList;