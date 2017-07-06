const Dispatcher = require('../dispatcher');
const EventEmitter = require('events').EventEmitter;

let posts = [];
const PostStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },
    emitChange: function (callback) {
        this.emit('change');
    },
    getById: id => posts.find(x => x.id === id),
    getAll: () => posts
});

Dispatcher.register(function(action) {
   switch (action.actionType) {
       case 'POST_CREATED':
           posts.push(action.post);
           PostStore.emitChange();
           break;
       case 'POSTS_LOADED':
           posts = action.posts;
           PostStore.emitChange();
           break;
       case 'POST_DELETED':
           const id = action.id;
           posts = posts.filter(x => x.id !== id);
           PostStore.emitChange();
           break;
   }
});

module.exports = PostStore;
