import React, { Component } from 'react';

export default class TemTemCardHeader extends Component {
  render() {
    console.log(this.props.data.luma);
    return (
      <div className="flex px-4 py-2">
        <div className="z-50 text-slate-500 text-xl font-semibold">
          {this.props.data.number}
        </div>

        <div className="z-50 flex ml-auto">
          {this.props.data.luma && (
            <>
              <button className="flex-initial mx-1 px-2 rounded-lg bg-white">
                Org.
              </button>
              <button className="flex-initial mx-1 px-2 rounded-lg bg-white">
                Luma
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}
