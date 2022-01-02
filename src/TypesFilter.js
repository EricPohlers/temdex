import React, { Component } from 'react';
import Type from './Type';

export default class TypesFilter extends Component {
  render() {
    return (
      <div className="flex flex-wrap mx-8 my-2">
        {this.props.allTypes.map((type, index) => {
          return (
            <Type
              key={index}
              textColor={'text-white'}
              index={index}
              allTypes={this.props.allTypes}
              currentType={this.props.allTypes.filter(
                (element) => element.name === type.name
              )}
              onClick={this.props.onClick}
              selected={this.props.selectedTypes.includes(type.name)}
            />
          );
        })}
      </div>
    );
  }
}
