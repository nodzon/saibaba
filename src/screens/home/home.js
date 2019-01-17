import React, { Component } from 'react';
import logo from './icon.png';
import banner from './logo.png';
import saiBaba from './saiBaba.jpg';
import './style.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      prayText:"",
      clearPrayText:false
    };
  }

  // componentDidMount(){
  //     this.props.history.push("/needHelp");
  // }

  gotoNeedHelp = () => {
    this.props.history.push("/needHelp");
  }

  render() {
    return (
      <div className="App w3-center">
        <header className="App-header">
          <h1 className="App-title">&nbsp;<img src={logo} className="App-logo" alt="logo" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={banner} alt="Sai Baba" /></h1>
        </header>
        <p className="App-intro">
          <img src={saiBaba} className="w3-image" alt="Sai Baba" />
        </p>
        <div className="prayText">{this.state.prayText}</div>
        <div className="w3-container">
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Pray, what you wish" required name="Pray" onKeyPress={this.keyPress} /></p>
          <div className="w3-card-4 w3-cell-row w3-center ">
              <div className="w3-container w3-white w3-cell w3-hover-orange">
                <a onClick={false/*this.gotoNeedHelp*/}>{/*I Need<br />Help*/}</a>
                <p>{/*I Can <br />Help*/}OM</p>
              </div>
              <div className="w3-container w3-orange w3-cell w3-hover-orange">
                <p>{/*I Can <br />Help*/}SAI</p>
              </div>
              <div className="w3-container w3-white w3-cell w3-hover-orange">
                <p>{/*Help for<br/>someone*/}RAM</p>
              </div>
          </div>
        </div>
      </div>
    );
  }

  keyPress =(event)=> {
    // console.log("value:"+event.target.value);
    // console.log("code:"+event.key);
    if(this.state.clearPrayText){
      console.log('clear');
      this.setState({clearPrayText:false});

    }
    // if(event.key === ' '){
    //   let newText = this.state.prayText + " " + event.target.value + event.key;
    //   this.setState({prayText:newText,clearPrayText:true});
    //   event.target.value = "";
    // }
    if(event.key === 'Enter'){
      let newText = this.state.prayText + event.target.value+".. ";
      this.setState({prayText:newText,clearPrayText:true});
      event.target.value = "";
    }
  }
}

export default Home;
