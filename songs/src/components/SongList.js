import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(({ title, duration }) => {
      return (
        <div className="item" key={title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>

          <div className="content">{title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = ({ songs }) => {
  return { songs };
};

export default connect(mapStateToProps)(SongList);
