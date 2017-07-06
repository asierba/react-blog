const posts = [
    {title: 'Active recall and spaced repetition', date: 'Mar 23, 2017', id: 1},
    {title: 'Consuming an http api from excel', date: 'Feb 24, 2017', id: 2},
    {title: 'From wordpress to jekyll', date: 'Feb 23, 2017', id: 3},
];

function editPost(post) {
    const postToUpdate = posts.find(x => x.id === post.id);
    postToUpdate.title = post.title;
    postToUpdate.content = post.content;
    return postToUpdate;
}

function addPost(post) {
    const ids = posts.map(x => x.id);
    const maxId = Math.max.apply(null, ids);
    const newId = maxId + 1;
    post.id = newId;
    posts.push(post);
    return post;
}

const PostApi = {
    getById: id => posts.find(x => x.id === id),
    getAll: () => posts,
    savePost: post => {
        if (post.id) {
            return editPost(post);
        } else {
            return addPost(post);
        }
    },
    deletePost: id => {
        // we don't need this to work for this mock api
    }
};

module.exports = PostApi;