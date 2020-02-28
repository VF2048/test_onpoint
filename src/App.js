import React from 'react';
import './App.css';

function pageScroll(page) {
  if (page < 100)
    return (
      <div style={{ position: "absolute" }}>
        <img className="page1" src="img/PageActive.png" alt="PageActive" />
        <img className="page2" src="img/PageDisable.png" alt="PageDisable" />
        <img className="page3" src="img/PageDisable.png" alt="PageDisable" />
      </div>
    )
  if (page > 100)
    return (
      <div style={{ position: "absolute" }}>
        <img className="page1" src="img/PageDisable.png" alt="PageDisable" />
        <img className="page2" src="img/PageDisable.png" alt="PageDisable" />
        <img className="page3" src="img/PageActive.png" alt="PageActive" />
      </div>
    )
  else
    return (
      <div style={{ position: "absolute" }}>
        <img className="page1" src="img/PageDisable.png" alt="PageDisable" />
        <img className="page2" src="img/PageActive.png" alt="PageActive" />
        <img className="page3" src="img/PageDisable.png" alt="PageDisable" />
      </div>
    )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      state: 0,
      range: 0,
      speed: 1000
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.MouseMove);
    window.addEventListener('mouseup', this.mouseUp);
    window.addEventListener('wheel', this.scroll);
  }

  scroll = (event) => {
    if (event.deltaY > 0) {
      if (this.state.state < 200)
        this.setState({
          state: this.state.state + 100,
        })
    }
    else if (event.deltaY < 0) {
      if (this.state.state >= 100) {
        this.setState({
          state: this.state.state - 100,
        })
      }
    }
  }

  mouseDown = (event) => {
    if (event.target.tagName === "DIV") {
      this.setState({
        mouseY: event.clientY,
        mouseDown: true,
      })
    }
  }

  mouseUp = () => {
    let state;
    if (this.state.state < 50)
      state = 0
    else if (this.state.state > 150)
      state = 200
    else
      state = 100
    this.setState({
      mouseDown: false,
      speed: 1000,
      state: state,
      mouseInput: false,
    })
    let interval = setInterval(() => {
      if (this.state.input === 0 || this.state.input === 100 || this.state.input === 200) {
        clearInterval(interval);
        return;
      }
      let value = 0;
      if ((this.state.input < 50 && this.state.input > 0) || (this.state.input > 100 && this.state.input < 150))
        value = this.state.input - 1;
      if ((this.state.input > 50 && this.state.input < 100) || (this.state.input > 150 && this.state.input < 200))
        value = this.state.input + 1;
      this.setState({
        input: value
      })
    }, 4)
  }

  MouseMove = (event) => {
    if (this.state.mouseDown) {
      this.setState({
        state: this.state.state - ((event.clientY - this.state.mouseY) / 5),
        mouseY: event.clientY,
        speed: 0,
      })
    }
  }

  range = (event) => {
    let value;
    if (event.target.value < 50)
      value = 0
    else if (event.target.value > 150)
      value = 200
    else
      value = 100
    this.setState({
      input: parseInt(event.target.value),
      range: value
    })
  }

  render() {
    let help;
    if (this.state.state === 0)
      help = {
        visibility: "visible",
      }
    else
      help = {
        visibility: "hidden",
      }
    let style2 = {
      zIndex: 200,
      transform: "translate3d( 0px," + -((this.state.state-100)*2) + "vh, 0px)",
      transition: "all " + (this.state.speed) + "ms ease 0s",
      userSelect: "none",
    }
    let style = {
      transform: "translate3d( 0px," + -(this.state.state) + "vh, 0px)",
      transition: "all " + this.state.speed + "ms ease 0s",
      userSelect: "none",
    }

    let slider = {

    }
    let range = {
      transform: "translate3d(" + -(this.state.range) + "vw, 0px, 0px)",
      transition: "all 1000ms ease 0s",
    }

    return (
      <div>
        {pageScroll(this.state.state)}
        <div className="App"
          style={style}
          onMouseDown={this.mouseDown}
        >
          <div className="page page1">
            <div style={help}>
              <img className="img1" src="img/shadow1.png" alt="1" draggable="false" />
              <img className="img2" src="img/shadow2.png" alt="2" draggable="false" />
            </div>
          </div>
          <div className="page page2">
          </div>
          <div className="page page3">
            <input
              className="slider"
              style={slider}
              type="range"
              max="200"
              value={this.state.input}
              onChange={this.range}
            />
            <div style={range}>
              <div className="range range1">
                <img className="ice5" src="img/ice5.png" alt="5" draggable="false" />
                <img className="ice6" src="img/ice6.png" alt="6" draggable="false" />
                <img className="ice7" src="img/ice7.png" alt="7" draggable="false" />
              </div>
              <div className="range range2">
                <img className="ice8" src="img/ice8.png" alt="8" draggable="false" />
                <img className="ice9" src="img/ice9.png" alt="9" draggable="false" />
                <img className="ice10" src="img/ice10.png" alt="10" draggable="false" />
              </div>
              <div className="range range3">
                <img className="ice11" src="img/ice11.png" alt="11" draggable="false" />
                <img className="ice12" src="img/ice12.png" alt="12" draggable="false" />
                <img className="ice13" src="img/ice13.png" alt="13" draggable="false" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={style2}
          onMouseDown={this.mouseDown}
        >
          <div>
          </div>
          <div>
            <img className="ice1" src="img/ice1.png" alt="1" draggable="false" />
            <img className="ice2" src="img/ice2.png" alt="2" draggable="false" />
            <img className="ice3" src="img/ice3.png" alt="3" draggable="false" />
            <img className="ice4" src="img/ice4.png" alt="4" draggable="false" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
