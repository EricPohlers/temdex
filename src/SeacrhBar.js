import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="flex text-lg justify-center py-5 pb-2">
        <React.StrictMode>
          <input
            className="mx-2 justify-self-start rounded-full bg-white border-2 min-w-[90%]
             py-2 xl:min-w-[30%] xl:min-w-[20%] lg:min-w-[50%] md:min-w-[50%] sm:min-w-[70%] text-black pl-10 focus:outline-none focus:bg-neutral-100 focus:text-black placeholder:text-gray-800"
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
