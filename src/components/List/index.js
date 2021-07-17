import { Component } from "react";

import "./index.css";

class content extends Component {
  render() {
    const { listdata } = this.props;
    const { name, email, role } = listdata;
    return (
      <ul>
        <li className="li-style">
          <div className="li-type">
            <input type="checkbox" className="logos" />
            <p className="name">{name}</p>
            <p className="email">{email}</p>
            <p className="role">{role}</p>
            <div className="logos">
              <img
                src="https://res.cloudinary.com/dbzwiigl5/image/upload/v1626518047/edit_aigrgk.png"
                alt="edit"
                className="logo-edit"
              />
              <img
                src="https://res.cloudinary.com/dbzwiigl5/image/upload/v1626520413/clipart842915_wd7iry.png"
                alt="edit"
                className="logo-edit"
              />
            </div>
            <p></p>
          </div>
        </li>
        <hr className="hor-line" />
      </ul>
    );
  }
}

export default content;
