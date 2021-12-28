import React, { Component } from 'react';

export default class Types extends Component {
  render() {
    return (
      <div className="pb-8">
        <span>Types:</span>
        {this.props.data.map((type, index) => {
          return (
            <span
              key={index}
              style={{ backgroundColor: this.props.bg[index] }}
              className="border-2 border-stone-300 rounded-full mx-1 py-1 px-2 text-white"
            >
              {type}
            </span>
          );
        })}
      </div>
    );
  }
}
