import { Component } from "react";
import List from "../ListContent";
import "./index.css";

class UserInterface extends Component {
  render() {
    return (
      <div className="ui-container">
        <input
          type="text"
          placeholder="Search by name,email or role"
          className="input"
        />
        <List />
      </div>
    );
  }
}

export default UserInterface;
