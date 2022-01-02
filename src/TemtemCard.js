import React, { Component } from 'react';
import Types from './Types';
import TemtemCardHeader from './TemtemCardHeader';
import TemtemCardIcon from './TemtemCardIcon';

export default class TemtemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: [],
      icon: 'icon',
      luma: false,
    };
    this.weaknesses = [];
  }

  componentDidMount() {
    const color = this.getBackgroundColors(this.props.data.types);
    this.setState({
      bgColor: color,
    });
    this.checkIfImageExists(
      `https://temtem-api.mael.tech/${this.props.data.lumaIcon}`,
      (exists) => {
        if (exists) {
          this.setLumaState(true);
        } else {
          this.setLumaState(false);
        }
      }
    );
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

  checkIfImageExists(url, callback) {
    const img = new Image();

    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };

      img.onerror = () => {
        callback(false);
      };
    }
  }

  setLumaState = (bool) => {
    this.setState({ luma: bool });
  };

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

  getWeaknesses() {
    const asArray = Object.entries(this.props.weaknesses);
    const test = this.props.data.types.map((entry) => {
      return asArray.filter((type) => {
        return type[1][entry] === 2;
      });
    });
    const lala = [].concat(...test).map((entry) => {
      return entry[0];
    });
    return [...new Set(lala)];
  }

  iconChange = (value) => {
    this.setState({ icon: value });
  };

  render() {
    return (
      <React.StrictMode>
        <div className="shadow-lg rounded-lg">
          <div
            style={
              this.state.bgColor.length > 1
                ? {
                    backgroundImage: `linear-gradient(to right ,${this.state.bgColor[0]}, ${this.state.bgColor[1]})`,
                  }
                : { backgroundColor: this.state.bgColor[0] }
            }
            className={`shadow-lg rounded-lg`}
            key={this.props.data.number}
          >
            <TemtemCardHeader
              data={{
                number: this.props.data.number,
                name: this.props.data.name,
                luma: this.state.luma,
                icon: this.state.icon,
                iconCangeClick: this.iconChange,
              }}
            />
            <TemtemCardIcon
              data={{
                icon: this.state.icon,
                luma: this.state.luma,
                iconUrl: {
                  icon: this.props.data.icon,
                  lumaIcon: this.props.data.lumaIcon,
                },
                name: this.props.data.name,
              }}
              swipe={this.iconChange}
            />
            <div className="bg-white opacity-80 rounded-b-lg">
              <div className="rounded-b-lg">
                <Types
                  text="Types"
                  textColor="text-white"
                  containerColor=""
                  data={this.props.data.types}
                  allTypes={this.props.types}
                />
              </div>
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
