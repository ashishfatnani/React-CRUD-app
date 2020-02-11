import React, { Component } from "react";
import { VALIDATE } from "./Validate";
class EmpInput extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let ErrKeys = Object.keys(VALIDATE.error);
    const isDisabled =
      Object.keys(this.props.state.currentInput).some(
        x => this.props.state.currentInput[x] === ""
      ) || ErrKeys.some(i => VALIDATE.error[i]);
    return (
      <div className="input ui three column grid">
        <div className="row">
          <div className="column"></div>
          <div className="column">
            <form className="ui form">
              <div className="field">
                <label>First Name</label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  value={this.props.state.currentInput.name}
                  className={
                    !this.props.state.isValid.name
                      ? "form-control border-danger"
                      : "form-control"
                  }
                  onChange={e => this.props.validateInput(e, "name")}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={
                    !this.props.state.isValid.email
                      ? "form-control border-danger"
                      : "form-control"
                  }
                  value={this.props.state.currentInput.email}
                  onChange={e =>
                    this.props.validateInput(e, "email", this.props.state.emp)
                  }
                />
              </div>
              <div className="field">
                <label>Age</label>
                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                  className={
                    !this.props.state.isValid.age
                      ? "form-control border-danger"
                      : "form-control"
                  }
                  value={this.props.state.currentInput.age}
                  onChange={e => this.props.validateInput(e, "age")}
                />
              </div>
              <div className="field">
                <label>Gender</label>
                <select
                  className="form-control "
                  id="inputState"
                  onBlur={e => this.props.validateInput(e, "gender")}
                >
                  <option value="">Gender</option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </div>
              <br></br>
              {this.props.state.mode === "create" ? (
                <div className="button-wrapper">
                  <button
                    className="ui button"
                    type="submit"
                    disabled={isDisabled}
                    onClick={this.props.handleOnSubmit}
                  >
                    Create
                  </button>
                </div>
              ) : (
                <div className="button-wrapper">
                  <button
                    className="ui button"
                    type="submit"
                    disabled={isDisabled}
                    onClick={this.props.handleEditSubmit}
                  >
                    Update
                  </button>
                </div>
              )}
              <br></br>
              <div className="button-wrapper">
                <button
                  className="ui button"
                  type="reset"
                  onClick={this.props.handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
}

export default EmpInput;
