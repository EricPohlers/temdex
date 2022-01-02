import React, { Component } from 'react';

export default class Type extends Component {
  backgroundColorType(type) {
    switch (type) {
      case 'Digital':
        return '#475569';
      case 'Melee':
        return '#EA580C';
      case 'Toxic':
        return '#292524';
      case 'Fire':
        return '#DC2626';
      case 'Nature':
        return '#65A30D';
      case 'Water':
        return '#2563EB';
      case 'Electric':
        return '#FACC15';
      case 'Mental':
        return '#C026D3';
      case 'Earth':
        return '#854D0E';
      case 'Wind':
        return '#2DD4BF';
      case 'Neutral':
        return '#A1A1AA';
      case 'Crystal':
        return '#EC4899';
      default:
        return '#F8FAFC';
    }
  }
  render() {
    return (
      <button
        className="flex flex-wrap"
        onClick={(e) => {
          this.props.onClick(this.props.currentType[0].name, e);
        }}
      >
        <span
          key={this.props.index}
          style={{
            backgroundColor: this.backgroundColorType(
              this.props.currentType[0].name
            ),
          }}
          className={`m-1 flex pr-2 items-center h-10 border-2 border-stone-300 rounded-full  ${
            this.props.textColor
          }  ${this.props.selected ? '' : 'brightness-50'} `}
        >
          <img
            className="h-8"
            alt={this.props.currentType[0].name}
            variant="top"
            src={
              this.props.currentType[0].icon !== ''
                ? `https://temtem-api.mael.tech/${this.props.currentType[0].icon}`
                : ''
            }
          />
          {this.props.currentType[0].name}
        </span>
      </button>
    );
  }
}
