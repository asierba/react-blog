const Dispatcher = require('../dispatcher');
const PostApi = require('../api/postApi');

const PostActions = {
    initialisePosts : () => {
      const posts = PostApi.getAll();
      Dispatcher.dispatch({
         actionType: 'POSTS_LOADED',
          posts: posts
      });
    },
    createPost: (post) => {
        const newPost = PostApi.savePost(post);
        Dispatcher.dispatch({
            actionType: 'POST_CREATED',
            post: newPost
        });
    },
    deletePost: (id) => {
        PostApi.deletePost(id);
        Dispatcher.dispatch({
            actionType: 'POST_DELETED',
            id: id
        })
    }
};

module.exports = PostActions;