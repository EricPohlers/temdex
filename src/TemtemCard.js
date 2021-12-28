import React, { Component } from 'react';
import Types from './Types';

export default class TemtemCard extends Component {
  constructor(props) {
    super(props);
    this.state = { bgColor: [], typesColor: [] };
  }

  componentDidMount() {
    const color = this.getBackgroundColors(this.props.data.types);
    const typesColor = this.getTypesColors(this.props.data.types);
    this.setState({ bgColor: color, typesColor: typesColor });
  }

  getBackgroundColors(types) {
    if (types.length > 1) {
      return [
        this.firstBackgroundColorType(types[0]),
        this.firstBackgroundColorType(types[1]),
      ];
    }
    return [this.firstBackgroundColorType(types[0])];
  }
  getTypesColors(types) {
    if (types.length > 1) {
      return [
        this.backgroundColorType(types[0]),
        this.backgroundColorType(types[1]),
      ];
    }
    return [this.backgroundColorType(types[0])];
  }

  firstBackgroundColorType(type) {
    switch (type) {
      case 'Digital':
        return '#D4D4D8';
      case 'Melee':
        return '#FDBA74';
      case 'Toxic':
        return '#6B7280';
      case 'Fire':
        return '#F87171';
      case 'Nature':
        return '#BEF264';
      case 'Water':
        return '#7DD3FC';
      case 'Electric':
        return '#FDE047';
      case 'Mental':
        return '#F0ABFC';
      case 'Earth':
        return '#CA8A04';
      case 'Wind':
        return '#86EFAC';
      case 'Neutral':
        return '#F4F4F5';
      case 'Crystal':
        return '#FDA4AF';
      default:
        return '#FAFAFA';
    }
  }
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
      <React.StrictMode>
        <div>
          <div
            style={
              this.state.bgColor.length > 1
                ? {
                    backgroundImage: `linear-gradient(to right ,${this.state.bgColor[0]}, ${this.state.bgColor[1]})`,
                  }
                : { backgroundColor: this.state.bgColor[0] }
            }
            className={`m-2 border border-gray-200 rounded-lg`}
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
            <div className="bg-white opacity-60">
              <div className="w-full text-center">{this.props.data.name}</div>
              <div>
                <div className="m-2">
                  <Types
                    data={this.props.data.types}
                    bg={this.state.typesColor}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
