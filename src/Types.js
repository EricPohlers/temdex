import React, { Component } from 'react';
import Type from './Type';

export default class Types extends Component {
  typeData = this.props.allTypes.filter((entry) => {
    return this.props.data.includes(entry.name);
  });
  render() {
    // console.log(this.typeData);
    return (
      <div
        className={`flex py-4 px-3 font-mono flex-wrap ${
          this.props.containerColor ? this.props.containerColor : ''
        }`}
      >
        <span className="mr-auto mb-2">{`${this.props.text}:`}</span>
        <span className="flex flex-wrap">
          {this.props.data.map((type, index) => {
            return (
              <Type
                key={index}
                textColor={this.props.textColor}
                index={index}
                allTypes={this.props.allTypes}
                currentType={this.typeData.filter(
                  (element) => element.name === type
                )}
                selected="true"
                onClick={() => ''}
              />
            );
          })}
        </span>
      </div>
    );
  }
}
