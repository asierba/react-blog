const React = require('react');
const Router = require('react-router');
const PostForm = require('./postForm');
const PostApi = require('../../api/postApi');
const toastr = require('toastr');

const AddPostPage = React.createClass({
    mixins : [
        Router.Navigation
    ],
    getInitialState: () => {
        return { title: '', content: ''} ;
    },
    render: function () {
        return (
            <PostForm post={this.state} onChange={this.updatePost} onSave={this.savePost}/>
        );
    },
    updatePost : function(event) {
        const value = event.target.value;
        const field = event.target.name;
        this.state[field] = value;
        this.setState(this.state);
    },
    savePost: function(event) {
        event.preventDefault();
        PostApi.savePost(this.state);
        toastr.success('Post save! :)');
        this.transitionTo('posts');
    }
});

module.exports = AddPostPage;