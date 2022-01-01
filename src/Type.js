import React, { Component } from 'react';

export default class Type extends Component {
  render() {
    return (
      <div className="flex flex-wrap">
        <span
          key={this.props.index}
          style={{
            backgroundColor: this.props.bg ? this.props.bg : 'black',
          }}
          className={`flex pr-2 items-center h-10 border-2 border-stone-300 rounded-full  ${this.props.textColor} `}
        >
          <img
            className="h-8"
            alt={this.props.type}
            variant="top"
            src={
              this.props.currentType[0].icon !== ''
                ? `https://temtem-api.mael.tech/${this.props.currentType[0].icon}`
                : ''
            }
          />
          {this.props.type}
        </span>
      </div>
    );
  }
}
