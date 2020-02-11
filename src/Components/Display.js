import React, { Component } from "react";
import "../App.css";
class Display extends Component {
  render() {
    const list = this.props.state.emp.map(item => {
      return (
        <div className="card" key={item.email}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name :{item.name}</li>
            <li className="list-group-item">Email :{item.email}</li>
            <li className="list-group-item">
              <b>Age:</b> {item.age}
            </li>
            <li className="list-group-item">Gender :{item.gender}</li>
            <li className="list-group-item">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={e => this.props.handleEdit(e, item.email)}
              >
                Update
              </button>
            </li>
            <li className="list-group-item">
              <button
                type="button"
                className="btn btn-danger"
                onClick={e => this.props.handleRemove(e, item.email)}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      );
    });
    return <div className="card-wrapper">{list}</div>;
  }
}

export default Display;
