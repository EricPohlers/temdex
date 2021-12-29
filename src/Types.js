import React, { Component } from 'react';

export default class Types extends Component {
  render() {
    return (
      <div
        className={`py-4 px-3 ${
          this.props.containerColor ? this.props.containerColor : ''
        }`}
      >
        <span className="font-mono">{`${this.props.text}:`}</span>
        {this.props.data.map((type, index) => {
          return (
            <span
              key={index}
              style={{ backgroundColor: this.props.bg[index] }}
              className={`border-2 border-stone-300 rounded-full mx-1 py-1 px-2 ${this.props.textColor} `}
            >
              {type}
            </span>
          );
        })}
      </div>
    );
  }
}
