import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onReset = () => {
    this.setState(prevState => ({count: prevState.count === this.count}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="heading">
            The Button has been clicked
            <span className="span-count"> `` {count} `` </span> times
          </h1>
          <p className="description">Click the button to increase the count</p>
        </div>
        <img
          src="https://thumbs.dreamstime.com/b/d-human-click-here-symbol-white-background-36109920.jpg"
          alt="img"
          className="image"
          onClick={this.onIncrement}
        />
        <button className="button" type="button" onClick={this.onReset}>
          Empty Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
