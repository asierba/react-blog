const posts = [
    { title: 'Active recall and spaced repetition', date: 'Mar 23, 2017', id: 1},
    { title: 'Consuming an http api from excel', date: 'Feb 24, 2017', id: 2},
    { title: 'From wordpress to jekyll', date: 'Feb 23, 2017', id: 3},
];

const PostApi = {
    getById: function(id) {
        return posts.find(x => x.id === id);
    },
    getAll : function () {
        return posts;
    },
    savePost: post => {
        posts.push(post);
    }
};

module.exports = PostApi;