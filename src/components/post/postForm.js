const React = require('react');
const marked = require('marked');

const PostForm = React.createClass({
    render: function () {
        function getFromGroupClasses(errors) {
            return errors ?
                'form-group has-error' :
                "form-group";

        }

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <h1>Add Post</h1>

                            <div className={getFromGroupClasses(this.props.post.errors.title)}>
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" className="form-control" placeholder="title"
                                       value={this.props.post.title}
                                       onChange={this.props.onChange}/>
                                <div>{this.props.post.errors.title}</div>
                            </div>

                            <div className={getFromGroupClasses(this.props.post.errors.content)}>
                                <label htmlFor="content">Content</label>
                                <textarea name="content" className="form-control" rows="20" placeholder="content"
                                          value={this.props.post.content}
                                          onChange={this.props.onChange}></textarea>
                                <div>{this.props.post.errors.content}</div>
                            </div>

                            <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h1> {this.props.post.title} </h1>
                        <div dangerouslySetInnerHTML={{__html: marked(this.props.post.content)}}></div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PostForm;