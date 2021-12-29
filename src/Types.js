import React, { Component } from 'react';

export default class Types extends Component {
  render() {
    return (
      <div
        className={`flex py-4 px-3 font-mono ${
          this.props.containerColor ? this.props.containerColor : ''
        }`}
      >
        <span className="mr-auto">{`${this.props.text}:`}</span>
        <span className="">
          {this.props.data.map((type, index) => {
            return (
              <span
                key={index}
                style={{ backgroundColor: this.props.bg[index] }}
                className={` border-2 border-stone-300 rounded-full mx-1 py-1 px-2 ${this.props.textColor} `}
              >
                {type}
              </span>
            );
          })}
        </span>
      </div>
    );
  }
}
