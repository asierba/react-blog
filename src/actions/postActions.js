const Dispatcher = require('../dispatcher');
const PostApi = require('../api/postApi');

const PostActions = {
    initialisePosts : () => {
      PostApi.getAll().then(posts => {
          Dispatcher.dispatch({
             actionType: 'POSTS_LOADED',
              posts: posts
          });
        });
    },
    createPost: (post) => {
        PostApi.savePost(post).then(newPost => {
            Dispatcher.dispatch({
                actionType: 'POST_CREATED',
                post: newPost
            });
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