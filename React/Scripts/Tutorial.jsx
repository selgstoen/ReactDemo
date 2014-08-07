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

var CommentList = React.createClass({
    render: function() {
        return (
          <div className="commentList">
            Hello, world! I am a CommentList.
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