const Dispatcher = require('../dispatcher');
const PostApi = require('../api/postApi');

const PostActions = {
    createPost: (post) => {
        const newPost = PostApi.savePost(post);
        Dispatcher.dispatch({
            actionType: 'POST_CREATED',
            post: newPost
        });
    }
};

module.exports = PostActions;