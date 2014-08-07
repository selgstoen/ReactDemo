/** @jsx React.DOM */


var HeadingTitle = React.createClass({
	render: function() {
		return (
			<div className="HeadingTitle">
				<h1>Heading comes here.</h1>
			</div>
		);
	}
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var CommentList = React.createClass({
    render: function() {
        return (
          <div className="commentList">
            <Comment author="Pete Hunt">This is one comment</Comment>
			<Comment author="Jordan Walke">This is *another* comment</Comment>
          </div>
      );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
          <div className="commentForm">
            Hello, world! I am a CommentForm.
          </div>
      );
    }
});


var CommentBox = React.createClass({
    render: function() {
        return (
          <div className="commentBox">
            <h3>Comments</h3>
            <CommentList />
            <CommentForm />
          </div>
      );
    }
});

React.renderComponent(
	<HeadingTitle/>, 
	document.getElementById('heading')
);

React.renderComponent(
  <CommentBox />,
  document.getElementById('content')
);