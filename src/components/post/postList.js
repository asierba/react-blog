const React = require('react');

const PostList = React.createClass({
    propTypes: {
        posts: React.PropTypes.array.isRequired
    },
    render: function () {
        const createRow = (post) => <li key={post.id}>{post.title} {post.date}</li>
        return (
            <ul>
                {this.props.posts.map(createRow)}
            </ul>
        );
    }
});

module.exports = PostList;