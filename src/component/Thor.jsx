import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class Thor extends Component {
  state = {
    thor: [],
  };

  async componentDidMount() {
    await Axios.get(
      "https://gateway.marvel.com:443/v1/public/characters/1009664/comics?format=comic&apikey=b25546058476dc156f11623717f48b92"
    ).then((response) => {
      console.log(response.data.data.results);
      this.setState({ thor: response.data.data.results });
    });
  }
  showComic = () => {
    return this.state.thor.map((eachComic) => {
      return (
        <div>
          <li>Title: {eachComic.title}</li>
          <li>Issue Number: {eachComic.issueNumber}</li>
          <li>{eachComic.format}</li>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Thor</h1>
        {this.showComic()}
      </div>
    );
  }
}

export default Thor;
