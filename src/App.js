import React, { Component } from 'react';
import TemtemList from './TemtemList';
import axios from 'axios';
import SearchBar from './SeacrhBar';

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
            <div>Loading...</div>
          )}
        </React.StrictMode>
      </div>
    );
  }
}
