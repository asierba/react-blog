const React = require('react');

const posts = [
    { title: 'Active recall and spaced repetition', date: 'Mar 23, 2017'},
    { title: 'Consuming an http api from excel', date: 'Feb 24, 2017'},
    { title: 'From wordpress to jekyll', date: 'Feb 23, 2017'},
]

const PostsPage = React.createClass({
    getInitialState: () => {
        return {
            posts : []
        }
    },
    componentWillMount: function () {
      this.setState({posts: posts})
    },
    render: function() {
        function createRow(post) {
            return (
                <li>{post.title} {post.date}</li>
            )
        }
        return (
            <div>
            <h2>All blog posts</h2>
            <ul>
                {this.state.posts.map(createRow)}
            </ul>
            </div>
        );
    }
});

module.exports = PostsPage;