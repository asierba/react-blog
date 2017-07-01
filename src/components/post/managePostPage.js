const React = require('react');
const PostForm = require('./postForm');

const ManagePostPage = React.createClass({
    render: function () {
        return (
            <PostForm/>
        );
    }
});

module.exports = ManagePostPage;