import { Component } from "react";
import Content from "../List";

import "./index.css";

class List extends Component {
  state = {
    listDetails: [],
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const url =
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    this.setState({ listDetails: data });
  };
  render() {
    const { listDetails } = this.state;

    return (
      <div>
        {listDetails.map((each) => (
          <Content listdata={each} key={each.id} />
        ))}
      </div>
    );
  }
}

export default List;
