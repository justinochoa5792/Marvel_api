import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class CaptainAmerica extends Component {
  state = {
    cap: [],
  };

  async componentDidMount() {
    await Axios.get(
      "https://gateway.marvel.com:443/v1/public/characters/1009220/comics?format=comic&apikey=b25546058476dc156f11623717f48b92"
    ).then((res) => {
      console.log(res.data.data.results);
      this.setState({ cap: res.data.data.results });
    });
  }

  showCap() {
    return this.state.cap.map((eachCap) => {
      return (
        <div>
          <li>Title: {eachCap.title}</li>
          <li>Issue Number: {eachCap.issueNumber}</li>
          <li>{eachCap.format}</li>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Captain America Comics</h1>
        {this.showCap()}
      </div>
    );
  }
}

export default CaptainAmerica;
