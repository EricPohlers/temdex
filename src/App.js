import React, { Component } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import TemtemList from './TemtemList';
import SearchBar from './SeacrhBar';
import TypesFilter from './TypesFilter';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temtemList: [],
      weaknesses: {},
      types: {},
      searchTerm: '',
      selectedTypes: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.getWeaknesses();
    this.getTypes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedTypes !== this.state.selectedTypes) {
      if (this.state.selectedTypes.length < 1) {
        console.log('test');
        this.setState({
          selectedTypes: this.state.types.map((item) => item.name),
        });
      }
    }
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

  getTypes() {
    axios.get('https://temtem-api.mael.tech/api/types').then((res) => {
      this.setState({
        types: res.data,
        selectedTypes: res.data.map((item) => item.name),
      });
    });
  }

  handleTypeFilterClick = (type) => {
    if (this.state.selectedTypes.length === this.state.types.length) {
      this.setState({ selectedTypes: [type] });
    } else {
      if (this.state.selectedTypes.includes(type)) {
        this.setState(() => {
          return {
            selectedTypes: this.state.selectedTypes.filter(
              (element) => element !== type
            ),
          };
        });
      } else {
        this.setState({ selectedTypes: [...this.state.selectedTypes, type] });
      }
    }
  };

  render() {
    const filteredTemTem = this.state.temtemList.filter((temtem) => {
      return (
        temtem.name
          .toLowerCase()
          .includes(this.state.searchTerm.toLocaleLowerCase()) &&
        this.state.selectedTypes.some((type) => temtem.types.includes(type))
      );
    });
    console.log(this.state.selectedTypes);
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
          {this.state.types.length > 0 && (
            <TypesFilter
              allTypes={this.state.types}
              onClick={this.handleTypeFilterClick}
              selectedTypes={this.state.selectedTypes}
            />
          )}
          {this.state.temtemList.length > 0 ? (
            <TemtemList
              data={filteredTemTem}
              weaknesses={this.state.weaknesses}
              types={this.state.types}
            />
          ) : (
            <motion.div className="py-10 flex justify-center px-4 py-2 ">
              <div className="border-2 border-neutral-500 text-lg px-5 py-3 flex bg-black bg-neutral-400 rounded-full ">
                <svg
                  className="animate-spin mt-1 mr-3 w-6 text-white"
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
