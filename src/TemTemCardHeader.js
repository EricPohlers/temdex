import React, { Component } from 'react';

export default class TemTemCardHeader extends Component {
  render() {
    console.log(this.props.data.icon);
    return (
      <div className="flex px-4 py-2">
        <div className="z-50 text-slate-500 text-xl font-semibold">
          {this.props.data.number}
        </div>

        <div className="z-50 flex ml-auto">
          {this.props.data.luma && (
            <>
              <button
                onClick={() => this.props.data.iconCangeClick('icon')}
                className={`flex-initial mx-1 px-2 rounded-lg ${
                  this.props.data.icon === 'icon' ? 'bg-stone-400' : 'bg-white'
                }`}
              >
                Org.
              </button>
              <button
                onClick={() => this.props.data.iconCangeClick('lumaIcon')}
                className={`flex-initial mx-1 px-2 rounded-lg ${
                  this.props.data.icon === 'lumaIcon'
                    ? 'bg-stone-400'
                    : 'bg-white'
                }`}
              >
                Luma
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}
