import React, { Component } from 'react';
import TemtemCard from './TemtemCard';

export default class TemtemList extends Component {
  render() {
    return (
      <div className="transition-all grid gap-4 2xl: grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-evenly m-8">
        <React.StrictMode>
          {this.props.data.map((temtem) => {
            return (
              <TemtemCard
                key={temtem.number}
                data={temtem}
                weaknesses={this.props.weaknesses}
              />
            );
          })}
        </React.StrictMode>
      </div>
    );
  }
}
