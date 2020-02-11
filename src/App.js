import React, { Component } from "react";
import Header from "./Components/Header";
import EmpInput from "./Components/EmpInput";
import { VALIDATE } from "./Components/Validate";
import Display from "./Components/Display";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emp: [
        {
          name: "Dhruvil  ",
          email: "dhruvil@gmail.com",
          age: 21,
          gender: "Female"
        },
        {
          name: "Mustafa",
          email: "mustafa@gmail.com",
          age: 21,
          gender: "Male"
        }
      ],
      isValid: {
        name: true,
        email: true,
        age: true
      },
      currentInput: {
        name: "",
        email: "",
        age: "",
        gender: "Male"
      },
      mode: "create"
    };
  }
  validateInput = (e, key, emp) => {
    let validity = this.state.isValid;
    let currIn = this.state.currentInput;
    currIn[key] = e.target.value;
    if (VALIDATE[key](e.target.value, emp)) {
      validity[key] = true;
    } else {
      validity[key] = false;
    }
    this.setState(this.state);
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.setState({
      emp: [
        ...this.state.emp,
        {
          name: this.state.currentInput.name,
          email: this.state.currentInput.email,
          age: this.state.currentInput.age,
          gender: this.state.currentInput.gender
        }
      ],
      currentInput: {
        name: "",
        email: "",
        age: "",
        gender: "Male"
      }
    });
  };
  handleEdit = (e, id) => {
    const node = this.state.emp.find(item => item.email === id);
    this.setState({
      currentInput: {
        name: node.name,
        email: node.email,
        age: node.age,
        gender: node.gender
      },
      mode: "edit"
    });
  };

  handleEditSubmit = e => {
    e.preventDefault();
    let i = 0;
    let node = this.state.emp.find((item, index) => {
      i = index;
      return item.email === this.state.currentInput.email;
    });
    node = this.state.emp[i];
    node.name = this.state.currentInput.name;
    node.email = this.state.currentInput.email;
    node.age = this.state.currentInput.age;
    node.gender = this.state.currentInput.gender;
    this.setState({
      currentInput: {
        name: "",
        email: "",
        age: "",
        gender: ""
      },
      mode: "create"
    });
  };
  handleCancel = e => {
    e.preventDefault();
    this.setState({
      currentInput: {
        name: "",
        email: "",
        age: "",
        gender: ""
      },
      mode: "create"
    });
  };
  handleRemove = (e, id) => {
    let updatedList = this.state.emp.filter(item => item.email !== id);
    this.setState({
      emp: updatedList
    });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <EmpInput
          validateInput={this.validateInput}
          handleCancel={this.handleCancel}
          handleEdit={this.handleEdit}
          handleEditSubmit={this.handleEditSubmit}
          handleOnSubmit={this.handleOnSubmit}
          handleRemove={this.handleRemove}
          state={this.state}
        ></EmpInput>

        <Display
          handleRemove={this.handleRemove}
          handleEdit={this.handleEdit}
          state={this.state}
        ></Display>
      </div>
    );
  }
}

export default App;
