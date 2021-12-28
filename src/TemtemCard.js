import React, { Component } from 'react';

export default class TemtemCard extends Component {
  backgroundColorType(type) {
    switch (type) {
      case 'Digital':
        return 'neutral-600';
      case 'Melee':
        return 'amber-600';
      case 'Toxic':
        return 'gray-900';
      case 'Fire':
        return 'red-600';
      case 'Nature':
        return 'green-600';
      case 'Water':
        return 'cyan-600';
      case 'Electric':
        return 'yellow-300 ';
      case 'Mental':
        return 'purple-600';
      case 'Earth':
        return 'yellow-900';
      case 'Wind':
        return 'emerald-400';
      case 'Neutral':
        return 'gray-300';
      case 'Crystal':
        return 'rose-500';
      default:
        return 'white';
    }
  }
  backgroundColorGradientTypes([type1, type2]) {
    const color1 = this.firstBackgroundColorType(type1);
    const color2 = this.firstBackgroundColorType(type2);
    return 'from-' + color1 + ' to-' + color2;
  }

  firstBackgroundColorType(type) {
    switch (type) {
      case 'Digital':
        return 'neutral-300';
      case 'Melee':
        return 'amber-300';
      case 'Toxic':
        return 'gray-500';
      case 'Fire':
        return 'red-300';
      case 'Nature':
        return 'green-300';
      case 'Water':
        return 'cyan-300';
      case 'Electric':
        return 'yellow-300 ';
      case 'Mental':
        return 'purple-300';
      case 'Earth':
        return 'yellow-600';
      case 'Wind':
        return 'emerald-200';
      case 'Neutral':
        return 'gray-100';
      case 'Crystal':
        return 'rose-300';
      default:
        return 'white';
    }
  }
  render() {
    const color =
      this.props.data.types.length < 2
        ? 'bg-' + this.firstBackgroundColorType(this.props.data.types[0])
        : 'bg-gradient-to-r ' +
          this.backgroundColorGradientTypes(this.props.data.types);
    return (
      <React.StrictMode>
        <div>
          <div
            className={`border border-gray-200 rounded-lg max-w-sm ${color}`}
            key={this.props.data.number}
          >
            <img
              className={
                this.props.data.icon !== ''
                  ? 'rounded-t-lg w-full'
                  : 'rounded-t-lg blur-lg w-full'
              }
              alt="temtem"
              variant="top"
              src={
                this.props.data.icon !== ''
                  ? `https://temtem-api.mael.tech/${this.props.data.icon}`
                  : 'https://temtem-api.mael.tech//images/portraits/temtem/large/Tuwai.png'
              }
            />
            <div>
              <div className="w-full text-center">{this.props.data.name}</div>
              <div>
                <div className="m-2">
                  <span className="mr-2">Types:</span>
                  {this.props.data.types.map((type, index) => {
                    const bg = 'bg-' + this.backgroundColorType(type);
                    return (
                      <span className={`${bg} rounded-lg px-4`} key={index}>
                        {type}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
