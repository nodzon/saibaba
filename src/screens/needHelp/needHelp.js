import React, { Component } from 'react';


class NeedHelp extends Component {
  constructor(props){
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <div>Need Help Page</div>
        <div className="w3-container">
          <div>Type of Help</div>
          <p><select>
            <option value="">Hospitalization</option>
            <option value="">Medical Advice</option>
          </select></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Your name" required name="name" /></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Detail of Help" required name="Detail" /></p>

        </div>
      </div>
    );
  }
}

export default NeedHelp;
