import React, { Component } from 'react';
import TemtemList from './TemtemList';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { temtemList: [] };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevState) {
    if (prevState.temtemList !== this.state.temtemList) {
    }
  }

  getData() {
    axios
      .get(
        'https://temtem-api.mael.tech/api/temtems?fields=number,name,types,evolution,locations,icon,lumaIcon?expand=types'
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({ temtemList: res.data });
      });
  }

  render() {
    return (
      <div>
        <React.StrictMode>
          <TemtemList data={this.state.temtemList} />
        </React.StrictMode>
      </div>
    );
  }
}
