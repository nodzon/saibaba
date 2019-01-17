import React, { Component } from 'react';


class CanHelp extends Component {
  constructor(props){
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <div>Can Help Page</div>
        <div className="w3-container">
          <div>How would you like to Help</div>
          <p><select>
            <option value="Physically" />
            <option value="Financially" />
            <option value="I am a Doctor" />
          </select></p>
        </div>
      </div>
    );
  }
}

export default CanHelp;
