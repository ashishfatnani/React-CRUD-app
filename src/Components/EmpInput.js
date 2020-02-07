import React, { Component } from 'react'

class EmpInput extends Component {
       constructor(props) {
              super(props)

              this.state = {

              }
       }



       render() {
              return (
                     <div className="ui three column grid">
                            <div className="row">
                                   <div className="column"></div>
                                   <div className="column">
                                          <form className="ui form" onSubmit={this.handleSubmit}>
                                                 <div className="field">
                                                        <label>First Name</label>
                                                        <input type="text" name="first-name" placeholder="First Name" />
                                                 </div>
                                                 <div className="field">
                                                        <label>Email</label>
                                                        <input type="email" name="email" placeholder="Email" />
                                                 </div>
                                                 <div className="field">
                                                        <label>Age</label>
                                                        <input type="text" name="age" placeholder="Age" />
                                                 </div>
                                                 <div className="">
                                                        <label>Gender</label>
                                                        <select className="">
                                                               <option value="">Gender</option>
                                                               <option value="1">Male</option>
                                                               <option value="0">Female</option>
                                                        </select>
                                                 </div>

                                                 <button className="ui button" type="submit">Create</button>
                                          </form>
                                   </div>
                                   <div className="column"></div>
                            </div>
                     </div>
              )
       }
}

export default EmpInput;
