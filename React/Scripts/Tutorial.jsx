/** @jsx React.DOM */

var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var HeadingTitle = React.createClass({
	render: function() {
		return (
			<div className="HeadingTitle">
				<h1>Heading comes here.</h1>
			</div>
		);
	}
});

var converter = new Showdown.converter();
var Comment = React.createClass({
  render: function() {
	var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

var CommentList = React.createClass({
    render: function() {
		var commentNodes = this.props.data.map(function (comment) {
		  return (
			<Comment author={comment.author}>
			  {comment.text}
			</Comment>
		  );
		});
        return (
          <div className="commentList">
           {commentNodes}
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
	getInitialState: function() {
		return {data: []};
	  },
    render: function() {
        return (
          <div className="commentBox">
            <h3>Comments</h3>
            <CommentList data={this.state.data} />
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
   <CommentBox url="comments.json" />,
  document.getElementById('content')
);