const React = require('react');
const Router = require('react-router');
const PostForm = require('./postForm');
const PostApi = require('../../api/postApi');
const toastr = require('toastr');

const AddPostPage = React.createClass({
    mixins : [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom : (transition, component) => {
            if (component.state.dirty && !confirm('are you sure you want to leave this page without saving the changes?? :(')) {
                transition.abort();
            }
        }
    },
    getInitialState: () => {
        return { title: '', content: '', errors: {} } ;
    },
    render: function () {
        return (
            <PostForm post={this.state} onChange={this.updatePost} onSave={this.savePost}/>
        );
    },
    updatePost : function(event) {
        this.setState({dirty: true});
        const value = event.target.value;
        const field = event.target.name;
        this.state[field] = value;
        this.setState(this.state);
    },
    savePost: function(event) {
        event.preventDefault();

        if (!this.postIsValid())
            return;

        PostApi.savePost(this.state);
        toastr.success('Post save! :)');
        this.transitionTo('posts');
        this.setState({dirty: false});
    },
    postIsValid: function() {
        let result = true;
        this.state.errors = {};
        if (this.state.title.length <= 5) {
            this.state.errors.title = "Title must be at least 5 characters";
            result = false;
        }

        if (this.state.content.length <= 10) {
            this.state.errors.content = "Title must be at least 10 characters";
            result = false;
        }
        this.setState({errors: this.state.errors});

        return result;
    }
});

module.exports = AddPostPage;