import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="w-full bg-gray-100">
        <React.StrictMode>
          <input
            className="min-w-[50%] py-2 text-black bg-gray-100 pl-10 focus:outline-none focus:bg-gray-200 focus:text-black"
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
