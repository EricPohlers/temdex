import React, { Component } from 'react';

export default class TemtemCardIconName extends Component {
  render() {
    return (
      <div className="bg-neutral-800 opacity-80 w-full text-center text-xl font-mono py-1 -mt-11 mb-11 text-white">
        {this.props.name}
      </div>
    );
  }
}
