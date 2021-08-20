import React from "react";
import { Component } from "react";
import * as updaters from "../reducers";

export class Node extends Component {
  render() {
    const { counter, parentId, childIds } = this.props;
    return (
      <div>
        Counter:{counter}
        <button onClick={this.handleIncrementClick}>+</button>
        {typeof parentId !== "undefined" && (
          <a onClick={this.handleRemoveClick}>x</a>
        )}
        <ul>
          {childIds.map(this.renderChild)}
          <li key="add">
            <a onClick={this.handleAddChildClick}>Add Child</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Node;
