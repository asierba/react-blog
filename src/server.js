const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


let posts = [
    {title: 'Active recall and spaced repetition', date: 'Mar 23, 2017', id: 1},
    {title: 'Consuming an http api from excel', date: 'Feb 24, 2017', id: 2},
    {title: 'From wordpress to jekyll', date: 'Feb 23, 2017', id: 3},
];

function newId() {
    const ids = posts.map(x => x.id);
    const maxId = Math.max.apply(null, ids);
    return maxId + 1;
}

app.get('/post', (req, res) => res.send(posts));  

app.post('/post', (req, res) => {
    const post = req.body;
    post.id = newId();
    posts.push(post);
    res.send(post);
});

app.put('/post/:id', (req, res) => {
    const id = Number(req.params.id);
    const post = req.body;

    const postToUpdate = posts.find(x => x.id === id);
    postToUpdate.title = post.title;
    postToUpdate.content = post.content;
    res.send(postToUpdate);
});

app.delete('/post/:id', (req, res) => {
    const id = Number(req.params.id);
    posts = posts.filter(x => x.id !== id);
});

app.listen(3000);