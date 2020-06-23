import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" />
      <CommentDetail author="Alex" timeAgo="Today at 2:00PM" />
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
