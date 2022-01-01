import React, { Component } from 'react';
import TemtemList from './TemtemList';
import axios from 'axios';
import SearchBar from './SeacrhBar';
import { motion } from 'framer-motion';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { temtemList: [], weaknesses: {}, searchTerm: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.getWeaknesses();
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  getData() {
    axios
      .get(
        'https://temtem-api.mael.tech/api/temtems?fields=number,name,types,evolution,locations,icon,lumaIcon,?expand=types'
      )
      .then((res) => {
        this.setState({ temtemList: res.data });
      });
  }
  getWeaknesses() {
    axios.get('https://temtem-api.mael.tech/api/weaknesses').then((res) => {
      this.setState({ weaknesses: res.data });
    });
  }

  render() {
    const filteredTemTem = this.state.temtemList.filter((temtem) => {
      return temtem.name
        .toLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase());
    });
    return (
      <div>
        <React.StrictMode>
          <div className="text-white w-full bg-amber-500 p-4 text-3xl">
            TemDex
          </div>
          <SearchBar
            value={this.state.searchTerm}
            handleChange={this.handleChange}
          />
          {this.state.temtemList.length > 0 ? (
            <TemtemList
              data={filteredTemTem}
              weaknesses={this.state.weaknesses}
            />
          ) : (
            <motion.div className="px-4 py-2 bg-slate-300">
              <div className="flex justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="black"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="orange"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Loading...</span>
              </div>
            </motion.div>
          )}
        </React.StrictMode>
      </div>
    );
  }
}
