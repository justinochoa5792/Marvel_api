import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class Ironman extends Component {
  state = {
    ironman: [],
  };

  async componentDidMount() {
    await Axios.get(
      "https://gateway.marvel.com:443/v1/public/characters/1009368/comics?format=comic&apikey=b25546058476dc156f11623717f48b92"
    ).then((res) => {
      console.log(res.data.data.results);
      this.setState({ ironman: res.data.data.results });
    });
  }

  showIronman() {
    return this.state.ironman.map((eachIron) => {
      return (
        <div>
          <li>Title: {eachIron.title}</li>
          <li>Issue Number :{eachIron.issueNumber}</li>
          <li>{eachIron.format}</li>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Ironman Comics</h1>
        {this.showIronman()}
      </div>
    );
  }
}

export default Ironman;
