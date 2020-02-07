import React, { Component } from 'react';
import Header from "./Components/Header";
import EmpInput from "./Components/EmpInput";
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emp: [
        {
          id: 0,
          name: "",
          email: "ashish@gmail.com",
          age: 21
        },
        {
          id: 1,
          name: "Suketu",
          email: "ajbdhfjkadbfhk@gmail.com",
          age: 21
        }
      ],
      nextID: 2
    }
  }


  render() {
    let list = this.state.emp.map((item) => {
      return (
        <ul>
          <li>{item.name}</li>
          <li>{item.email}</li>
          <li>{item.age}</li>
        </ul>
      )
    })
    return (
      <div>

        <button type="submit" onClick={this.display}>submit</button>
        <Header></Header>
        <EmpInput></EmpInput>
        {list}
      </div>

    );
  }
}

export default App;
