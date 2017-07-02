const React = require('react');
const PostForm = require('./postForm');

const ManagePostPage = React.createClass({
    getInitialState: () => {
        return { title: '', content: ''} ;
    },
    render: function () {
        return (
            <PostForm post={this.state} onChange={this.onChange}/>
        );
    },
    onChange : function(event) {
        const value = event.target.value;
        const field = event.target.name;
        this.state[field] = value;
        this.setState(this.state);
    }
});

module.exports = ManagePostPage;