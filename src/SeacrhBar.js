import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="w-full bg-amber-200">
        <React.StrictMode>
          <input
            className="min-w-[50%] py-2 text-black bg-amber-200 pl-10 focus:outline-none focus:bg-amber-200 focus:text-black placeholder:text-gray-500"
            type="text"
            name="search"
            placeholder="Search..."
            onChange={(event) => {
              this.props.handleChange(event);
            }}
          ></input>
        </React.StrictMode>
      </div>
    );
  }
}
