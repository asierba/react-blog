const React = require('react');

const PostForm = React.createClass({
    render: function () {
        return (
            <form>
                <h1>Manage Post</h1>

                <label htmlFor="title">Title</label>
                <input type="text" name="title" className="form-control" placeholder="title" />
                <br/>

                <label htmlFor="content">Content</label>
                <textarea name="content" className="form-control" rows="20" placeholder="content"></textarea>
                <br/>

                <input type="submit" value="Save" className="btn btn-default"/>
            </form>
        );
    }
});

module.exports = PostForm;