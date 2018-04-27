const posts = [
    {title: 'Active recall and spaced repetition', date: 'Mar 23, 2017', id: 1},
    {title: 'Consuming an http api from excel', date: 'Feb 24, 2017', id: 2},
    {title: 'From wordpress to jekyll', date: 'Feb 23, 2017', id: 3},
];

const url = 'http://localhost:3000/post';


function editPost(post) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PUT", `${url}/${post.id}`, true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
                if (xmlhttp.status != 200) {
                    throw 'something else other than 200 was returned';
                }
                resolve(JSON.parse(xmlhttp.responseText));
            }
        };

        xmlhttp.send(JSON.stringify(post)); 
    });
}

function addPost(post) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
                if (xmlhttp.status != 200) {
                    throw 'something else other than 200 was returned';
                }
                resolve(JSON.parse(xmlhttp.responseText));
            }
        };

        xmlhttp.send(JSON.stringify(post)); 
    });
}

const PostApi = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
                    if (xmlhttp.status != 200) {
                        throw 'something else other than 200 was returned';
                    }
                    resolve(JSON.parse(xmlhttp.responseText));
                }
            };

            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        });
    },
    savePost: post => {
        if (post.id) {
            return editPost(post);
        } else {
            return addPost(post);
        }
    },
    deletePost: id => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("DELETE", `${url}/${id}`, true);
        xmlhttp.send(null);
    }
};

module.exports = PostApi;