const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

const PostList = React.createClass({
    propTypes: {
        posts: React.PropTypes.array.isRequired
    },
    render: function () {
        const createRow = (post) => <li key={post.id}><Link to="editPost" params={{id: post.id}}>{post.title}</Link> {post.date}</li>
        return (
            <ul>
                {this.props.posts.map(createRow)}
            </ul>
        );
    }
});

module.exports = PostList;